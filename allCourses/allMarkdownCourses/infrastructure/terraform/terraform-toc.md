

<!-- toc -->

- [Infrastructure as code (IaC)](#infrastructure-as-code-iac)
  * [Terraform](#terraform)
    + [Terraform state .tfstate](#terraform-state-tfstate)
    + [Terraform state .tfstate.backup](#terraform-state-tfstatebackup)
    + [Variables](#variables)
      - [Variable .tfvars](#variable-tfvars)
      - [Variable .tfvars.json](#variable-tfvarsjson)
      - [Variable ordering](#variable-ordering)
    + [Output](#output)
    + [Modules](#modules)
      - [Remote modules](#remote-modules)
      - [Dynamic blocks](#dynamic-blocks)
    + [AWS resources](#aws-resources)
      - [AWS ec2](#aws-ec2)
      - [AWS elastic ip](#aws-elastic-ip)
      - [AWS security group](#aws-security-group)
    + [IAM resources](#iam-resources)
    + [Terraform remote backend](#terraform-remote-backend)
    + [Dependencies](#dependencies)
    + [Terraform count](#terraform-count)
    + [Multiple variable files](#multiple-variable-files)
    + [Importing resources](#importing-resources)
    + [Data sources](#data-sources)
    + [List commands](#list-commands)

<!-- tocstop -->

# Infrastructure as code (IaC)

IaC is the process of managing and provisioning computer data centers through machine-readable definition files, rather
than physical hardware configuration or interactive configuration tools. The IT infrastructure managed by this comprises
both physical equipment such as bare-metal servers as well as virtual machines and associated configuration resources.
The definitions may be in a version control system. It can use either scripts or declarative definitions, rather than
manual processes, but the term is more often used to promote declarative approaches.

## Terraform

Terraform is an open-source infrastructure as code software tool created by HashiCorp. Users define and provide data
center infrastructure using a declarative configuration language known as HashiCorp Configuration Language (HCL), or
optionally JSON.

An example of terraform is the following:

```terraform
provider "aws" {
  region = "us-east-1"
}

[//]: # (aws_vpc is a resource, main is the name of the resource)
resource "aws_vpc" "myvpc" {
  cidr_block = "10.0.0.0/16"
}
```

the command to initialize terraform is `terraform init`, then using `terraform plan` we can see the changes that will be
applied,
the command to apply the configuration is `terraform apply` and to destroy the configuration is `terraform destroy`.

### Terraform state .tfstate

Terraform keeps track of the resources it creates in a file called `terraform.tfstate`.
This file is created when you run `terraform apply` and contains information about the resources Terraform created.
Terraform uses this file to know what resources it is managing. If you delete this file,
Terraform will not know what resources to delete and you will get an error the next time you run `terraform apply`.

If performing a `terraform destroy` the state file will be deleted automatically.

### Terraform state .tfstate.backup

When you run `terraform apply`, Terraform will create a backup of the state file called `terraform.tfstate.backup`. This
file is used to restore the state if the state file is lost or corrupted. It is also used to perform an incremental
update to the state when you run `terraform apply`. If you delete this file, Terraform will not be able to perform an
incremental update and will instead perform a full update. This will take longer and can cause downtime if you are
making changes to resources that cannot be updated in-place.

### Variables

Variables are used to store values that can be used in multiple places throughout your configuration.
You can create a folder called `variables` and create a file called `variables.tf` to store your variables.

```terraform
variable "aws_region" {
  type        = string
  description = "The AWS region to deploy to"
  default     = "us-east-1"
}

variable "ssh_port" {
    type        = number
    description = "The port SSH should listen on"
    default     = 22
    }
    
variable "enabled" {
    type        = "bool"
    description = "Whether to enable the resource"
    default     = true
    }

variable "cidr_blocks" {
    type        = list(string)
    description = "A list of CIDR blocks"
    default     = ["value1", "value2"] 
}

variable "tags" {
    type        = map
    description = "A map of tags to add to all resources"
    default     = {
        Name = "My VPC"
        }
    }
    
[//]: # (we can use multiple types in a tuple)
variable "cidr_block_tuple" {
    type        = tuple([string, number, string])
    description = "A tuple of CIDR blocks"
    default     = ["value1", 22, "value2"]
}

[//]: # (we can use multiple types in a object)
variable "cidr_block_object" {
    type        = object({
        name = string
        age  = number
        ports = list(number)
        })
    description = "An object of CIDR blocks"
    default     = {
        name = "value1"
        age  = 22
        ports = [22, 80]
        }
}
```

So the datatypes available are:

- string
- number
- bool
- list
- map
- tuple
- object

To use them into the configuration file we can use the following syntax:

```terraform
provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  cidr_block = var.cidr_block[0]
}

resource "aws_instance" "web" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  subnet_id     = var.subnet_id
  tags          = var.tags['Name']
}
```

We can also set terraform input variables using the following syntax:

```terraform
variable "aws_region_input" {
    type        = string
    description = "Set the AWS region"
}
```

then you need to go inside the folder `variables` and run a `terraform init` and `terraform apply` to set the variable.

#### Variable .tfvars

We can also create a file called `terraform.tfvars` to set the variables, the file will be loaded automatically by
terraform.

```terraform
aws_region_input = "us-east-1"
```

Then to let read terraform the file we need to run `terraform apply -var-file="terraform.tfvars"`.

#### Variable .tfvars.json

We can also create a file called `terraform.tfvars.json` to set the variables, the file will be loaded automatically by
terraform.

```terraform
{
    "aws_region_input": "us-east-1"
}
```

#### Variable ordering

Terraform loads variables in the following order, with later sources taking precedence over earlier ones:

- Environment variables
- The terraform.tfvars file, if present.
- The terraform.tfvars.json file, if present.
- Any *.auto.tfvars or *.auto.tfvars.json files, processed in lexical order of their filenames.

### Output

Outputs are a way to tell Terraform what data is important. This data is outputted when `terraform apply` is called, and
can be queried using the `terraform output` command.

```terraform
output "vpc_region" {
    value = aws_vpc.myvpc.region
}
```

The output will be displayed when you run `terraform apply` and can be queried using the `terraform output` command.

### Modules

Modules are a way to group resources together. They are used to create reusable components, improve organization, and to
treat pieces of infrastructure as a black box.
Modules can be used to create lightweight abstractions, so that you can describe your infrastructure in terms of its
architecture, rather than directly in terms of physical objects.

We can create a folder called `modules` and create another folder inside called ec2 and create a file called `main.tf`
with the following content:

```terraform
provider "aws" {
  region = var.aws_region
}

module "ec2" {
  source = "./ec2"
  for_each = toset(["dev", "prod"])
  instance_type = var.instance_type
  subnet_id = var.subnet_id
  tags = var.tags
}
```

the module will be called `ec2` and the source will be the folder `ec2` inside the folder `modules`, the `foreach` will
create two instances,
one for `dev` and one for `prod`, the `instance_type` will be the variable defined in the file `variables.tf` and
the `subnet_id` and `tags`
will be the variables defined in the file `variables.tf`.

To output the names in the modules from the main file we can use the following syntax:

```terraform
output "ec2_names" {
  value = [for ec2 in module.ec2 : ec2.name]
}
```

#### Remote modules

We can also use remote modules, for example we can use the following module:

```terraform
module "ec2" {
  source = "terraform-aws-modules/ec2-instance/aws"
  version = "2.0.0"
  name = "my-ec2"
  instance_count = 1
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id = "subnet-abcde012"
  vpc_security_group_ids = ["sg-edcd9784"]
  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}
```

#### Dynamic blocks

We can use dynamic blocks to create multiple blocks of the same type in a resource.

```terraform
variable "ingress_rules" {
  type = list(object({
    description = string
    from_port   = number
    to_port     = number
    protocol    = string
    cidr_blocks = list(string)
  }))
}

resource "aws_security_group" "websecurity" {
  name        = "websecurity"
  description = "Allow inbound traffic"

  [//]: # (  the dynamic block will create multiple ingress blocks from the variable ingress_rules)
  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      description = ingress.value["description"]
      from_port   = ingress.value["from_port"]
      to_port     = ingress.value["to_port"]
      protocol    = ingress.value["protocol"]
      cidr_blocks = ingress.value["cidr_blocks"]
    }
  }
}
``` 

### AWS resources

#### AWS ec2

We can create an ec2 instance using the following syntax:

```terraform
resource "aws_instance" "webec2" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  tags          = var.tags['Name']
}
```

#### AWS elastic ip

We can create an elastic ip using the following syntax:

```terraform
resource "aws_eip" "webip" {
  vpc = true
  instance = aws_instance.webec2.id
}

output "webip" {
  value = aws_eip.webip.public_ip
}
```

#### AWS security group

We can create a security group using the following syntax:

```terraform
resource "aws_security_group" "websecurity" {
  name        = "websecurity"
  description = "Allow inbound traffic"

  [//]: # (We have from port and to port, allowing for having a range of ports)
  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

and for the ec2 instance we can use the following syntax:

```terraform
resource "aws_instance" "webec2" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  tags          = var.tags['Name']
  
  [//]: # (We can use the security group id or the security group name)
  security_groups = [aws_security_group.websecurity.id]
}
```

### IAM resources

IAM users are entities that you create in AWS to represent the person or application that uses it to interact with AWS.

We an attach users and policies directly to a group, or we can use roles to assign permissions to a user, group, or
service.

```terraform
resource "aws_iam_user" "user" {
  name = "user"
}

resource "aws_iam_group" "group" {
  name = "group"
}

resource "aws_iam_role" "role" {
  name = "role"
}

resource "aws_iam_policy" "policy" {
  name        = "policy"
  description = "A test policy"

  [//]: # (We can use the following syntax to create a policy)
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "ec2:Describe*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_policy_attachment" "user-attach" {
  name       = "user-attach"
  users      = [aws_iam_user.user.name]
  policy_arn = aws_iam_policy.policy.arn
}
```

EOF stands for end of file.

### Terraform remote backend

We can use a remote backend to store the state file in a remote location, for example we can use AWS S3.

```terraform
terraform {
  backend "s3" {
    bucket = "terraform-state-bucket"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }
}
```

### Dependencies

Dependencies are used to tell Terraform that one resource depends on another resource. This is useful when you need to
We can use the following syntax to create dependencies between resources:

```terraform
resource "aws_instance" "webec2" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  tags          = var.tags['Name']

}

resource "aws_eip" "webip" {
  vpc = true
  instance = aws_instance.webec2.id
  
  [//]: # (We can use the following syntax to create dependencies between resources)
  [//]: # (It waits for the resource aws_eip.webip to be created before creating the resource aws_instance.webec2)
  depends_on = [aws_instance.webec2]
}

output "webip" {
  value = aws_eip.webip.public_ip
}
```

### Terraform count

We can use the count parameter to create multiple resources, for example we can use the following syntax:

```terraform
resource "aws_instance" "webec2" {
  count         = 2
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  tags          = var.tags['Name']
}

output "webip" {

[//]: # (We can use the following syntax to create multiple outputs)
  value = aws_instance.webec2.*.public_ip
}
```

if you want to create an auto scaling group you can use the following syntax:

```terraform
resource "aws_autoscaling_group" "webasg" {
  name                 = "webasg"
  max_size             = 2
  min_size             = 1
  desired_capacity     = 1
  health_check_type    = "EC2"
  health_check_grace_period = 300
  vpc_zone_identifier  = [aws_subnet.publicsubnet.id]
  launch_configuration = aws_launch_configuration.weblaunch.name
}
```

### Multiple variable files

If you use multiple environments you can use multiple variable files, for example you can use the following syntax:

```terraform
provider "aws" {
  region = var.aws_region
}

variable "nmbre_of_instances" {
  type        = number
  description = "The number of instances to create"
}
```

then you can create a `prod.tfvars` file with the following content:

```terraform
nmbre_of_instances = 2
```

and a `dev.tfvars` file with the following content:

```terraform
nmbre_of_instances = 1
```

then `terraform apply -var-file="prod.tfvars"` will create 2 instances and `terraform apply -var-file="dev.tfvars"`
will create 1 instance.

### Importing resources

We can import resources from aws and let them under terraform control, for example we can use the following syntax:

```terraform
terraform import aws_instance.webec2 i-1234567890abcdef0
```

So when deleting the resource terraform will delete the resource from aws. 
The main drawback of this approach is that terraform will not know the configuration of the resource so you
need to create the configuration file manually.

### Data sources

Data sources are used to fetch information that is external to Terraform, for example we can use the following syntax:

```terraform

[//]: # (We can use the following syntax to fetch the ami id)
data "aws_ami" "webami" {
  most_recent = true
  owners = ["amazon"]
  filter {
    name = "name"
    values = ["amzn2-ami-hvm-2.0.20210520.0-x86_64-gp2"]
  }
}

output "webami" {
  value = data.aws_ami.webami.id
}


resource "aws_instance" "webec2" {
  ami           = data.aws_ami.webami.id
  instance_type = "t2.micro"
  availability_zone = "us-east-1a"
  tags          = var.tags['Name']
}
```

### List commands

To debug terraform we can use the following commands:

- `terraform console` to run terraform commands
- `terraform fmt` to format the configuration file
- `terraform validate` to validate the configuration file
- `terraform plan` to see the changes that will be applied
- `terraform apply` to apply the changes
- `terraform destroy` to destroy the changes
- `terraform state list` to list the resources
- `terraform state show` to show the resources
- `terraform state pull` to pull the state file
- `terraform state push` to push the state file
- `terraform state rm` to remove a resource from the state file
- `terraform state mv` to move a resource from the state file
- `terraform state replace-provider` to replace a provider in the state file

