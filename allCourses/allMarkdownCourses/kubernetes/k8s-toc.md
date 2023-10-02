

<!-- toc -->

- [K8s](#k8s)
  * [Objects](#objects)
    + [Pods](#pods)
    + [Deployment](#deployment)
    + [Service](#service)
  * [Imperative vs Declarative approach](#imperative-vs-declarative-approach)
    + [ConfigMap](#configmap)

<!-- tocstop -->

end-toc
end-toc
end-toc
end-toc
end-toc
end-toc
## K8s

Kubernetes is a docker-compose for multiple machines.

A pod is a container and it runs on a worker node also called a nodes! a node is a machine or a virtual instances like ec2. K8s also use a proxy to control that the pods can reach the internet and can be reached. You can have multiple equal pods to allow better traffic.

The master Node control all the worker node so checks the states of each nodes and the pods.

A Cluster is given by a master node and worker nodes and the setup of it is given to a cloud provider that replcate the configuratin configured. 

### Objects

#### Pods
k8s works with objects such as pods, deployments, services and volume. These objects can be created in two ways: imperatively or declaratively.

- pod object: is the smallest uni with interacts k8s interact withs. the idea is that it contains and uruns one or multiple containers, typically just one. Pods contains shared resoruces for all pod containers. Has a cluster-internal IP by default used to send requests to it. Containers inside a pod can communicate via `localhost`. 
	- Pods are ephemeral, k9s will start, stop and replace them as needed (resources are lost), there are way to persist data but you have to configure it.
	- We wanto to k8s manage create delete manage the pods. For pods to be managed for you, you need a `Controller` eg a Deployment.
	
#### Deployment
is one of the key object, you tuypicaly do not create pods but create a deployment that handle the pods. The idea is that we set a desired target state (2 pods with this container) and k8s will try to get there. The pods are created by k8s and it place these pods in worker node with sufficient CPU and others.

We can pause, delete and roll back deployments. And deployment can be scaled dynamically (such as CPU or traffic and k8s create automatically more worker nodes to control the traffic and the usage).

#### Service

Responsible to expose the PODS to another pods or to be reached from external. Is not possible to reach the IP addresss without using a Service! You cannot rely on a pods relying on its IP address. (not good even for internal cluster).

Service group pods together and assign them a unique IP address that won't change. 

to create a service we use the keywork `expose deployment <name> --port=8080 --type=ClusterIP`

we have to expone the port and the type of the service. Usign ClusterIP meaning that it is only reachable from inside the cluster while the type `NodePort` is reachable from outside and `LoadBalacer` done the same but control and distributed the incoming traffic (only available if the cloud porovider allow it).

### Imperative vs Declarative approach
Imperative is done via CLI while the declarative via deployment.yml (file name is up to you).

Here we specifiy how our deployment should look likes with a specific sytnax:

`kubectl apply -f=deplyment.yaml`

```deployment.yml
apiVersion: apps/v1
kind: Deployment # kind of object to create!

metadata:
	name: <name_of_deployment> # name of deployment
	 
spec: # the spec of the deployment
	replicas: 2
	
	# important!
	selector:
		matchLabels:
			# key value pair for the pods to be managed from the templates.
			# tells what pods belong to this deployment!
			tier: backend
			app: second-app
			
# or    matchExpressions
	template:   #the template defines always the POD
		metadata: # for each object we have to specify metadat
			labels: 
				app: second-app # whatever you want (key and value)
				tier: backend
		spec:
			containers: 
				- name: second-node
				  image:  app/my-image
			#   - name: third-node
			#	  image:  app/my-image
```

and the service to reach the deployment

```service.yml
apiVersion: v1
kind: Service

metadata:
	name: <name_of_deployment> # name of deployment
	 
spec: 
	type: LoadBalancer
	selector:
		# directly have the key-value pair
		app: second-app # add the app:second-app are controlled in this way.
	ports:
	 - protocol: 'TCP'
	   port: 80 #outside port
	   targetPort: 8080 #inside ports
#	 - protocol: 'TCP'
#	   port: 80 #outside port
#	   targetPort: 8080 #inside ports
```

#### ConfigMap
```config.yaml

```


```deployments.yaml

spec:
	containers:
		- name: story
		  image: <image>
		  env:
		  	- name: STORY_FODER
			  valueFrom:
			  	config;apKeyRef:
				 name: data-store-env
				 key: folder
		# or 
		- name: story
		  image: <image>
		  env:
		  	- name: STORY_FODER
			  value:
				 folder: myFolder
```


when creating a service it is reachable with the env variable:

```
<SERVICE_NAME_CAPS_LOCK>_SERVICE_HOST

or
env:
- name: AUTH_ADDRESS
  value: "auth_srevice.<namespace>.

```

############
questions:

1. When creating a pod with more than one image?
2. Is the good the let pods communicate via localhost when on the same pod?
3. Are the pod should always communicate via IP address?



