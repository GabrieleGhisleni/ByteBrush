

<!-- toc -->

- [MLFLOW](#mlflow)
  * [Experiment tracking](#experiment-tracking)
  * [Setup](#setup)
  * [MLFLOW UI](#mlflow-ui)

<!-- tocstop -->

# MLFLOW
I will cover the following topics related to MLflow:

    Introduction to MLflow
    MLflow Components
        Tracking
        Projects
        Models
    MLflow Use Cases
    Benefits of MLflow
    Limitations of MLflow
    MLflow vs Other MLOps Platforms
    Conclusion

1. Introduction to MLflow

MLflow is an open source platform for managing end-to-end machine learning workflows. It was developed by Databricks, a company that provides a unified analytics platform for big data and AI. MLflow provides a suite of tools that allow data scientists and machine learning engineers to track and compare experiments, manage and version machine learning models, and deploy models to a variety of platforms.

One of the main challenges in machine learning is managing the end-to-end workflow, which includes data preparation, experimentation, model training, and deployment. MLflow aims to address this challenge by providing a unified platform for managing the entire machine learning lifecycle.

MLflow is designed to be agnostic to the underlying machine learning framework or programming language. This means that you can use MLflow with any machine learning framework, such as TensorFlow, PyTorch, or scikit-learn, and any programming language, such as Python, R, or Java.
2. MLflow Components

MLflow consists of three main components: Tracking, Projects, and Models. Let's take a closer look at each component.
Tracking

The Tracking component of MLflow allows you to log and track experiments. An experiment in MLflow is a set of parameters, code, and data that you run in order to train a machine learning model. You can use the Tracking component to log the parameters, metrics, and artifacts of each experiment. This allows you to compare the performance of different experiments and identify the best set of parameters for your model.

The Tracking component consists of three main concepts: Runs, Parameters, and Metrics.
Runs

A Run in MLflow represents a single execution of an experiment. When you start a new experiment, MLflow creates a new Run. You can use the Run to log the parameters, metrics, and artifacts of your experiment. You can also use the Run to track the version of the code and the environment in which the experiment was run.
Parameters

Parameters in MLflow are values that you pass to your experiment. For example, if you are training a machine learning model, you might pass the learning rate, batch size, and number of epochs as parameters. You can use the Tracking component to log the values of these parameters for each Run.
Metrics

Metrics in MLflow are values that you want to track during the execution of your experiment. For example, if you are training a machine learning model, you might want to track the accuracy, loss, and F1 score of your model. You can use the Tracking component to log the values of these metrics for each Run.
Projects

The Projects component of MLflow allows you to package your code and data into a reproducible format. A Project in MLflow is a directory containing code, data, and a MLproject file. The MLproject file defines the dependencies, parameters, and entry points of your project.

MLflow supports several ways of defining a project, including Python functions, shell scripts, and Docker containers. You can use the Projects component to run your code in a reproducible environment, and to package your code and data for deployment to a production environment.
Models

The Models component of MLflow allows you to manage and version your machine learning models. A Model in MLflow is a standard format for packaging your machine learning model, including the code, dependencies, and metadata.

You can use the Models component to log and track the version of your model, and to deploy your model to a variety of platforms, including cloud services and edge devices.

MLflow supports several ways of defining a model, including Python functions, TensorFlow SavedModel, and ONNX. You can use the Models component to version your model and to deploy it to a production environment.
3. MLflow Use Cases

MLflow can be used in a variety of machine learning use cases, including:
Experimentation

MLflow can be used to track and compare experiments during the experimentation phase of machine learning. You can use the Tracking component to log the parameters, metrics, and artifacts of each experiment, and to compare the performance of different experiments.
Reproducibility

MLflow can be used to ensure reproducibility during the development phase of machine learning. You can use the Projects component to package your code and data into a reproducible format, and to run your code in a reproducible environment.
Deployment

MLflow can be used to deploy machine learning models to a production environment. You can use the Models component to manage and version your models, and to deploy your models to a variety of platforms, including cloud services and edge devices.
4. Benefits of MLflow

MLflow provides several benefits for managing machine learning workflows, including:
Unified Platform

MLflow provides a unified platform for managing the entire machine learning lifecycle, from data preparation to deployment. This makes it easier to manage the workflow and to ensure consistency across different stages of the workflow.
Reproducibility

MLflow provides tools for ensuring reproducibility, which is critical for developing and deploying machine learning models. The Projects component allows you to package your code and data into a reproducible format, and to run your code in a reproducible environment.
Collaboration

MLflow provides tools for collaborating on machine learning workflows, which is critical for teams working on machine learning projects. The Tracking component allows you to share experiments with other team members, and to compare the performance of different experiments.
Flexibility

MLflow is designed to be agnostic to the underlying machine learning framework or programming language. This means that you can use MLflow with any machine learning framework, such as TensorFlow, PyTorch, or scikit-learn, and any programming language, such as Python, R, or Java.
5. Limitations of MLflow

MLflow has some limitations that you should be aware of, including:
Learning Curve

MLflow has a steep learning curve, particularly for teams that are new to machine learning workflows. The platform requires some knowledge of software development best practices, such as version control and reproducibility.
Integration

MLflow is designed to work with a variety of machine learning frameworks and programming languages, but it may require some integration work to work with custom workflows or legacy systems.
Scalability

MLflow may not be suitable for large-scale machine learning workflows, particularly those that involve big data. The platform may require additional resources, such as compute or storage, to manage large datasets.

6. MLflow vs Other MLOps Platforms

MLflow is not the only MLOps platform available. There are several other platforms that provide similar functionality, including:
Kubeflow

Kubeflow is an open source platform for running machine learning workflows on Kubernetes. It provides tools for managing data, running experiments, and deploying models to production. Kubeflow is designed to be scalable and can handle large-scale machine learning workflows.
TensorFlow Extended (TFX)

TensorFlow Extended (TFX) is a platform for building and deploying machine learning pipelines. TFX provides tools for data validation, preprocessing, and model training, and can be used with TensorFlow and other machine learning frameworks.

## Experiment tracking
MLflow provides a simple and intuitive way to track and manage machine learning experiments, including those involving PyTorch models. By using MLflow's logging and tracking functionality, you can easily keep track of all the important metrics, parameters, and artifacts associated with your experiments. In this section, we will go through a step-by-step guide on how to use MLflow to track PyTorch experiments.

1. Set up the MLflow environment:

Before we can start using MLflow to track our PyTorch experiments, we need to set up the MLflow environment. To do this, we need to install the MLflow library and start an MLflow server. We can install MLflow using pip:
```
pip install mlflow
```
Once MLflow is installed, we can start the MLflow server using the following command:

```bash

mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root ./artifacts --host 0.0.0.0 --port 5000
```

This command starts an MLflow server that listens on port 5000 and stores data in an SQLite database located in the mlflow.db file. The --default-artifact-root option specifies the directory where model artifacts will be stored.

	2. Define the PyTorch model:

Next, we need to define our PyTorch model that we will be using in our experiments. In this example, we will define a simple neural network with one hidden layer:

```python

import torch
import torch.nn as nn
import torch.nn.functional as F

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x
```
This neural network has one input layer with 784 units, one hidden layer with 128 units, and one output layer with 10 units. We will be using this neural network to classify handwritten digits in the MNIST dataset.

    Define the PyTorch experiment:

Next, we need to define our PyTorch experiment using MLflow. We can do this by creating an MLflow run, which is a container that encapsulates all the information about a specific experiment, such as the hyperparameters, metrics, and artifacts.

To create an MLflow run, we can use the following code:

```python

import mlflow
import mlflow.pytorch

# Start an MLflow run
with mlflow.start_run():

    # Define the hyperparameters
    learning_rate = 0.01
    batch_size = 64
    num_epochs = 10

    # Define the model, loss function, and optimizer
    model = Net()
    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)

    # Log the hyperparameters
    mlflow.log_param("learning_rate", learning_rate)
    mlflow.log_param("batch_size", batch_size)
    mlflow.log_param("num_epochs", num_epochs)

    # Log the PyTorch model
    mlflow.pytorch.log_model(model, "models")

    # Train the model
    for epoch in range(num_epochs):
        for i, (images, labels) in enumerate(train_loader):
            # Flatten the images
            images = images.reshape(-1, 28 * 28)

            # Forward pass
            outputs = model(images)
            loss = criterion(outputs, labels)

            # Backward and optimize
            optimizer.zero_grad()
            loss.backward()
            optimizer.step
        # Log the loss
        mlflow.log_metric("loss", loss.item(), step=i + epoch * len(train_loader))

# Evaluate the model
with torch.no_grad():
    correct = 0
    total = 0
    for images, labels in test_loader:
        # Flatten the images
        images = images.reshape(-1, 28 * 28)

        # Forward pass
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)

        # Compute the accuracy
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

    accuracy = 100 * correct / total

    # Log the accuracy
    mlflow.log_metric("accuracy", accuracy)

    print("Accuracy: {:.2f}%".format(accuracy))
```



In this code, we first start an MLflow run using the `mlflow.start_run()` function. Inside the run, we define the hyperparameters (learning rate, batch size, and number of epochs), the PyTorch model, loss function, and optimizer. We then log the hyperparameters using the `mlflow.log_param()` function and the PyTorch model using the `mlflow.pytorch.log_model()` function.

Next, we train the model using a nested loop over the number of epochs and the data loader. For each batch of images and labels, we perform a forward pass, compute the loss, perform a backward pass, and optimize the model parameters. We then log the loss using the `mlflow.log_metric()` function.

After training, we evaluate the model on the test set and compute the accuracy. We then log the accuracy using the `mlflow.log_metric()` function and print the accuracy to the console.

4. Visualize the results:

Once the experiment is complete, we can use MLflow to visualize the results. We can do this by opening the MLflow user interface in a web browser by navigating to `http://localhost:5000`. Here, we can view the details of our experiment, including the hyperparameters, metrics, and artifacts.

We can also use the `mlflow ui` command to start the MLflow user interface in a local web server. This command opens a web browser and shows the MLflow user interface, where we can view the details of our experiment.

5. Conclusion:

In this tutorial, we have shown how to use MLflow to track PyTorch experiments. We have defined a PyTorch model for the MNIST dataset, trained the model using MLflow, and visualized the results using the MLflow user interface. By using MLflow, we can easily keep track of all the important metrics, parameters, and artifacts associated with our experiments, making it easier to reproduce and iterate on our machine learning models.

In addition to tracking metrics and parameters, MLflow can also be used to save artifacts such as models, datasets, and other files associated with an experiment. These artifacts can be easily accessed and shared with others, making it easier to reproduce experiments and collaborate on machine learning projects.

To save a model artifact with MLflow, we can use the mlflow.pytorch.log_model() function. This function takes as input a PyTorch model object and saves it in a format that can be easily loaded and used later.

Here's an example of how to save a PyTorch model artifact with MLflow:

```python

import torch
import mlflow.pytorch

# Define the PyTorch model
class MyModel(torch.nn.Module):
    def __init__(self):
        super(MyModel, self).__init__()
        self.linear = torch.nn.Linear(10, 1)

    def forward(self, x):
        return self.linear(x)

model = MyModel()

# Train the model
for epoch in range(10):
    # ...train the model...

# Save the model artifact with MLflow
mlflow.pytorch.log_model(model, "models")
```

In this example, we first define a PyTorch model called MyModel. We then train the model using a loop over the number of epochs.

Finally, we save the model artifact using the mlflow.pytorch.log_model() function. This function takes two arguments: the PyTorch model object and a path to where the model artifact should be saved. In this case, we are saving the model in a directory called "models" in the current working directory.

Once the model artifact has been saved, it can be easily loaded and used in other scripts or environments using the mlflow.pytorch.load_model() function. For example, we could load the saved model in another script like this:

```python

import torch
import mlflow.pytorch

# Load the saved model artifact with MLflow
model = mlflow.pytorch.load_model("models")

# Use the model to make predictions
x = torch.randn(10)
y = model(x)
```

In this example, we first load the saved model artifact using the mlflow.pytorch.load_model() function. We then use the loaded model to make predictions on a random input tensor x.

By using MLflow to save and load model artifacts, we can easily share and reproduce machine learning models across different environments and collaborators.

## Setup
Setup

First, you'll need to install the MLflow library and import it into your Python script. You'll also need to import any other libraries you plan to use, such as PyTorch for building and training the model.

python

import mlflow
import torch
import numpy as np
import pandas as pd
import sklearn.metrics

Configuration

Before starting the experiment, you'll need to configure MLflow to use the right tracking server and set any other relevant options. You can do this using the mlflow.set_tracking_uri() and mlflow.set_experiment() functions.

```python

# Set the tracking server URI
tracking_uri = "http://localhost:5000"
mlflow.set_tracking_uri(tracking_uri)

# Set the experiment name
experiment_name = "my_experiment"
mlflow.set_experiment(experiment_name)

# Set any other configuration options (e.g. authentication credentials)
# ...

# Start a new run
with mlflow.start_run():
```

Data

Next, you'll need to load and preprocess the data you'll use to train and evaluate the model. You can use the mlflow.log_artifact() function to log the raw data files or any intermediate processing steps.

```python

# Load the raw data files
data_file = "data.csv"
data = pd.read_csv(data_file)

# Perform any necessary preprocessing (e.g. feature scaling, one-hot encoding)
data = preprocess_data(data)

# Log the preprocessed data using MLflow artifacts
preprocessed_data_file = "preprocessed_data.csv"
data.to_csv(preprocessed_data_file, index=False)
mlflow.log_artifact(preprocessed_data_file)
```

Here's the updated example that includes that step:

```python

# Define the PyTorch model
class MyModel(torch.nn.Module):
    def __init__(self):
        super(MyModel, self).__init__()
        self.linear = torch.nn.Linear(10, 1)

    def forward(self, x):
        return self.linear(x)

model = MyModel()

# Set the hyperparameters
learning_rate = 0.01
num_epochs = 10

# Log the hyperparameters with MLflow
mlflow.log_param("learning_rate", learning_rate)
mlflow.log_param("num_epochs", num_epochs)

# Define the loss function and optimizer
criterion = torch.nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)

# Train the model and log the metrics with MLflow
for epoch in range(num_epochs):
    inputs = torch.Tensor(data[features].values)
    targets = torch.Tensor(data[target].values)
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, targets)
    loss.backward()
    optimizer.step()
    train_loss = loss.item()

    # Log the training loss and other metrics with MLflow
    mlflow.log_metric("train_loss", train_loss, step=epoch)

# Evaluate the model on a test dataset
test_inputs = torch.Tensor(test_data[features].values)
test_targets = torch.Tensor(test_data[target].values)
test_outputs = model(test_inputs)
test_loss = criterion(test_outputs, test_targets).item()

# Log the evaluation metrics with MLflow
mlflow.log_metric("test_loss", test_loss)

# Save the trained model into the MLflow artifact directory
model_path = "model"
torch.save(model.state_dict(), model_path)
mlflow.log_artifact(model_path)
```

In this updated example, we added a few lines of code after training the model to evaluate it on a separate test dataset and log the evaluation metric (test_loss) using mlflow.log_metric(). We also added a line to save the trained PyTorch model into the MLflow artifact directory using torch.save() and log it using mlflow.log_artifact(). The model will be saved in the artifact directory with a unique ID based on the experiment ID and run ID, along with any other artifacts logged during the experiment.

By following these steps, you can use MLflow to track everything related to your machine learning experiments, including data, model parameters, metrics, and artifacts. This allows you to easily reproduce and compare different experiments, as well as share your work with others.

## MLFLOW UI

Once you've logged your experiment data using the mlflow API, you can view the results and metrics in several ways:

* MLflow UI: The easiest way to view the results and metrics of an MLflow experiment is to use the MLflow UI, which is a web-based user interface that comes with the MLflow package. You can launch the UI by running the mlflow ui command in your terminal, which will open a web browser displaying the UI at http://localhost:5000 by default. From there, you can navigate to your experiment and view its runs, metrics, parameters, and artifacts. You can also filter and compare runs, as well as view the source code and console output for each run.

* API: You can also access your experiment data programmatically using the MLflow API. For example, you can use the mlflow.search_runs() function to retrieve a list of runs for a given experiment, and the mlflow.get_run() function to retrieve a specific run. You can then access the run's data using the data attribute, which contains the run's metrics, parameters, tags, and other metadata.

* CLI: Finally, you can use the MLflow command-line interface (CLI) to view your experiment data. For example, you can use the mlflow experiments list command to list your experiments, and the mlflow runs list command to list the runs for a given experiment. You can also use the mlflow ui command to launch the MLflow UI from the command line.
