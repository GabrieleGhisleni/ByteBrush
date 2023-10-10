

<!-- toc -->

- [AWS Organizations](#aws-organizations)
  * [Multi account strategies](#multi-account-strategies)
  * [OU Organizational Units](#ou-organizational-units)
  * [Service Control Policies (SCP)](#service-control-policies-scp)
  * [Consolidated Billing](#consolidated-billing)
  * [AWS Control Tower](#aws-control-tower)
  * [AWS Resource Access Manager (RAM)](#aws-resource-access-manager-ram)
  * [AWS Service Catalog](#aws-service-catalog)
- [Costs management](#costs-management)
  * [Pricing models](#pricing-models)
  * [Saving plans](#saving-plans)
  * [AWS Compute optimizer](#aws-compute-optimizer)
- [Billing and costing tools](#billing-and-costing-tools)
  * [Pricing calculator](#pricing-calculator)
  * [AWS Billing Dashboard](#aws-billing-dashboard)
  * [Cost allocation tags](#cost-allocation-tags)
  * [AWS Cost Explorer:](#aws-cost-explorer)
  * [AWS Cost and Usage Report:](#aws-cost-and-usage-report)
  * [Billing Alarms](#billing-alarms)
  * [AWS Budgets:](#aws-budgets)
  * [AWS Cost Anomaly Detection:](#aws-cost-anomaly-detection)
  * [AWS Service quotas (formerly known as service limits):](#aws-service-quotas-formerly-known-as-service-limits)
  * [AWS Trusted Advisor:](#aws-trusted-advisor)
  * [Support Plans pricing](#support-plans-pricing)
    + [Enterprise Support](#enterprise-support)

<!-- tocstop -->

## AWS Organizations 
AWS Organizations is a cloud service offered by Amazon Web Services (AWS) that allows businesses to manage and govern their environment as they grow and scale their workloads on AWS. It is designed to simplify administrative tasks and enable businesses to meet their unique business needs.

The main purpose of AWS Organizations is to provide a way for businesses to centrally manage and enforce policies for multiple AWS accounts. It solves the problem of managing multiple AWS accounts individually, which can be time-consuming and prone to errors. With AWS Organizations, businesses can automate account creation, create groups of accounts to reflect their business needs, and apply policies to these groups for governance.

Core Components of AWS Organizations

1. Organizational Units (OUs): These are groups of AWS accounts within an organization. OUs allow businesses to logically group and structure their AWS accounts based on their business needs. For example, a business might have separate OUs for their development, testing, and production environments.

2. Service Control Policies (SCPs): These are the means by which businesses can centrally control AWS service use across multiple AWS accounts. SCPs allow businesses to set fine-grained permissions and restrictions on AWS service use. For example, a business might use an SCP to prevent certain AWS accounts from launching Amazon EC2 instances of a particular type.

3. Consolidated Billing: This feature of AWS Organizations allows businesses to consolidate payment for multiple AWS accounts. Each AWS account in an organization can use AWS services independently, but all the charges across all accounts are paid from the master account. This simplifies the payment process and can also lead to cost savings, as AWS applies volume discounts cumulatively to the charges for all accounts.

4. Account Management: AWS Organizations provides centralized management of your AWS accounts. This includes creating new accounts, closing accounts, and managing the security and compliance of your accounts.

5. AWS CloudTrail Integration: AWS Organizations is integrated with AWS CloudTrail, a service that provides a record of actions taken in your AWS account by a user, role, or an AWS service. This allows for governance, compliance, operational auditing, and risk auditing of your organization.

In conclusion, AWS Organizations is a powerful tool for businesses that use multiple AWS accounts. It simplifies account management, improves security and compliance, and can lead to cost savings. Whether you're a small business with a few AWS accounts or a large enterprise with hundreds of accounts, AWS Organizations can make managing your AWS environment easier and more efficient. 

It allow to manage multiple aws accounts, the main account is the master account and the other accounts are the member accounts. It allows to create groups of accounts and apply policies to these groups. It allows to consolidate billing across multiple accounts (the master can pay for all the others) and can share pricing benefits and pooling of reserved ec2 instances.

### Multi account strategies

Create accounts per departmenet (finance, marketing, etc), create accounts per cost center (dev, test, prod), create accounts per business unit (business unit 1, business unit 2, etc), create accounts per application, create accounts per environment (dev, test, prod), create accounts for data sharing (log archive, audit archive, etc).

### OU Organizational Units

Yu can organize them by business units, departments, applications, environments, etc. You can have nested OUs.

[organizational-units](./images/organizations.png)

### Service Control Policies (SCP)

Service Control Policies (SCPs) are a type of policy that you can use to manage permissions in your AWS Organizations. SCPs offer central control over the maximum available permissions for all accounts in your organization, allowing you to ensure your accounts stay within your organization’s access control guidelines.

SCPs are used to set fine-grained permissions and deny any actions that are not explicitly allowed. They act as a filter for the actions that are allowed by the IAM user and role policies within the accounts, and by the permissions boundaries that are set for those entities. 

For example, you can use an SCP to restrict access to specific AWS services, to restrict actions within services, or to restrict access based on the condition context. This means you can centrally control which services and actions the users, groups, and roles in each of your AWS accounts can perform, providing a consistent set of permissions across your entire organization.

It's important to note that SCPs do not grant permissions, but instead are used to set the maximum permissions that an identity-based policy can grant to an IAM entity (IAM user, group, or role).

### Consolidated Billing
Consolidated Billing is another core component of AWS Organizations. It is a feature that allows businesses to combine usage from all of their AWS accounts into a single bill, making it easier to track and manage costs. 

With Consolidated Billing, each AWS account in your organization can be used independently, but all the charges across your accounts are paid from the payment methods associated with the master account. This not only simplifies the payment process but also potentially leads to cost savings. 

This is because AWS combines usage from all accounts to qualify for volume-based pricing tiers, meaning you could pay less than if each account was billed separately. For example, if you have three accounts each using 500GB of Amazon S3, instead of being billed at the first pricing tier for each account, AWS will bill at the second pricing tier for the combined 1500GB usage. 

It's important to note that while the master account is responsible for paying the charges, each member account can still view and track their own charges for cost management purposes.

Shared discount benefits: AWS applies volume discounts cumulatively to the charges for all accounts in your organization. This means that if you have multiple accounts, you can potentially pay less than if each account was billed separately.

### AWS Control Tower
AWS Control Tower is another service offered by Amazon Web Services that provides the easiest way to set up and govern a secure, multi-account AWS environment. It's designed for organizations with multiple accounts who want to set up their environment quickly, using best-practices established through AWS' experience working with thousands of enterprises as they move to the cloud.

Control Tower automates the set-up of a baseline environment, or landing zone, that is a secure, multi-account AWS environment. It establishes a strong operational foundation, including identity, federated access, and account structure. It also sets up a configuration that prevents deployment of resources that fall outside of the specified rules.

AWS Control Tower includes two main components:

1. Guardrails: These are high-level rules that provide ongoing governance for your overall AWS environment. There are two types of guardrails - preventive and detective. Preventive guardrails enforce rules to prevent non-compliant actions (like denying the creation of an Amazon S3 bucket without encryption), while detective guardrails monitor for non-compliant resource configurations and report on them.

2. Landing Zones: A Landing Zone is a well-architected, multi-account AWS environment that is based on security and compliance best practices. It includes a multi-account structure, identity management, federated access, centralized logging, cross-account security audits, and enables data security.

AWS Control Tower and AWS Organizations are often used together. AWS Organizations provides the structure of the AWS accounts and AWS Control Tower provides the governance, compliance, and best practices.

### AWS Resource Access Manager (RAM)
AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share your AWS resources with any AWS account or within your AWS Organization. It eliminates the need to create duplicate resources in multiple accounts, reducing the operational overhead of managing those resources in each individual account.

With AWS RAM, you can share resources like Subnets, Transit Gateways, AWS License Manager configurations, and more. This helps in scenarios where you want to share resources across accounts to reduce costs and simplify management tasks. For example, if you have a common set of resources that you want to share across multiple accounts for a project, you can use AWS RAM to share these resources instead of creating them in each account.

AWS RAM is fully integrated with AWS Organizations, which means you can share resources with all accounts in your organization or with specific organizational units (OUs). This makes it easier to manage access to shared resources at scale.

[RAM](./images/ram.png)

### AWS Service Catalog
AWS Service Catalog is another service offered by Amazon Web Services. It is designed to create and manage catalogs of IT services that are approved for use on AWS. These services can be everything from virtual machine ./images, servers, software, and databases to complete multi-tier application architectures.

The main purpose of AWS Service Catalog is to help organizations achieve consistent governance and meet compliance requirements, while enabling users to quickly deploy only the approved IT services they need. It allows IT administrators to create a catalog of pre-approved services, and users can then browse the listings and deploy applications in a self-service manner.

AWS Service Catalog simplifies the management and deployment of IT services on AWS, and it helps to ensure that all resources are compliant with your organization's specific policies. It also reduces the time and effort needed to support your organization's AWS users by eliminating the need for manual provisioning and management of resources.

Core Components of AWS Service Catalog

1. Service Catalog: This is the central repository where IT administrators can manage all approved IT services. It provides a single location where users can discover and deploy the IT services they need.

2. Products: These are the IT services that are available for deployment in the Service Catalog. A product can be a single AWS resource, such as an Amazon S3 bucket, or a collection of related resources, such as an Amazon EC2 instance and an Amazon RDS database.

3. Portfolios: These are collections of products, along with the configuration information. IT administrators can use portfolios to manage user access to specific products based on their job function or department.

4. Constraints: These are the rules that govern how a product can be used. Constraints can be used to enforce compliance with organizational policies, such as limiting the AWS regions in which a product can be deployed.

5. Provisioned Products: These are instances of a product that have been deployed by a user. Each provisioned product is an AWS CloudFormation stack, and it includes all the AWS resources that are part of the product.


## Costs management
### Pricing models

There are 4 pricing models:

1. On demand: you pay for compute capacity per hour or per second depending on which instances you run. It is recommended for short term and un-interrupted workloads, where you can't predict how the application will behave.
2. Save when you reserve: you can reserve instances for 1 or 3 years. It is recommended for steady state usage applications (think database) or predictable usage workloads.
3. Pay less using more: you can use spot instances for workloads that are not critical and can handle interruptions. It is recommended for applications that have flexible start and end times, applications that are only feasible at very low compute prices, users with urgent computing needs for large amounts of additional capacity.
4. Pay less as AWS grows: aws will reduce the cost when aws grows.

### Saving plans
AWS Savings Plans is a flexible pricing model offered by Amazon Web Services that provides significant discounts on AWS compute usage in exchange for a commitment to a consistent amount of usage, measured in dollars per hour, for a term of 1 or 3 years. 

There are two types of Savings Plans:

1. Compute Savings Plans: These provide the most flexibility and help to reduce costs across any AWS compute usage, regardless of the region, instance family, operating system, or tenancy. This includes usage across Amazon EC2, AWS Fargate, and AWS Lambda.

2. EC2 Instance Savings Plans: These offer the deepest discounts and are ideal for workloads with a steady state usage. They automatically apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy.

Savings Plans can significantly lower your AWS bills and are a great alternative to Reserved Instances, especially for businesses with dynamic workloads, as they offer more flexibility. They also simplify the management of reserved capacity, as you don't need to manage your reservations as closely as you would with Reserved Instances.

You don't reserve resources, you can commit yourself to spend a certain amount of money per hour for 1 or 3 years. It is a flexible pricing model that offers significant savings on AWS usage. It is a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term, and in exchange, you will receive a discount on that usage. It integrates with AWS Cost Explorer to help you understand your savings.

### AWS Compute optimizer
AWS Compute Optimizer is a service provided by Amazon Web Services that analyzes the configuration and utilization metrics of your AWS resources. It then provides recommendations on how you can optimize these resources for better performance and reduced costs.

The main purpose of AWS Compute Optimizer is to help you choose the right resources for your workloads. It uses machine learning to analyze historical utilization data and identify the optimal AWS resources for your workloads. This can help you reduce costs by up to 25% by right-sizing your resources.

it supports:
- ec2
- ec2 auto scaling groups
- ebs volumes
- lambda functions

## Billing and costing tools
Estimating cost:
- Pricing calculator

Tracking costs:
- Billing dashboard
- Cost explorer
- Cost allocation tags
- Cost and usage report

Monitoring costs:
- AWS budgets
- AWS billing alarms
- 
### Pricing calculator

The AWS Pricing Calculator is a tool that helps you estimate the cost of using AWS services. It allows you to explore AWS services, and create an estimate for the cost of your use cases on AWS.

You can model your solutions before building them, explore the cost trade-offs of different architectures, and understand the price impact of AWS services and cost-optimization strategies.

The AWS Pricing Calculator is a valuable tool for understanding and managing your AWS costs. It helps you make informed decisions about your AWS usage and optimize your costs.

### AWS Billing Dashboard
The AWS Billing Dashboard is a feature of AWS that provides a consolidated view of your AWS costs and usage. It is a central place where you can track your AWS spending, set custom cost and usage budgets, and get detailed reports about where your money is going.

The dashboard is divided into several sections, each providing different insights into your AWS usage and costs:

1. **Monthly spend by service**: This section provides a breakdown of your AWS costs by service for the current month. It allows you to see which AWS services are costing you the most.

2. **Month-to-date spend by linked account**: If you're using AWS Organizations to manage multiple AWS accounts, this section shows you how much each account is spending for the current month.

3. **Month-to-date top services by spend**: This section shows the top five AWS services in terms of cost for the current month.

4. **Budgets**: This section allows you to create and manage budgets for your AWS costs. You can set custom cost and usage budgets and receive alerts when your usage or costs exceed the budgeted amount.

5. **Cost Explorer**: This is a more advanced feature that allows you to analyze your AWS costs and usage in detail. You can filter and group your data by various dimensions, such as service, linked account, or tag, and view your data for different time periods.

The AWS Billing Dashboard is a powerful tool for managing your AWS costs and ensuring that you're not spending more than you need to on AWS services.

### Cost allocation tags
AWS Cost Allocation Tags is a feature of AWS Organizations that helps in managing costs. It allows you to assign metadata to AWS resources in the form of tags. Each tag is a simple label consisting of a user-defined key and an optional value that can make it easier to manage, search for, and filter resources.

The main purpose of AWS Cost Allocation Tags is to organize your AWS costs and usage. When you activate these tags, AWS uses them to categorize your costs on your cost allocation report, making it easier to track your AWS costs and see where you are spending money. 

For example, you might tag several resources that are associated with a particular project or department. When you activate these tags, AWS includes them in the AWS Cost Explorer and the AWS Cost and Usage Report, allowing you to track the costs associated with that project or department separately from other costs.

In summary, AWS Cost Allocation Tags provide a way to categorize and track your AWS costs, making it easier to manage your costs and understand where your money is going.

### AWS Cost Explorer: 

AWS Cost Explorer is a tool provided by Amazon Web Services that allows users to visualize, understand, and manage their AWS costs and usage over time. This tool gives you the ability to analyze your costs and usage using metadata tags, including the ability to forecast how much you are likely to spend for the rest of the month.

With AWS Cost Explorer, you can filter graphs by values such as API operation, Availability Zone, AWS service, custom cost allocation tags, instance type, and more. You can also specify time ranges to analyze, and you can view data at a high level (for example, all accounts) or for a group of tags.

AWS Cost Explorer also includes a set of default reports, such as a monthly spend by service view, as well as daily and monthly spend over the last 6 months. You can customize these reports by choosing the desired time range, filters, and granularity (daily or monthly), and you can also save your custom reports for future use.

In the context of AWS Organizations, AWS Cost Explorer can be used to track and manage costs across multiple AWS accounts, providing a clear picture of how resources are being used and where savings can be made.

It also provide the possibility to forecast the costs for the next 12 months.

### AWS Cost and Usage Report: 
The AWS Cost and Usage Report is a feature of AWS Organizations that provides comprehensive data about your costs and usage. This report is designed to help you manage your costs, identify potential savings, and understand your AWS usage.

The AWS Cost and Usage Report includes detailed information about your AWS usage, down to the hourly level for each service category used within your AWS accounts. It also includes the costs associated with each AWS service and the tags that you have assigned to your resources.

This report can be customized to meet your specific needs. You can choose to include or exclude certain accounts, specify the time period for the report, and select the level of detail that you want for your data.

### Billing Alarms

Billing Alarms in AWS is a feature that allows you to set custom cost and usage alarms to manage your costs. You can create alarms that notify you when your usage or costs exceed a threshold you define. 

This feature is part of AWS Budgets, a tool that provides the ability to set custom cost and usage budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.

To create a billing alarm, you would use the CloudWatch service in AWS. Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.

In the context of AWS Organizations, you can use billing alarms to monitor the costs associated with each of your AWS accounts or organizational units, helping you to manage your costs effectively across your organization.


### AWS Budgets: 
AWS Budgets is another core component of AWS Organizations. It is a feature that allows you to set custom cost and usage budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.

AWS Budgets provides a set of tools to let you manage your costs and keep them at a level you're comfortable with. You can set daily, monthly, quarterly, or annual budgets, and you can also create budgets for specific services or tags.

This feature is particularly useful for businesses that need to keep a close eye on their cloud expenditure. It helps to prevent unexpected charges and manage costs effectively across different departments or projects. AWS Budgets can send email or SMS notifications when a user's costs or usage exceed their budgeted amount, allowing for proactive cost management. 

In the context of AWS Organizations, AWS Budgets can be used to set and manage budgets for individual accounts or for an entire organization, providing a centralized way to keep track of AWS costs and usage.

### AWS Cost Anomaly Detection: 
This service uses machine learning to identify unusual cost patterns. It integrates with AWS Cost Explorer to provide detailed insights into these anomalies. A use case could be a company wanting to identify and investigate unexpected spikes in their AWS costs.

### AWS Service quotas (formerly known as service limits):
AWS Service Quotas is a service that allows you to view and manage your quotas, also known as limits, from a central location. Quotas are the maximum number of resources that you can create in an AWS account. 

For example, there might be a limit on the number of Amazon EC2 instances that you can run, or the number of AWS Lambda functions you can create. These quotas are put in place to prevent accidental over-provisioning of resources which could lead to unexpectedly high costs.

With AWS Service Quotas, you can view the default values and request quota increases for adjustable quotas in your AWS account. This is particularly useful in a large organization where different teams or projects might have different needs in terms of resource usage. 

By integrating AWS Service Quotas with AWS Organizations, you can centrally track and manage service quotas across all your AWS accounts, ensuring that your teams have the resources they need while keeping costs under control.

### AWS Trusted Advisor: 
AWS Trusted Advisor is a tool provided by Amazon Web Services that helps users to observe best practices for the use of AWS by inspecting their AWS environment. It provides real-time guidance to help users provision their resources following AWS best practices.

Trusted Advisor provides insights in five categories:

1. Cost Optimization: It gives recommendations on how you can save money in your AWS environment. For example, it might suggest that you reduce or eliminate underutilized resources.

2. Performance: It checks your service usage to ensure they are running at optimal performance. For instance, it might suggest that you use Amazon CloudFront for content delivery to improve your application's speed.

3. Security: It identifies potential security loopholes and suggests how to reduce your risk and improve the overall security of your AWS environment. For example, it might recommend that you enable Multi-Factor Authentication (MFA) on your root account.

4. Fault Tolerance: It checks your AWS resources and services to ensure that they are set up for high availability and resilience. For example, it might suggest that you enable versioning for your Amazon S3 buckets to protect against accidental deletion.

5. Service Limits: It checks your usage to ensure it doesn't exceed the maximum limits of a service, and provides recommendations if you're approaching service limits.

In summary, AWS Trusted Advisor is a proactive service that helps you follow best practices to optimize your AWS environment in terms of cost, performance, security, and fault tolerance.

for Basic & Developer support plans, you get 7 core checks:
- S3 bucket permissions
- Security groups - specific ports un restricted
- IAM use - access keys not rotated in 90 days
- MFA on root account
- EBS public snapshots
- RDS public snapshots
- Service limits

for Business & Enterprise support plans, you get 115 checks:
- All the core checks
- Ability to set CloudWatch alarms when reaching limits
- Programmatic Accessing using AWS SUPPORT API

### Support Plans pricing

AWS offers several support plans, each with its own pricing structure. The cost of each plan is based on a percentage of your AWS usage fees. Here are the main support plans:

1. Basic Support: This is free for all AWS customers and provides 24/7 access to customer service, documentation, whitepapers, and support forums.

2. Developer Support: This plan is designed for testing and development environments. It costs either $29 per month or 3% of your monthly AWS usage, whichever is greater. It includes all the features of Basic Support, plus business hour access to Cloud Support Associates via email.

3. Business Support: This plan is designed for production environments. It costs a minimum of $100 per month or a percentage of your monthly AWS usage, whichever is greater. The percentage decreases as your usage increases. It includes all the features of Developer Support, plus 24/7 phone, email, and chat access to Cloud Support Engineers, and infrastructure event management.

4. Enterprise on-Ramp Support: This plan is designed for business-critical workloads. It costs a minimum of $15,000 per month or a percentage of your monthly AWS usage, whichever is greater. The percentage decreases as your usage increases. It includes all the features of Business Support, plus a Technical Account Manager, and concierge support.

5. Enterprise Support: This plan is designed for mission-critical workloads. It costs a minimum of $29,000 per month or a percentage of your monthly AWS usage, whichever is greater. The percentage decreases as your usage increases. It includes all the features of Enterprise on-Ramp Support, plus a dedicated Technical Account Manager, and infrastructure event management.


Remember, the exact cost of the Business and Enterprise plans depends on your monthly AWS usage. You can find more detailed information on the AWS Support Plans pricing page.

####  Enterprise Support
You will have acccess to:

1. Technical Account Managers (TAMs): TAMs are part of AWS's premium support offering. They are technical experts who work closely with customers to provide proactive guidance and help them optimize their AWS infrastructure. TAMs provide ongoing support and act as a single point of contact for all AWS-related queries and issues.

2. Concierge Support Team: This is another part of AWS's premium support offering. The Concierge Support Team is dedicated to helping customers with account and billing related inquiries. They provide personalized assistance to help customers understand their bills, optimize costs, and navigate AWS's vast array of services.

3. AWS Infrastructure Event Management (IEM): IEM is a service offered by AWS to provide architectural and scaling guidance for planned events. The IEM team works with customers to prepare their applications and infrastructure for large-scale events, such as product launches or marketing campaigns, to ensure they can handle the increased load.

4. AWS Well-Architected Framework: This is a set of best practices and strategies for building and optimizing systems on AWS. The Well-Architected Framework is designed to help businesses understand the pros and cons of different architectural decisions and make informed choices that align with their business needs. It covers five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization.
