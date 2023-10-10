

<!-- toc -->

- [Well architected framework general principles](#well-architected-framework-general-principles)
  * [Pillar 1 - Operational Excellence](#pillar-1---operational-excellence)
  * [Pillar 2 - Security](#pillar-2---security)
  * [Pillar 3 - Reliability](#pillar-3---reliability)
  * [Pillar 4 - Performance Efficiency](#pillar-4---performance-efficiency)
  * [Pillar 5 - Cost Optimization](#pillar-5---cost-optimization)
  * [Pillar 6 - Sustainability](#pillar-6---sustainability)
  * [AWS Well-Architected Tool](#aws-well-architected-tool)
  * [AWS Cloud Adoption Framework (CAF)](#aws-cloud-adoption-framework-caf)
  * [AWS Ecosystem](#aws-ecosystem)
  * [AWS Marketplace](#aws-marketplace)
  * [AWS Training](#aws-training)
  * [AWS Professional Services & Partner Network](#aws-professional-services--partner-network)
  * [AWS Knowledge center](#aws-knowledge-center)
  * [AWS IQ & re:Post](#aws-iq--repost)
  * [AWS Managed Services](#aws-managed-services)

<!-- tocstop -->

## Well architected framework general principles

There are some general principles that we need to follow when designing a system:
- Stop guessing your capacity needs
- Test systems at production scale
- Automate to make architectural experimentation easier (cloudformation)
- Allow for evolutionary architectures
- Drive architectures using data
- Improve through game days (chaos engineering)

the design principles are:
- Scalability
- Disposable resources: we can create and destroy resources on demand and easily control the lifecycle of resources.
- Automation: we can automate the deployment of resources (IaC, auto scaling, etc.)
- Loose Coupling: we can decouple components so that they can be worked on independently.
- Services, not servers: we can use managed services instead of managing our own servers.

### Pillar 1 - Operational Excellence

Introduction to AWS Operational Excellence

AWS Operational Excellence is one of the five pillars of the AWS Well-Architected Framework. This pillar focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures. Key topics include managing and automating changes, responding to events, and defining standards to manage daily operations efficiently.

The main purpose of AWS Operational Excellence is to ensure that applications and systems running on AWS are highly efficient, reliable, and optimized for performance. It helps in identifying and resolving production issues quickly, reducing downtime, and improving customer satisfaction. It also aids in making informed decisions about the operations, which can lead to cost savings and better resource utilization.

Core Components of AWS Operational Excellence

1. Design Principles: These are the fundamental guidelines that help in designing and operating reliable, efficient, and cost-effective systems on AWS. They include performing operations as code, annotating documentation, making frequent, small, reversible changes, refining operations procedures frequently, anticipating failure, and learning from all operational failures.

2. Operational Readiness Review (ORR): This is a process to validate that a workload is ready for production from an operations perspective. It includes checking the workload’s architecture, reviewing its operational capabilities, and ensuring that it meets the necessary operational excellence design principles.

3. Workload and Operational Health: This involves monitoring and tracking the health of your workloads and operations. AWS provides various tools like Amazon CloudWatch, AWS CloudTrail, and AWS X-Ray to monitor, log, and trace the operations.

4. Change Management: This involves managing changes to your workloads and operations in a systematic and controlled manner. AWS provides services like AWS CloudFormation and AWS Elastic Beanstalk for infrastructure provisioning and application deployment.

5. Incident Response: This involves responding to operational incidents effectively and efficiently. AWS provides services like Amazon SNS (Simple Notification Service) and AWS Lambda for automating incident response.

6. Operational Review: This involves regularly reviewing your operations to identify areas for improvement. AWS provides services like AWS Trusted Advisor and AWS Well-Architected Tool for conducting operational reviews.

By understanding and implementing these core components, developers and operations teams can ensure that their AWS workloads are well-architected from an operational excellence perspective. This can lead to improved system performance, reduced downtime, and increased customer satisfaction.

Design principles:
- Perform operations as code: we need to perform operations as code to make sure that we can automate them.
- Annotate documentation: we need to annotate documentation to make sure that we can automate them.
- Make frequent, small, reversible changes: we need to make frequent, small, reversible changes to make sure that we can automate them.
- Refine operations procedures frequently: we need to refine operations procedures frequently to make sure that we can automate them.
- Anticipate failure: we need to anticipate failure to make sure that we can automate them.


### Pillar 2 - Security

AWS Security is a comprehensive suite of services provided by Amazon Web Services (AWS) to help protect your data, applications, and infrastructure in the cloud. The main purpose of AWS Security is to provide end-to-end security and hardening for your resources and workloads on AWS. It solves several problems in software development, such as data protection, infrastructure security, identity and access management, threat detection and continuous monitoring.

Core Components of AWS Security

1. Identity and Access Management (IAM): IAM is a component of AWS Security that helps you securely control access to AWS resources. You can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. This ensures that only authorized personnel can access your resources.

2. Amazon Inspector: This is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for vulnerabilities or deviations from best practices, including impacted networks, OS, and attached storage.

3. AWS Shield: AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency.

4. AWS Key Management Service (KMS): AWS KMS is a managed service that makes it easy for you to create and control the cryptographic keys used to encrypt your data. The service is integrated with other AWS services making it easier to encrypt data and manage keys.

5. AWS Security Hub: This gives you a comprehensive view of your high-priority security alerts and compliance status across AWS accounts. It aggregates, organizes, and prioritizes your security alerts, or findings, from multiple AWS services.

6. AWS WAF (Web Application Firewall): AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources.

These components work together to provide a robust and comprehensive security solution for your AWS environment. They help to ensure that your data is protected, your applications are secure, and that you have visibility and control over who can access your resources.

Design principles:
- Implement a strong identity foundation: we need to implement a strong identity foundation to make sure that we can control access to our resources.
- Enable traceability: we need to enable traceability to make sure that we can track who did what.
- Apply security at all layers: we need to apply security at all layers to make sure that we can protect our resources.

### Pillar 3 - Reliability
Introduction to AWS Reliability Pillar

The AWS Well-Architected Framework is designed to provide high-level guidance on best practices when using AWS services. One of the five pillars of this framework is Reliability. The Reliability Pillar focuses on the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

The Reliability Pillar helps solve several problems in software development. It ensures that a system is designed in such a way that it can handle changes in demand or requirements, can recover from failures without significant downtime, and is resilient enough to withstand infrastructure or service disruptions. This is crucial in today's fast-paced development environment where downtime can lead to significant financial and reputational damage.

Core Components of the AWS Reliability Pillar

1. Foundations: This involves setting up a strong and reliable infrastructure that can handle changes in demand. This includes choosing the right AWS services and resources, setting up monitoring and alerting systems, and ensuring that the infrastructure is secure and compliant.

2. Change Management: This involves making sure that changes to the system are done in a controlled and monitored way. This includes using AWS services like AWS CodePipeline for continuous integration and continuous delivery, and AWS CloudFormation for infrastructure as code.

3. Failure Management: This involves setting up systems and processes to handle failures in the system. This includes setting up automated backups, using AWS services like Amazon RDS for database replication, and using AWS Lambda for serverless computing to handle spikes in demand.

Design principles for reliability
- Test recovery procedures: we need to test the recovery procedures to make sure that they work.
- Automatically recover from failure: we need to automatically recover from failure.
- Scale horizontally: we need to scale horizontally to increase the availability of the system.
- Stop guessing capacity: we need to stop guessing capacity and provision the right amount of resources.
- Manage change in automation: we need to manage change in automation to make sure that we can recover from failure.

### Pillar 4 - Performance Efficiency
The Performance Efficiency pillar, one of the five pillars of the AWS Well-Architected Framework, focuses on the ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve. This pillar is crucial in software development as it helps developers to ensure that their applications and workloads run with optimal performance.

The Performance Efficiency pillar solves several problems in software development. It helps developers to select the right resources and to configure them in a way that maximizes the performance of their workloads. It also provides guidance on how to monitor performance and make informed decisions to maintain efficiency as business needs evolve.

Core Components of the Performance Efficiency Pillar

1. Selection: This component involves choosing the right types and sizes of resources to meet your specific workload requirements. AWS provides a broad range of resource types and configurations, allowing you to tailor your environment to your workload. This selection process is crucial for achieving optimal performance.

2. Review: Regularly reviewing your selections ensures that you are still using the most appropriate resources as your workloads evolve. AWS provides tools like AWS Trusted Advisor and AWS Compute Optimizer that can help you review your resource selections and identify opportunities for improvement.

3. Monitoring: This component involves tracking the performance of your resources to ensure they are meeting your workload requirements. AWS provides tools like Amazon CloudWatch and AWS X-Ray that allow you to monitor your resources and identify any performance issues.

4. Tradeoff: Sometimes, you may need to make tradeoffs between cost, performance, and other factors. This component involves making informed decisions about these tradeoffs to achieve the best overall outcome for your workload.

5. Experimentation: This component encourages you to experiment with different resources and configurations to find the most efficient solution for your workload. AWS makes it easy to test different options and measure their impact on your performance.

Design principles:
- Democratize advanced technologies: we need to democratize advanced technologies to make them available to everyone.
- Go global in minutes: we need to go global in minutes to make sure that we can scale.
- Use serverless architectures: we need to use serverless architectures to make sure that we can scale.
- Experiment more often: we need to experiment more often to make sure that we can improve our system.
- Mechanical sympathy: we need to understand the characteristics of our system to make sure that we can improve it.

### Pillar 5 - Cost Optimization

Introduction to AWS Cost Optimization

Amazon Web Services (AWS) is a comprehensive cloud platform offering over 200 fully-featured services from data centers globally. One of the key pillars of the AWS Well-Architected Framework is Cost Optimization. This pillar focuses on avoiding unnecessary costs and getting the most value out of AWS resources.

The main purpose of AWS Cost Optimization is to help you understand and control where money is being spent, identify waste, and refine cost models to ensure you're only paying for the resources you need. It solves the problem of escalating cloud costs, which can be a significant issue in software development, especially in large-scale and complex projects.

Core Components of AWS Cost Optimization

1. Cost-Effective Resources: This component involves selecting the most cost-effective resource that can meet your requirements. AWS provides a variety of resource types and configurations, each with different cost structures. Understanding these options can help you choose the most cost-effective solution for your specific needs.

2. Matching Supply with Demand: This involves provisioning resources to match your business demand without over-provisioning or under-provisioning. AWS offers several tools and services, such as AWS Auto Scaling, to help you scale resources based on demand.

3. Expenditure Awareness: This component involves understanding your AWS costs and usage. AWS provides tools like AWS Cost Explorer and AWS Budgets to visualize, understand, and manage your AWS costs and usage over time.

4. Optimizing Over Time: This involves continuously examining and refining your resource usage. As AWS frequently reduces prices and releases new services, you can often achieve cost savings by adopting new services or features or by simply adjusting your usage.

These components work together to provide a comprehensive approach to cost management on AWS. By understanding and applying these principles, you can significantly reduce your AWS costs and ensure that you're getting the most value from AWS services.

Design principles:
- Adopt a consumption model: we need to adopt a consumption model to make sure that we can scale (pay 4 your use).
- Measure overall efficiency: we need to measure overall efficiency to make sure that we can improve our system (cloudwatch).
- Stop spending money on data center operations: we need to stop spending money on data center operations to make sure that we can scale.
- Analyze and attribute expenditure: we need to analyze and attribute expenditure to make sure that we can improve our system, use tag to track costs.
- Use managed services to reduce cost of ownership: we need to use managed services to reduce cost of ownership to make sure that we can scale.

### Pillar 6 - Sustainability
The Sustainability Pillar is designed to help AWS customers build and run applications in a way that reduces the overall environmental impact. It provides best practices for improving energy efficiency, reducing carbon emissions, and optimizing the use of resources in your AWS environment. This pillar is crucial in today's world, where there is a growing need for businesses to demonstrate their commitment to environmental sustainability.

Core Components of AWS Sustainability Pillar

1. Resource Efficiency: This component focuses on optimizing the use of resources in your AWS environment. It involves selecting the right services and configurations that meet your needs without over-provisioning. By doing so, you can reduce the amount of energy used and the carbon emissions produced by your applications.

2. Energy Efficiency: This component is about improving the energy efficiency of your applications. AWS provides a range of services and features that can help you achieve this, such as compute saving plans, right-sizing recommendations, and more. By using these services and features, you can reduce the amount of energy your applications consume and lower your carbon footprint.

3. Carbon Efficiency: This component focuses on reducing the carbon emissions produced by your applications. AWS provides tools and resources to help you measure and reduce your carbon emissions, such as the AWS Carbon Footprint tool. By using these tools and resources, you can understand your carbon footprint and take steps to reduce it.

4. Renewable Energy: This component is about using renewable energy to power your applications. AWS is committed to achieving 100% renewable energy usage for its global infrastructure, and it provides options for customers to use renewable energy in their AWS environment.

5. Circular Economy: This component focuses on reducing waste and promoting the reuse and recycling of resources. AWS provides services and features that support the principles of the circular economy, such as the ability to repurpose or recycle resources when they are no longer needed.

By understanding and implementing the best practices in the AWS Sustainability Pillar, you can build and run applications that are not only efficient and cost-effective, but also environmentally friendly. This can help you meet your sustainability goals and contribute to a more sustainable future.

### AWS Well-Architected Tool

Introduction to AWS Well-Architected Tool

The AWS Well-Architected Tool (AWS WA Tool) is a service provided by Amazon Web Services that helps users to review the state of their workloads and compares them against the latest AWS architectural best practices. The main purpose of this tool is to improve the quality of systems, reduce the risk of architectural failures, and to make the cloud experience smoother and more efficient.

The AWS WA Tool solves several problems in software development. It provides a consistent approach for customers and partners to evaluate architectures, and provides guidance to help implement designs that will scale with application needs over time. It also helps in identifying a clear path for solving critical problems in architecture, such as high costs, low performance, and security risks.

Core Components of AWS Well-Architected Tool

1. Workload Definition: This is the first step in using the AWS WA Tool. A workload represents a collection of AWS resources that deliver business value. It might be a single application, or a collection of multiple applications, which together provide a service. Defining your workload correctly is crucial for the tool to provide accurate recommendations.

2. Well-Architected Review: This is the process of comparing your workload against the five pillars of the AWS Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. Each pillar has a set of questions that you answer about your architecture. Based on your answers, the tool provides a set of high-level recommendations and detailed improvement plans.

3. Improvement Plan: Based on the review, the AWS WA Tool provides an improvement plan. This plan includes a list of recommendations for each pillar, with links to detailed instructions on how to implement each recommendation. The plan also includes a timeline for implementation, helping you prioritize and plan your improvements.

4. Milestones: As you implement the recommendations from your improvement plan, you can create milestones in the AWS WA Tool. These milestones represent a point in time in the state of your workload, allowing you to track your progress over time.

5. AWS Well-Architected Framework: This is the underlying framework that the AWS WA Tool uses to review your workloads. It includes a set of best practices for architecting systems on AWS, and is updated regularly based on new services and architectural best practices from AWS.

By using the AWS Well-Architected Tool, you can ensure that your workloads are following the best practices for cloud architecture, helping you to build secure, high-performing, resilient, and efficient infrastructure for your applications.

### AWS Cloud Adoption Framework (CAF)

Introduction to AWS Cloud Adoption Framework (CAF)

The AWS Cloud Adoption Framework (CAF) is a comprehensive guide for organizations to understand how cloud adoption transforms the way they work. It provides structure to identify and address gaps in skills and processes so that organizations can innovate faster with less risk. The AWS CAF breaks down the complex process of planning a cloud migration into manageable pieces, helping to ensure a smooth and successful transition.

The AWS CAF solves several problems in software development. It provides a clear roadmap for cloud adoption, reducing the risk of failure and ensuring that all aspects of an organization are prepared for the transition. It also helps organizations identify the skills and capabilities they need to develop to effectively use the cloud, reducing the learning curve and speeding up the adoption process.

Core Components of AWS CAF

The AWS CAF is divided into six perspectives, each representing an essential aspect of an organization. Each perspective is further divided into components, which are specific areas of focus within that perspective.

1. Business Perspective: This perspective focuses on the business value of cloud adoption. It includes components like business case development, benefits realization, and business risk management.

2. People Perspective: This perspective focuses on the human elements of cloud adoption. It includes components like roles and responsibilities, training and certification, and organizational change management.

3. Governance Perspective: This perspective focuses on the governance aspects of cloud adoption. It includes components like portfolio management, program management, and risk and compliance management.

4. Platform Perspective: This perspective focuses on the technical aspects of cloud adoption. It includes components like architecture, infrastructure, and operations.

5. Security Perspective: This perspective focuses on the security aspects of cloud adoption. It includes components like identity and access management, data protection, and incident response.

6. Operations Perspective: This perspective focuses on the operational aspects of cloud adoption. It includes components like service management, operations model, and resources.

Each component of the AWS CAF plays a crucial role in ensuring a successful cloud adoption. By addressing each component, organizations can ensure that they are fully prepared for the transition to the cloud, reducing the risk of failure and speeding up the adoption process.

### AWS Ecosystem
There are some free resources that we can use to learn AWS:
- AWS Blogs
- AWS Whitepapers & Guides
- AWS Forums
- AWS Parter Solutions (Quick Starts)
- AWS Solutions

There is the AWS SUpport divided by plans:
* Developer: 
  * Businees hours access to support
  * General guidance <24 hours
  * System impaired <12 hours
* Business:
  * 24x7 access to support
  * Production system impaired <4 hours
  * Production system down <1 hour
* Enterprise:
  * 24x7 access to support
  * Production system impaired <15 minutes
  * Production system down <1 hour
  * Technical Account Manager (TAM)
  * Concierge Support Team

### AWS Marketplace
You can find software from third-party vendors that you can use in your AWS environment. You can find software from categories like:
- Custom AMI
- CloudFormation Templates
- SaaS
- Machine Learning

### AWS Training
AWS Training and Certification helps you build and validate your cloud skills so you can get more out of the cloud. Our content is built by experts at AWS and updated regularly to keep pace with AWS updates, so you can be sure you’re learning the latest and keeping your cloud skills fresh.
- AWS Digital Training
- AWS Classroom Training
- AWS Private Training
- AWS Certification

### AWS Professional Services & Partner Network
AWS Professional Services is a global team of experts that can help you realize your desired business outcomes when using the AWS Cloud. Whether you are just starting out, looking to migrate to the cloud, or seeking to optimize and innovate your existing AWS environment, AWS Professional Services can accelerate your journey.
There are:
1. APN Technology Partners: APN Technology Partners provide software solutions that are either hosted on, or integrated with, the AWS platform. APN Technology Partners include Independent Software Vendors (ISVs), SaaS, PaaS, Developer Tools, Management and Security Vendors, and Networking and Storage Vendors.
2. APN Consulting Partners: APN Consulting Partners are professional services firms that help customers design, architect, build, migrate, and manage their workloads and applications on AWS. APN Consulting Partners include System Integrators (SIs), Strategic Consultancies, Agencies, Managed Service Providers (MSPs), and Value-Added Resellers (VARs).
3. APN Training Partners: APN Training Partners provide training solutions that help individuals and organizations build AWS Cloud skills to advance their business initiatives. APN Training Partners include AWS Training Partners (ATPs) and AWS Authorized Instructors (AIs).
4. AWS Navigate Program: AWS Navigate is a partner enablement program for APN Partners who specialize in helping customers migrate to the AWS Cloud. AWS Navigate provides a prescriptive path for APN Partners to build a specialized practice on AWS, and offers tools, resources, and expertise to help them become AWS experts and deploy innovative solutions on behalf of AWS customers.
5. AWS Competency Program: The AWS Competency Program is designed to highlight APN Partners who have demonstrated technical proficiency and proven customer success in specialized solution areas. Attaining an AWS Competency allows APN Partners to differentiate themselves to customers by showcasing expertise in a specific solution area.


### AWS Knowledge center
The AWS Knowledge Center is a collection of articles, videos, and other resources that can help you learn more about AWS services and features. It includes information on topics like getting started with AWS, troubleshooting common issues, and optimizing your AWS environment.

### AWS IQ & re:Post

AWS IQ is a service that connects customers with AWS Certified third-party experts for project-based work. Customers can post projects and receive responses from experts, who can then be hired to complete the project. AWS IQ is a great way to find experts who can help you with your AWS projects.

re:Invent is the largest gathering of the global cloud computing community forum. It is a learning conference hosted by Amazon Web Services for the global cloud computing community. The event features keynote announcements, training and certification opportunities, access to more than 2,500 technical sessions, a partner expo, after-hours events, and so much more.

### AWS Managed Services
It is a team of people which will manage and operate your AWS infrastructure. It is a managed service that automates common activities, such as change requests, monitoring, patch management, security, and backup services, and provides full-lifecycle services to provision, run, and support your infrastructure.

