

<!-- toc -->

- [GPUs Parallelism](#gpus-parallelism)
  * [Data Parallelism](#data-parallelism)
    + [Core concept](#core-concept)
    + [Limitations](#limitations)
    + [General considerations](#general-considerations)
      - [Batch-size](#batch-size)
      - [GPUs distribution](#gpus-distribution)
      - [Batch normalization](#batch-normalization)
    + [DistributedDataParallel (DDP)](#distributeddataparallel-ddp)
      - [Core concept](#core-concept-1)
      - [Considerations](#considerations)
  * [Model Parallelism](#model-parallelism)
      - [Vertical MP (Naive)](#vertical-mp-naive)
      - [PipelineParallel (PP)](#pipelineparallel-pp)
      - [DeepSpeed ZeRO](#deepspeed-zero)
      - [CPU Offload](#cpu-offload)
    + [Fully Sharded Data Parallelism (FSDP)](#fully-sharded-data-parallelism-fsdp)
      - [Key Concepts of FSDP:](#key-concepts-of-fsdp)
      - [Limitations](#limitations-1)
      - [transformers ecosystem](#transformers-ecosystem)
    + [Shared Data Parallel vs FSDP](#shared-data-parallel-vs-fsdp)
      - [Tensor Parallelism (TP)](#tensor-parallelism-tp)
  * [Choosing the Right Parallelism Strategy](#choosing-the-right-parallelism-strategy)
      - [When Working with a Single GPU](#when-working-with-a-single-gpu)
      - [When Working with a Single Node Equipped with Multiple GPUs](#when-working-with-a-single-node-equipped-with-multiple-gpus)
      - [When Working Across Multiple Nodes with Multiple GPUs](#when-working-across-multiple-nodes-with-multiple-gpus)
- [To check](#to-check)

<!-- tocstop -->

# GPUs Parallelism
- https://huggingface.co/docs/transformers/v4.15.0/parallelism
- https://huggingface.co/docs/transformers/v4.38.1/en/perf_train_gpu_one
- https://github.com/huggingface/accelerate/issues/1840#issuecomment-1683105994
- 
Distributing models over multiple GPUs and distributing inference over multiple GPUs are essential techniques for handling large models or accelerating the training and inference processes. Let's break down these topics into manageable parts, focusing on the Python, PyTorch, and Hugging Face ecosystems.

## Data Parallelism
Data parallelism involves dividing the input data across multiple GPUs, where each GPU executes the same model on its subset of data. 
**Each GPU needs to store a copy of the model**. For very large models, this can limit the maximum model size that can be trained. After processing, the gradients from each GPU are aggregated to update the model parameters. This parallelism allows for efficient utilization of multiple GPUs to speed up training by processing larger batches of data simultaneously.

### Core concept
`torch.nn.DataParallel` implements gradient aggregation by following these steps:

1. **Replicate**: The model is replicated on each GPU, so each one has a copy of the model.
2. **Scatter**: The input data batch is divided into smaller chunks, and each chunk is sent to a different GPU.
3. **Parallel Compute**: Each GPU computes the forward pass and then the backward pass independently on its chunk of data.
4. **Gather and Aggregate**: The gradients from all GPUs are gathered and summed up on the master GPU (usually GPU 0).
5. **Update**: The aggregated gradients are used to update the model parameters. Since all replicas of the model are synchronized at the beginning of each forward pass, this ensures that all models are updated uniformly.


### Limitations
- **Communication Overhead**: After each backward pass, the model parameters across all GPUs are synchronized, ensuring consistent model updates and convergence behavior similar to that of a single-GPU setup. The need to aggregate gradients and update all models with the averaged parameters can introduce communication overhead, especially as the number of GPUs increases.
- **GPU Utilization**: Imbalanced data distribution or varying computational loads can lead to some GPUs waiting for others to finish, leading to suboptimal utilization.
- **Memory Limitations**: Each GPU needs to store a copy of the model. For very large models, this can limit the maximum model size that can be trained.

### General considerations
#### Batch-size

When using data parallelism, the effective batch size is the per-GPU batch size multiplied by the number of GPUs. This has several implications:

- **Memory Constraints**: Larger total batch sizes can lead to out-of-memory errors if not adjusted according to the memory capacity of the GPUs.
- **Learning Rate Scaling**: Increasing the batch size often requires adjustments to the learning rate and learning rate schedule to maintain model convergence quality.
- **Efficiency**: Larger batch sizes can improve computational efficiency by better utilizing the GPU cores, but there's a point of diminishing returns where further increasing the batch size may not lead to proportional decreases in training time.

#### GPUs distribution
 Effect on Memory Usage Across GPUs

- **Uneven Distribution**: Memory usage is not always evenly distributed across GPUs when using `torch.nn.DataParallel`. This is due to several factors:
    - The master GPU (usually GPU 0) handles additional tasks, such as aggregating gradients and updating model parameters, which can lead to higher memory usage.
    - Model architecture and data can lead to slight variations in memory usage. For example, certain layers or operations might have different memory footprints due to their computational characteristics.
- **Mitigation Strategies**: To mitigate uneven memory distribution, one might consider:
    - Using `torch.nn.DistributedDataParallel` instead, which tends to have more even memory usage and better scalability.
    - Manually balancing the workload by adjusting the model or the data pipeline, although this can be complex and model-specific.

#### Batch normalization
Batch Normalization Layers
- **Issue**: When using `torch.nn.DataParallel`, batch normalization layers can behave differently than expected because they compute statistics (mean and variance) on each GPU's subset of the data rather than across the entire dataset.
- **Solution**: Consider using synchronized batch normalization, which calculates the mean and variance across all batches on all GPUs. PyTorch provides `torch.nn.SyncBatchNorm` for this purpose.

### DistributedDataParallel (DDP)
An advanced version of data parallelism that is more efficient than `torch.nn.DataParallel`. DDP uses multi-process parallelism, with one process per GPU, and synchronizes gradients across all processes by communicating directly from GPU to GPU.

#### Core concept

- **Process Per GPU**: DDP operates by initiating a separate process for each GPU in use, ensuring that each process has its own instance of the model loaded in memory. This setup is foundational to achieving parallel computation across GPUs.
- **Model Replication**: At the start of the training process, the model from the primary process (usually on the first GPU) is replicated across all other GPUs. This ensures uniformity in model parameters across all processes at the beginning of training.
- **Independent Computation with Synchronization**: Each GPU processes a unique subset of the data, performing forward and backward passes independently. The gradients are then synchronized across all GPUs, ensuring consistent model updates despite the distributed computation.

#### Considerations
- **Efficiency and Scalability**: By leveraging DDP, training times can be significantly reduced, making it feasible to train larger models or datasets that would be impractical on a single GPU. DDP's design allows it to scale efficiently with the addition of more GPUs, whether they are located within the same node (machine) or distributed across multiple nodes.
- **Memory and Resource Management**: Since each GPU hosts a copy of the model, memory usage increases with the number of GPUs. This necessitates careful consideration of the model size and available GPU memory. Additionally, managing CPU and memory resources efficiently is crucial in a multi-process, multi-GPU setup.

## Model Parallelism 
Model parallelism is a technique used to distribute a deep learning model across multiple GPUs (or other computational resources) in a way that different parts of the model are processed on different GPUs. This approach is particularly useful for very large models that do not fit into the memory of a single GPU.

The core concept are the following:

- **Model Splitting**: The model is divided into different segments. This division can be done layer-wise, where certain layers are assigned to specific GPUs, or through more complex schemes where parts of layers or groups of layers are distributed across GPUs.
- **Data Flow**: During the forward pass, input data is passed through the model segments in sequence, moving from one GPU to the next as it progresses through the model. Each GPU computes its assigned part of the model and passes the intermediate outputs to the next GPU.
- **Gradient Calculation and Backpropagation**: During the backward pass, gradients are calculated for each part of the model on their respective GPUs. These gradients are then used to update the model parameters. The process may involve transferring gradients between GPUs to ensure that all parts of the model are updated correctly.

the implementation of model parallelism can be complex and requires careful consideration of the model architecture, data flow, and communication between GPUs:
- TensorParallel (TP) - each tensor is split up into multiple chunks, so instead of having the whole tensor reside on a single gpu, each shard of the tensor resides on its designated gpu. During processing each shard gets processed separately and in parallel on different GPUs and the results are synced at the end of the step. This is what one may call horizontal parallelism, as the splitting happens on horizontal level.
- PipelineParallel (PP) - the model is split up vertically (layer-level) across multiple GPUs, so that only one or several layers of the model are places on a single gpu. Each gpu processes in parallel different stages of the pipeline and working on a small chunk of the batch.
- Zero Redundancy Optimizer (ZeRO) - Also performs sharding of the tensors somewhat similar to TP, except the whole tensor gets reconstructed in time for a forward or backward computation, therefore the model doesn’t need to be modified. It also supports various offloading techniques to compensate for limited GPU memory.
- Sharded DDP - is another name for the foundational ZeRO concept as used by various other implementations of ZeRO.

#### Vertical MP (Naive)
The Vertical Model Parallelism (Vertical MP). To understand this, let's visualize how neural network models are typically represented. Imagine a model with eight layers, depicted as follows:

```
===================  ===================
|  0 | 1 | 2 | 3  |  |  4 | 5 | 6 | 7  |
===================  ===================
        gpu0                 gpu1
```

In this representation, we've divided the model into two segments along a vertical axis, assigning the first four layers (0-3) to GPU0 and the remaining four layers (4-7) to GPU1.

During the model's operation, data flows sequentially from one layer to the next. For instance, data moves from layer 0 to layer 1, then from layer 1 to layer 2, and so on, which is standard for neural network processing. However, a unique challenge arises when data must transition from layer 3 to layer 4. This transition requires data to be transferred from GPU0 to GPU1, introducing what is known as communication overhead.

The impact of this communication overhead largely depends on the physical configuration of the GPUs. If both GPUs (GPU0 and GPU1) are located within the same compute node, meaning they are part of the same physical machine, the data transfer between them is relatively fast. Conversely, if the GPUs are situated on different compute nodes, which implies they are on separate machines, the communication overhead can be significantly higher. This difference in data transfer speed is crucial to consider when designing and implementing models using Vertical Model Parallelism, as it can affect the overall performance and efficiency of the model.

#### PipelineParallel (PP)

The PipelineParallel closely resembles a traditional model parallelism (MP) strategy but innovatively addresses the challenge of underutilized GPU resources. This is achieved by dividing the incoming data batch into smaller segments, known as micro-batches, and strategically orchestrating a pipeline. This artificial pipeline facilitates simultaneous computation across multiple GPUs, significantly enhancing computational efficiency and resource utilization.

![Illustration of Pipeline Parallelism](https://1.bp.blogspot.com/-fXZxDPKaEaw/XHlt7OEoMtI/AAAAAAAAD0I/hYM_6uq2BTwaunHZRxWd7JUJV43fEysvACLcBGAs/s640/image2.png)

The comparison highlights a reduction in periods of inactivity, or "dead zones," for GPUs. These inactive intervals are often referred to as the "bubble" in the context of GPU computation. By minimizing these bubbles, PP ensures that GPUs are more consistently engaged in the computation process.

#### DeepSpeed ZeRO

One of the key features of DeepSpeed is its ability to manage models that are too large to fit on a single GPU or when the batch size needs to be minimized due to hardware constraints. 

In such scenarios, DeepSpeed provides advanced solutions like ZeRO + CPU Offload or NVMe Offload. These options are particularly useful for handling significantly larger models by efficiently managing memory and computational resources. To utilize these features, it's necessary to install the DeepSpeed library separately. 

Following the [installation](https://huggingface.co/docs/transformers/v4.38.1/en/main_classes/deepspeed#installation), you'll need to consult one of the detailed guides available to create a configuration file and successfully launch DeepSpeed.

- For an in-depth guide on DeepSpeed integration with [Trainer](https://huggingface.co/docs/transformers/v4.38.1/en/main_classes/trainer#transformers.Trainer), review the [corresponding documentation](https://huggingface.co/docs/transformers/v4.38.1/en/main_classes/deepspeed), specifically the section for a [single GPU](https://huggingface.co/docs/transformers/v4.38.1/en/main_classes/deepspeed#deployment-with-one-gpu). Some adjustments are required to use DeepSpeed in a [notebook](https://huggingface.co/docs/transformers/v4.38.1/en/main_classes/deepspeed#deployment-in-notebooks); please take a look at the corresponding guide.

#### CPU Offload

CPU offload in the context of neural networks and machine learning refers to the process of transferring certain computational tasks or data from the primary processing unit, typically a GPU (Graphics Processing Unit) or TPU (Tensor Processing Unit), back to the CPU (Central Processing Unit). This technique is often employed to optimize the utilization of available computational resources, manage memory usage more efficiently, and potentially reduce overall computation time.

### Fully Sharded Data Parallelism (FSDP)
- https://youtu.be/By_O0k102PY?si=3GiLkDMTkNMuxzDf

Fully Sharded Data Parallelism (FSDP) is an advanced technique for training large neural networks that would otherwise not fit into the memory of a single GPU or require extremely long training times. It is a form of model parallelism that combines the benefits of data parallelism and model parallelism to efficiently utilize computational resources and reduce memory requirements. FSDP is particularly useful for training large-scale models in deep learning, such as those used in natural language processing (NLP) and computer vision.

#### Key Concepts of FSDP:

1. **Sharding**: In the context of FSDP, sharding refers to splitting the model's parameters across multiple GPUs. Unlike traditional data parallelism, where each GPU holds a complete copy of the model's parameters, FSDP divides the model's parameters into shards, and each GPU holds only a portion of the parameters (a shard). This significantly reduces the memory footprint on each GPU.

2. **Data Parallelism**: FSDP still leverages the concept of data parallelism by distributing the input data across multiple GPUs. Each GPU processes a different subset of the input data in parallel, but unlike traditional data parallelism, it does so with only a shard of the model's parameters.

3. **Gradient Accumulation and Reduction**: During the backward pass, gradients are calculated for each shard. These gradients are then accumulated and reduced across all GPUs to update the model parameters. FSDP uses efficient communication strategies to minimize the overhead of gradient synchronization.

4. **Memory Efficiency**: By sharding the model parameters and leveraging mixed precision training, FSDP dramatically reduces the per-GPU memory requirement. This allows for training larger models or using larger batch sizes than would be possible with traditional data parallelism.

5. **Dynamic Re-sharding**: FSDP can dynamically adjust the sharding of parameters during training. This means that the way parameters are distributed across GPUs can change to optimize memory usage and computational efficiency.

#### Limitations

- Complexity in Configuration and Tuning: FSDP offers a high degree of flexibility and control through its configuration options, such as auto_wrap_policy, backward_prefetch, and ignored_modules. However, this flexibility also means that users need to carefully configure these options to optimize training efficiency. The PyTorch team is working on an auto-tuning tool to help with this, but in the meantime, manual tuning is required 

#### transformers ecosystem

Training with FSDP: With the Accelerator initialized with the FSDP plugin, you can proceed to train your model. The Accelerator will handle the distribution of the model parameters, gradients, and optimizer states across the available GPUs, enabling you to train large models with lower memory footprint and potentially larger batch sizes.

or alternatively in Trainer args

- sharded_ddp (bool, str or list of ShardedDDPOption, optional, defaults to False) — Use Sharded DDP training from FairScale (in distributed training only). This is an experimental feature.
A list of options along the following:

  - "simple": to use first instance of sharded DDP released by fairscale (ShardedDDP) similar to ZeRO-2.
  - "zero_dp_2": to use the second instance of sharded DPP released by fairscale (FullyShardedDDP) in Zero-2 mode (with reshard_after_forward=False).
  - "zero_dp_3": to use the second instance of sharded DPP released by fairscale (FullyShardedDDP) in Zero-3 mode (with reshard_after_forward=True).
  - "offload": to add ZeRO-offload (only compatible with "zero_dp_2" and "zero_dp_3").
  If a string is passed, it will be split on space. If a bool is passed, it will be converted to an empty list for False and ["simple"] for True.

- fsdp (bool, str or list of FSDPOption, optional, defaults to False) — Use PyTorch Distributed Parallel Training (in distributed training only).
A list of options along the following:

  - "full_shard": Shard parameters, gradients and optimizer states.
  - "shard_grad_op": Shard optimizer states and gradients.
  - "offload": Offload parameters and gradients to CPUs (only compatible with "full_shard" and "shard_grad_op").
  - "auto_wrap": Automatically recursively wrap layers with FSDP using default_auto_wrap_policy.
- 
- fsdp_min_num_params (int, optional, defaults to 0) — FSDP’s minimum number of parameters for Default Auto Wrapping. (useful only when fsdp field is passed).
- deepspeed (str or dict, optional) — Use Deepspeed. This is an experimental feature and its API may evolve in the future. The value is either the location of DeepSpeed json config file (e.g., ds_config.json) or an already loaded json file as a dict”

### Shared Data Parallel vs FSDP

The difference between sharded_ddp (Sharded Data Parallel) and FSDP (Fully Sharded Data Parallel) primarily revolves around how they handle the distribution of model parameters across multiple GPUs for training large models like GPT.

- Sharded Data Parallel (sharded_ddp): This approach is designed to distribute the model parameters across multiple GPUs in a way that minimizes the memory footprint on each GPU. It does this by sharding the model parameters, meaning that each GPU only holds a portion of the model's parameters. During training, the gradients are aggregated and synchronized across all GPUs to update the model parameters. This method is particularly useful for training large models that do not fit into the memory of a single GPU.
- Fully Sharded Data Parallel (FSDP): FSDP takes the concept of sharded_ddp further by not only sharding the model parameters but also the optimizer states across multiple GPUs. This means that each GPU not only holds a portion of the model parameters but also the optimizer states (like momentum) for the parameters it holds. FSDP aims to reduce the communication overhead during the training process by minimizing the amount of data that needs to be synchronized across GPUs. It does this by sharding not just the model parameters but also the optimizer states, which can lead to significant reductions in the communication cost, especially for models with large parameter spaces or when using large batch sizes.

#### Tensor Parallelism (TP)
- https://huggingface.co/docs/text-generation-inference/conceptual/tensor_parallelism

## Choosing the Right Parallelism Strategy
- https://huggingface.co/docs/transformers/v4.15.0/parallelism#which-strategy-to-use-when

#### When Working with a Single GPU

- **For Models That Fit on a Single GPU:**
  - **Standard Approach:** This is the go-to method when your model comfortably fits within the memory constraints of a single GPU. It's straightforward and often yields fast results.

- **For Models That Exceed Single GPU Memory:**
  - **Initial Step:** Consider using ZeRO combined with CPU Offload, and optionally NVMe, to manage memory more efficiently.
  - **If the Largest Layer Exceeds GPU Memory:** Implement Memory Centric Tiling (MCT) in addition to the above. MCT intelligently splits large layers, allowing them to be processed sequentially without overwhelming the GPU memory. Note that this might require manual adjustments, such as overriding `torch.nn.Linear` for optimal performance.

#### When Working with a Single Node Equipped with Multiple GPUs

- **For Models That Fit on a Single GPU:**
  - **Distributed Data Parallel (DDP):** This is often the fastest method for models that can run on a single GPU but benefit from parallel processing across multiple GPUs.
  - **ZeRO:** Depending on your specific configuration and the nature of your model, ZeRO might offer speed advantages over DDP. It's worth experimenting to see which yields better performance.

- **For Models That Don't Fit on a Single GPU:**
  - **Combining Strategies:** Pipeline Parallelism (PP), ZeRO, and Tensor Parallelism (TP) are all viable options. The effectiveness of each depends on your hardware's intra-node connectivity. With high-speed connections like NVLINK or NVSwitch, all three strategies should perform similarly. Otherwise, PP might outperform TP or ZeRO. The extent of TP also plays a role, so experimentation is key to finding the best solution for your setup.

- **If the Largest Layer Exceeds Single GPU Memory:**
  - **Without ZeRO:** You must use TP, as PP alone will not suffice.
  - **With ZeRO:** Refer to the guidance provided for single GPU setups.

#### When Working Across Multiple Nodes with Multiple GPUs

- **With Fast Inter-Node Connectivity:**
  - **ZeRO:** This strategy is preferred for its minimal impact on model architecture, requiring little to no modifications.
  - **Combining PP, TP, and DDP:** This approach minimizes communication overhead but necessitates significant changes to the model structure.

- **With Slow Inter-Node Connectivity and Limited GPU Memory:**
  - **A Hybrid Approach:** Combining DDP, PP, TP, and ZeRO-1 offers a solution that balances the limitations of network speed and GPU memory, though it's the most complex to implement.

In summary, the choice of parallelism strategy is highly dependent on the specific constraints and requirements of your project. It's often beneficial to experiment with different approaches to identify the most effective strategy for your particular setup.

# To check
- https://huggingface.co/blog/pytorch-fsdp
- https://discuss.huggingface.co/t/using-transformers-with-distributeddataparallel-any-examples/10775/3
- https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering
- https://github.com/huggingface/alignment-handbook/tree/main/scripts
- https://huggingface.co/blog/ram-efficient-pytorch-fsdp !
- https://github.com/pacman100/DHS-LLM-Workshop/tree/main/chat_assistant/sft/training
- https://discuss.huggingface.co/t/trainer-and-accelerate/26382/4?u=ggabry
- https://discuss.huggingface.co/t/trainer-api-for-model-parallelism-on-multiple-gpus/49493
- https://github.com/huggingface/accelerate/blob/main/docs/source/usage_guides/big_modeling.md
- https://discuss.huggingface.co/t/what-algorithm-trainer-uses-for-multi-gpu-training-without-torchrun/30016/2?u=ggabry
