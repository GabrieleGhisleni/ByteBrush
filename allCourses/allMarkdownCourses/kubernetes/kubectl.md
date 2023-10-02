<!-- toc -->
end-toc
end-toc
end-toc
end-toc
end-toc
end-toc
# Kubectl
## Introduction
Kubectl is a command line interface for running commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.

## Installation
### Linux
```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

## Configuration
### Autocompletion
```bash
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

## Usage
### Get information about the cluster
```bash
kubectl cluster-info
```

### Get information about the nodes
```bash
kubectl get nodes
```

### Get information about the pods
```bash
kubectl get pods
```

### Get information about the services
```bash
kubectl get services
```

### Get information about the deployments
```bash
kubectl get deployments
kubectl get deployments -n special-projects
```

### Get information about the namespaces
```bash
kubectl get namespaces
```

### Get information about the configmaps
```bash
kubectl get configmaps
```

### Get information about the secrets
```bash
kubectl get secrets
```

### Get information about the persistent volumes
```bash
kubectl get pv
```

## Debugging and logs
It is possible to get the logs of a pod using the command `kubectl logs <pod_name>`. If the pod has multiple containers, it is possible to specify the container name using the flag `-c <container_name>`.

```bash
kubectl logs <pod_name>
kubectl logs <pod_name> -c <container_name>
```

### Logs from dead pod (crashloopbackoff)

```bash
kubectl logs <pod_name> --previous
```

Using the flag `--previous` it is possible to get the logs from the previous pod.

#### Filtering by time

```bash
kubectl logs <pod_name> --previous --since=1h
```

### Logs from all pods

```bash
kubectl logs -l <label_name>=<label_value>
```

A concrete example is the following:

```bash
kubectl logs -l app=nginx
```

### Filtering logs by time

```bash
kubectl logs --since=1h
kubectl logs --since=1h -l <label_name>=<label_value>
```



## Executing commands inside a pod

```bash
kubectl exec <pod_name> -- <command>
kubectl exec <pod_name> -c <container_name> -- <command>
```

## Port forwarding
```bash
kubectl port-forward <pod_name> <local_port>:<pod_port>
```

## Copying files to and from containers and pods
```bash
kubectl cp <pod_name>:<path_to_file> <path_to_local_file>
kubectl cp <path_to_local_file> <pod_name>:<path_to_file>
```




