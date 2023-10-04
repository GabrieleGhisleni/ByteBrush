<!-- toc -->
\pagebreak

<!-- toc -->

# BentoML

## Introduction

BentoML is an open-source platform for building, deploying, and managing machine learning models in production. It provides a simple interface for packaging your model code, dependencies, and configuration files, and deploying them to various platforms, including Kubernetes.

With that said, let's get started with the step-by-step process of transforming a service for FastAPI into a BentoML production system.

## Guide
### Step 1: Create a FastAPI Service

The first step is to create a FastAPI service that exposes an endpoint for your model. For the purpose of this tutorial, let's assume that you have already created a FastAPI service that performs text classification.

### Step 2: Create a BentoML Service

The next step is to create a BentoML service that encapsulates your FastAPI service. To do this, you will need to create a new Python file and import the required dependencies:

```python

import bentoml
from bentoml.frameworks.fastai import FastaiModelArtifact
from bentoml.adapters import JsonInput
from fastapi import FastAPI

app = FastAPI()

class TextClassifier(bentoml.BentoService):
    @bentoml.api(input=JsonInput(), batch=False)
    def predict(self, input_data):
        result = app.predict(input_data)
        return result

    @bentoml.artifacts([FastaiModelArtifact('model')])
    def __init__(self):
        super().__init__()
```

In the code above, we have defined a new class called TextClassifier that extends the bentoml.BentoService class. The @bentoml.api decorator is used to define the input type and batch size of the model, and the @bentoml.artifacts decorator is used to specify the model artifact.

The FastaiModelArtifact class is used to define the FastAI model artifact that will be used to load the model. The JsonInput class is used to specify that the input to the model will be in JSON format.

Note that we are using the app.predict() method to perform the prediction. This assumes that you have already defined a predict() method in your FastAPI service that performs the text classification.

### Step 3: Package the BentoML Service

The next step is to package the BentoML service into a container. To do this, you will need to install Docker on your machine and run the following commands:
```
shell

$ bentoml init text-classifier
$ cd text-classifier
$ bentoml save .
$ docker build -t text-classifier .
```

The first command creates a new BentoML service called text-classifier. The second command changes the current working directory to the text-classifier folder. The third command packages the BentoML service into a .tar.gz file. The fourth command builds a Docker image from the packaged service.

### Step 4: Deploy the BentoML Service to Kubernetes

The next step is to deploy the BentoML service to Kubernetes. To do this, you will need to have a Kubernetes cluster set up and running. Once you have a cluster set up, you can deploy the BentoML service using the following command:

```sh
$ kubectl apply -f deployment.yaml
```

The deployment.yaml file should contain the configuration for deploying the BentoML service. Here's an example:

```yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: text-classifier
spec:
  replicas: 1
  selector:
    matchLabels:
      app: text-classifier
  template:
    metadata:
      labels:
        app: text-classifier
    spec:
      containers:
      - name: text-classifier
        image: text-classifier:latest
        ports:
        - containerPort: 5000
```

In the example above, we are defining a Kubernetes deployment with one replica. The image field specifies the Docker image that contains the BentoML service. The containerPort field specifies the port on which the service will be exposed.

### Step 5: Test the BentoML Service

The final step is to test the BentoML service to ensure that it is working correctly. To do this, you can use the kubectl port-forward command to forward traffic from a local port to the service running in the Kubernetes cluster:

```
shell

$ kubectl port-forward deployment/text-classifier 5000:5000
```

This command will forward traffic from port 5000 on your local machine to port 5000 on the BentoML service running in the Kubernetes cluster.

Once you have the port forwarding set up, you can test the service using a tool like curl:

```
shell

$ curl -X POST http://localhost:5000/predict -H 'Content-Type: application/json' -d '{"text": "This is a test."}'
```

This command sends a JSON payload containing a text string to the predict endpoint of the BentoML service running in the Kubernetes cluster. If everything is working correctly, you should receive a JSON response containing the predicted label for the text.

### tep 6: Perform Monthly Tests on New Data

