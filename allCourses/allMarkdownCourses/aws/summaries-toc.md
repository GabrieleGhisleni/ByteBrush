

<!-- toc -->

- [IAM Section](#iam-section)
- [EC2 Section](#ec2-section)

<!-- tocstop -->

# IAM Section

Users: mapper to a pshycal user, has a password, can have MFA, can have access keys, can have policies, can be in groups, can be in roles, can be in other accounts (cross account access)
Groups: collection of users, can have policies
Policies: JSON documents that define what a user/group/role can do
Roles: mapper to a service, can have policies, can be assumed by users, can be assumed by other roles, can be assumed by other accounts (cross account access)
Security: MFA  + password policy + IAM password policy + IAM access advisor + IAM credential report + IAM access analyzer + IAM access adv
AWS CLI: manage your aws services from the command line and automate them
AWS SDK: manage your aws services from your code and automate them
Access Keys: access key ID + secret access key, only for programmatic access, can be rotated, can be disabled, can be used to sign API calls to AWS
Audit: IAM Credential report + IAM Access Advisor + IAM Access Analyzer

# EC2 Section
Ec2 instance- ami + instanze size, + storage, + security grups + ec2 user data
Security groups: firewall on ec2 instances, can be attached to multiple instances, locked down to a region/VPC combination, live "outside" the EC2 - if traffic is blocked the EC2 instance won't see it
EC2 user data: launch script, bootstrap script, can be used to get instance metadata
SSH key pairs: public/private key pair, to connect to EC2 instances, to be used with Linux instances, to be used with EC2 Instance Connect, to be used with a third party tool (e.g. putty)
Ec2 Instance Roles: roles that you create and assign to an ec2 instance, roles are temporary and rotated automatically, roles are universal (can be used in any region), roles are more secure than storing your access key and secret access key on individual EC2 instances
Purchasing options: On demand, reserved, spot, dedicated hosts

