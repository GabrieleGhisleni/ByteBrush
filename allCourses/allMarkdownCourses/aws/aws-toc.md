

<!-- toc -->

- [AWS](#aws)
  * [Introduction](#introduction)
    + [Main products](#main-products)
    + [Common - Lexicon](#common---lexicon)
  * [Serverless computing](#serverless-computing)
    + [AWS serverless](#aws-serverless)

<!-- tocstop -->

# AWS
## Introduction

 AWS stands for Amazon Web Services, and it is a cloud computing platform provided by Amazon. It offers a wide range of services that allow individuals and businesses to access computing resources, storage, databases, analytics, machine learning, and more, all delivered over the internet.

Some of the key features of AWS include:

* Scalability: AWS can easily scale to accommodate changes in demand, allowing users to pay only for what they use.
* Flexibility: AWS offers a wide range of services that can be used together or independently, depending on your needs.
* Security: AWS provides a secure infrastructure, including encryption, identity and access management, and compliance with various regulations and standards.
* Reliability: AWS offers a highly reliable platform, with multiple data centers and redundancy built into its infrastructure to ensure uptime.
* Cost-effectiveness: AWS provides a range of pricing options, including a free tier for some services, and pay-as-you-go pricing for others, making it cost-effective for businesses of all sizes.

AWS has become a popular platform for businesses and individuals due to its flexibility, scalability, and reliability, making it easier to build and deploy applications and services in the cloud.
AWS provides over 200 services, so there are many products to choose from depending on your specific needs. However, some of the most commonly used AWS services include:

### Main products
1. EC2 (Elastic Compute Cloud): This is a virtual machine service that allows users to rent computing resources in the cloud, including processing power, memory, and storage.
2. S3 (Simple Storage Service): This is a scalable object storage service that allows users to store and retrieve data in the cloud.
3. RDS (Relational Database Service): This is a managed database service that allows users to run and scale relational databases in the cloud.
4. Lambda: This is a serverless computing service that allows users to run code without managing servers.
5. IAM (Identity and Access Management): This is a service that allows users to control access to AWS resources, including users, groups, and roles.
6. Route 53: This is a domain name system (DNS) web service that allows users to route internet traffic to AWS services.
7. CloudFront: This is a content delivery network (CDN) service that allows users to distribute content globally to users with low latency.
8. Elastic Beanstalk: This is a fully managed service that allows users to deploy, manage, and scale web applications in the cloud.
9. VPC (Virtual Private Cloud): This is a service that allows users to create a private, isolated network in the cloud.

These are just a few examples of the many services that AWS offers. The specific services you use will depend on your specific needs and use case.

### Common - Lexicon

The lexicon of AWS refers to the terminology and vocabulary used within the AWS platform. AWS uses a unique set of terms and concepts to describe its services and features. Here are some common terms used in AWS:

* Region: A region is a physical location around the world where AWS has data centers. Each region contains multiple availability zones.
* Availability zone: An availability zone is a data center within a region. Each availability zone is isolated from others to ensure that failures in one zone do not affect other zones.
* Instance: An instance is a virtual server that runs on AWS EC2. It includes computing power, memory, and storage resources.
* AMI (Amazon Machine Image): An AMI is a pre-configured virtual machine image used to create instances in EC2.
* Elastic IP address: An Elastic IP address is a static public IP address that can be assigned to an instance in EC2.
* VPC (Virtual Private Cloud): A VPC is a virtual network that allows users to launch AWS resources in a private, isolated section of the AWS cloud.
* S3 (Simple Storage Service): S3 is an object storage service used to store and retrieve data in the cloud.
* Bucket: A bucket is a container used to store objects in S3.
* IAM (Identity and Access Management): IAM is a service used to manage access to AWS resources.
* CloudFormation: CloudFormation is a service used to create and manage AWS resources through templates.

These are just a few examples of the terminology and concepts used within AWS. Understanding these terms and concepts is important when using AWS services and features.

it's important to understand regions and availability zones in AWS. Here's what you should know:

* Regions: AWS has multiple geographic regions around the world, each consisting of multiple availability zones. Regions are separate geographic areas that contain one or more availability zones. Each region is completely independent, and resources in one region are isolated from resources in another region. Developers can choose the region closest to their users to reduce latency and improve performance.
* Availability zones: Availability zones are isolated data centers within a region. Each availability zone is physically separate from other availability zones, and they are connected by low-latency networks. Availability zones are designed to be independent and highly available, so if one availability zone fails, other availability zones in the region can continue to operate. Developers can use availability zones to increase the availability and fault tolerance of their applications.
* Deploying resources: When deploying resources in AWS, it's important to consider the region and availability zone. Some AWS services are region-specific, and some are available in multiple regions. When deploying resources, you should choose the region and availability zone that provides the best performance and availability for your application. It's also important to consider the cost of deploying resources in different regions, as prices may vary between regions.
* Replication and backup: To ensure high availability and disaster recovery, it's a best practice to replicate resources across multiple availability zones or regions. This can be achieved using services such as Amazon S3, Amazon RDS, and Amazon DynamoDB, which provide replication and backup options to ensure that data is always available, even in the event of a disaster.

By understanding regions and availability zones in AWS, developers can deploy resources that are highly available and fault tolerant. This can help to ensure that applications are always available to users, even in the event of a failure.

## Serverless computing

Serverless computing is a model of cloud computing where the cloud provider manages the infrastructure and automatically provisions, scales, and manages the servers on behalf of the developers. In a serverless architecture, developers do not have to worry about managing servers, operating systems, or infrastructure. Instead, they can focus on writing code for their application and deploying it to the cloud.

Serverless computing is based on the concept of Function as a Service (FaaS), where developers write small pieces of code (functions) that perform specific tasks. These functions are triggered by events such as a user request or a message from a queue. When a function is triggered, the cloud provider automatically allocates the required resources, runs the function, and then releases the resources when the function completes.

One of the key advantages of serverless computing is that it can reduce infrastructure costs and improve scalability. Since developers only pay for the exact amount of resources used by their application, they can save money compared to running a traditional server-based application.

### AWS serverless

AWS offers a variety of services that enable serverless computing. Here are some of the key services:

* AWS Lambda: AWS Lambda is a serverless computing service that lets developers run code without provisioning or managing servers. Developers can write their code in Java, Python, Node.js, C#, or Go, and Lambda will automatically scale and manage the underlying infrastructure.
* API Gateway: Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, and manage APIs at any scale. With API Gateway, developers can create RESTful APIs that integrate with Lambda functions or any other backend service.
* DynamoDB: Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. Developers can use DynamoDB to store and retrieve data for their serverless applications.
* S3: Amazon S3 (Simple Storage Service) is a highly scalable object storage service that allows developers to store and retrieve any amount of data from anywhere on the web. S3 is often used to store data for serverless applications, such as images or other static assets.
* Step Functions: AWS Step Functions is a serverless workflow service that lets developers coordinate distributed applications and microservices using visual workflows. With Step Functions, developers can build complex applications without having to worry about managing servers or infrastructure.
* EventBridge: Amazon EventBridge is a serverless event bus that makes it easy to connect different applications and services together. With EventBridge, developers can create rules that trigger actions when specific events occur, such as a new user signing up or a file being uploaded to S3.

These are just a few examples of the serverless computing services that AWS offers. By using these services, developers can build highly scalable and reliable applications without having to worry about managing servers or infrastructure.