To perform monthly tests on new data, you can simply download the new data, preprocess it, and send it to your deployed BentoML service for prediction. You can then evaluate the performance of the model on the new data using the same metrics that you used during training.

You can save the metrics logs and other useful information using BentoML's built-in logging capabilities. For example, you can log the metrics using the self.log_metric method in your BentoML service code:

```python

@bentoml.artifacts([("model", bentoml.sklearn_model(model_name="logistic-regression"))])
@bentoml.env(pip_packages=["scikit-learn", "pandas"])
class TextClassifier(bentoml.BentoService):
    
    def preprocess(self, data):
        # Preprocess the input data
        return data
    
    def train(self, data):
        # Load the data and split into train and test sets
        X_train, X_test, y_train, y_test = train_test_split(
            data["text"], data["label"], test_size=0.2, random_state=42
        )
        
        # Preprocess the training data
        X_train = self.preprocess(X_train)
        
        # Train the model
        model = LogisticRegression()
        model.fit(X_train, y_train)
        
        # Evaluate the model on the test set
        X_test = self.preprocess(X_test)
        y_pred = model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        self.log_metric("accuracy", accuracy)
        
        # Save the model
        self.artifacts.model = model
    
    def predict(self, data):
        # Load the model
        model = self.artifacts.model
        
        # Preprocess the input data
        X = self.preprocess(data["text"])
        
        # Make a prediction
        y_pred = model.predict(X)
        
        # Log the prediction
        self.log_prediction("label", y_pred)
        
        return {"label": y_pred.tolist()}
```

In the example above, we log the accuracy metric during training using the self.log_metric method. We also log the predictions using the self.log_prediction method during prediction.

You can view the logs using the BentoML CLI or the BentoML UI. Here's an example of how to view the logs using the BentoML CLI:

```sh

bentoml fetch-logs my_text_classifier
```

The bentoml fetch-logs command retrieves the logs for the my_text_classifier service. You can also filter the logs by date, severity level, or keyword.


## Grafana integration

integrating BentoML with Grafana is a great way to visualize the metrics and logs of your deployed machine learning models. Grafana is an open-source analytics and monitoring platform that can be used to build customized dashboards and graphs for your data.

In this section, we will go through the steps required to integrate BentoML with Grafana.

Step 1: Install Grafana

First, you need to install Grafana on your system. You can download the latest version of Grafana from the official website (https://grafana.com/get).

Once the download is complete, you can install Grafana by following the instructions provided for your operating system.

Step 2: Install Prometheus

BentoML comes with built-in support for Prometheus, which is an open-source monitoring system that can be used to collect and store metrics data. You will need to install Prometheus to collect and store the metrics generated by BentoML.

You can download the latest version of Prometheus from the official website (https://prometheus.io/download/). Once the download is complete, you can install Prometheus by following the instructions provided for your operating system.

Step 3: Configure BentoML for Prometheus

To enable BentoML to send metrics to Prometheus, you will need to modify the bentoml.cfg file. You can find this file in the root directory of your BentoML project.

In the bentoml.cfg file, add the following lines:

bash

[metrics]
type = prometheus

This will tell BentoML to use Prometheus as the metrics backend.

Step 4: Configure Prometheus

Next, you need to configure Prometheus to scrape the metrics generated by BentoML. You can do this by creating a new configuration file for Prometheus.

Create a new file named prometheus.yml and add the following lines:

yaml

global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'bentoml'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:5000/metrics']

This configuration file tells Prometheus to scrape the metrics generated by BentoML every 5 seconds and store them in its database.

Step 5: Start the services

Now that you have configured BentoML and Prometheus, you can start the services.

Start your BentoML service by running the following command:

css

bentoml serve my_text_classifier --port 5000

This will start your BentoML service on port 5000.

Next, start Prometheus by running the following command:

arduino

prometheus --config.file=prometheus.yml

This will start Prometheus and configure it to scrape the metrics generated by BentoML.

Finally, start Grafana by running the following command:

sql

systemctl start grafana-server

This will start the Grafana server.

Step 6: Configure Grafana

Once you have started Grafana, you need to configure it to display the metrics generated by BentoML.



