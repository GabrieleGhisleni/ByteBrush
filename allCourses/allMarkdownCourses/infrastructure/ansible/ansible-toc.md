

<!-- toc -->

- [Ansible](#ansible)
  * [Introduction](#introduction)
    + [Installation](#installation)
    + [Configuration](#configuration)
    + [Running Ansible](#running-ansible)
  * [Inventory](#inventory)
    + [Inventory Parameters](#inventory-parameters)
  * [Playbooks](#playbooks)
    + [Playbook variables](#playbook-variables)
    + [Playbook keywords](#playbook-keywords)
    + [Playbook handlers](#playbook-handlers)
  * [Facts](#facts)
  * [Examples](#examples)
    + [Ansible with AWS](#ansible-with-aws)

<!-- tocstop -->

# Ansible
## Introduction
Ansible is an open-source software provisioning, configuration management, and application-deployment tool. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows. It includes its own declarative language to describe system configuration.

The main purpose of Ansible is to automate repetitive tasks such as system configuration, software deployment, and general system management tasks. It solves the problem of manually configuring servers one by one, which can be time-consuming and error-prone. With Ansible, you can manage your infrastructure as code, which increases efficiency, reduces potential errors, and makes your infrastructure scalable and easily replicable.

Core components of Ansible

1. Playbooks: Playbooks are the heart of Ansible. They are written in YAML and describe the desired state of the system. Playbooks can include one or more plays, which define the tasks to be run on each target host. They are easy to read and write, making them ideal for version control and sharing.

2. Inventory: The inventory is a list of nodes or hosts where tasks should be run. It can be a simple text file with a list of hostnames or IP addresses, or it can be a more complex setup with groups of hosts defined in an INI or YAML format.

3. Modules: Ansible uses modules to accomplish most of its Tasks. Modules are like small scripts that Ansible dispatches to the remote hosts to execute. There are hundreds of modules available in Ansible, each serving a specific purpose like managing system resources, files, databases, etc.

4. Facts: Facts are pieces of information Ansible can gather about the system it's managing. This can include things like network interfaces, operating system, IP addresses, etc. Facts are used to implement conditional execution of tasks and to get system-specific information.

5. Roles: Roles provide a framework for fully independent, or interdependent collections of variables, tasks, files, templates, and modules. They are a way to group related tasks together into a single unit of work, which can be reused and shared.

6. Handlers: Handlers are special tasks that only run when notified by another task. They are used to manage services and perform tasks that need to happen as a result of a change.

7. Templates: Templates are simple text files that can contain variables. Ansible uses the Jinja2 templating engine to process templates and generate the final file. They are used to create configuration files that vary based on the target system.

These core components work together to provide a powerful, flexible, and easy-to-use automation tool. With Ansible, you can manage your infrastructure with code, making it more reliable, repeatable, and efficient.

### Installation
Before we start, please ensure that you have sudo privileges on the Ubuntu 22 system where you want to install Ansible.

1. Update the system's package index to ensure that the latest software is available for installation. Open a terminal and run the following command:

```bash
sudo apt update
```

2. Install the software-properties-common package. This package provides the `add-apt-repository` command which is used to add a new repository:

```bash
sudo apt install software-properties-common
```

3. Add the Ansible PPA (Personal Package Archive) to your system's list of sources:

```bash
sudo add-apt-repository --yes --update ppa:ansible/ansible
```

4. Now, you can install Ansible:

```bash
sudo apt install ansible
```

5. Verify the installation by displaying the Ansible version:

```bash
ansible --version
```
### Configuration
1. Ansible uses a configuration file called ansible.cfg. By default, it's located in /etc/ansible/ansible.cfg. You can modify this file according to your needs.

2. Ansible uses an inventory file to track which hosts it should manage. By default, this file is located at /etc/ansible/hosts. You can add the IP addresses or hostnames of your servers in this file.

### Running Ansible

1. To run a simple command on all your managed hosts, you can use the ansible command followed by the group name (defined in your inventory file), -m for module name, and -a for arguments. For example, to check the uptime of all servers in the group 'webservers', you would run:

```bash
ansible webservers -m command -a uptime
```

2. To run a playbook, use the ansible-playbook command followed by the path to your playbook file. For example:

```bash
ansible-playbook /path/to/your/playbook.yml
```

Remember, Ansible commands are typically run as the same user that installed Ansible, or they can be run as a superuser using sudo.

Please let me know if you have any further questions or if there's anything else you'd like to learn.

## Inventory

The inventory is a configuration file where you define the host information. Ansible needs to know about the machines that it manages so it can connect to them and manage configurations or deployment. This list of machines is known as the 'Ansible Inventory'.

The inventory file can be in one of many formats, depending on what you want to do with it and what kind of data you need to work with. The most common formats are INI and YAML.

Here's an example of a simple INI-style inventory file:

```ini
[webservers]
webserver1.example.com
webserver2.example.com

[dbservers]
dbserver1.example.com
```

In this example, we have two groups: 'webservers' and 'dbservers'. Each group has one or more hosts. You can run Ansible commands or playbooks on a specific group of servers by specifying the group name.

You can also specify variables that apply to a particular group or host. For example:

```ini
[webservers]
webserver1.example.com http_port=80 maxRequestsPerChild=808
webserver2.example.com http_port=80 maxRequestsPerChild=909

[dbservers]
dbserver1.example.com
```

In this example, the variables 'http_port' and 'maxRequestsPerChild' are defined for each host in the 'webservers' group. These variables can be used in your playbooks to customize the configuration of each host.

Ansible also supports dynamic inventories, which are useful when you have a large, dynamic environment with constantly changing hosts. Instead of manually maintaining a static inventory file, you can use a script or a cloud-based service to dynamically generate an inventory.

One useful feature of Ansible inventory is the ability to use aliases. If you have long or complex hostnames, you can simplify them with an alias. For example:

```ini
[webservers]
web1 ansible_host=webserver1.example.com
web2 ansible_host=webserver2.example.com
```

In this example, 'web1' and 'web2' are aliases for the actual hostnames. When you run Ansible commands or playbooks, you can use these aliases instead of the full hostnames.

### Inventory Parameters
The inventory file in Ansible can contain several parameters that define the characteristics of the hosts. Here are some of the most common parameters:

1. `ansible_host`: The name of the host as it will be used in Ansible. This can be a hostname, an IP address, or an alias.

2. `ansible_port`: The SSH port number, if it's different from the default (which is 22).

3. `ansible_user`: The username Ansible should use for the SSH connection.

4. `ansible_ssh_pass`: The SSH password to use (although it's more secure to use SSH keys).

5. `ansible_sudo_pass`: The sudo password, if required.

6. `ansible_connection`: Connection type to the host. This can be 'ssh', 'local', 'docker', etc.

7. `ansible_python_interpreter`: The location of the Python interpreter on the remote host.

Here's an example of how these parameters can be used in an inventory file:

```ini
[webservers]
web1 ansible_host=192.168.1.10 ansible_port=2222 ansible_user=admin
web2 ansible_host=192.168.1.11 ansible_port=2222 ansible_user=admin
```

By default, Ansible looks for the inventory file at `/etc/ansible/hosts`, but you can store it in any location and specify that location when running Ansible commands using the `-i` option. For example:

```sh
ansible-playbook -i /path/to/your/inventory playbook.yml
```

You can also specify the inventory file in an Ansible configuration file (`ansible.cfg`), which can be located in `/etc/ansible/ansible.cfg`, `~/.ansible.cfg`, or alongside the playbook.

In the `ansible.cfg` file, you would specify the inventory file location like this:

```ini
[defaults]
inventory = /path/to/your/inventory
```


## Playbooks

Playbooks are Ansible’s configuration, deployment, and orchestration language. They can describe a policy you want your remote systems to enforce, or a set of steps in a general IT process. Playbooks are designed to be human-readable and are developed in an easy to understand, high-level language.

Playbooks are expressed in YAML format (with .yml file extension) and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process.

Each playbook is composed of one or more 'plays' in a list. The goal of a play is to map a group of hosts to some well-defined roles, represented by tasks.

Here is a simple example of a playbook:

```yaml
---
- hosts: webservers
  tasks:
    - name: ensure apache is at the latest version
      yum:
        name: httpd
        state: latest
    - name: write the apache config file
      template:
        src: /srv/httpd.j2
        dest: /etc/httpd.conf
```

In this example, the playbook is targeting hosts in the 'webservers' group. It has two tasks. The first task is using the 'yum' module to ensure the latest version of Apache (httpd) is installed. The second task is using the 'template' module to copy the Apache configuration file from the source to the destination.

Sure, let's break down each of the key concepts mentioned with examples.

1. Idempotency: 
   This means that you can run the same playbook multiple times without causing any problems. For example, if you have a task that installs a package, it will only install the package if it's not already installed. If the package is already installed, the task will do nothing.

```yaml
- name: ensure nginx is installed
  apt:
    name: nginx
    state: present
```
In this example, if nginx is already installed, Ansible will not attempt to install it again.

2. Handlers: 
   Handlers are special tasks that only run when notified by another task. For example, you might have a task that updates a configuration file and a handler that restarts the service if the configuration file changes.

```yaml
- name: Update nginx configuration
  template:
    src: /path/to/nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: Restart nginx

handlers:
  - name: Restart nginx
    service:
      name: nginx
      state: restarted
```
In this example, the "Restart nginx" handler will only run if the "Update nginx configuration" task makes a change.

3. Variables: 
   Variables can be used to customize tasks. For example, you might have a variable for the package name you want to install.

```yaml
- hosts: webservers
  vars:
    package_name: nginx
  tasks:
    - name: ensure package is installed
      apt:
        name: "{{ package_name }}"
        state: present
```
In this example, the package name is defined as a variable and used in the task.

4. Conditionals: 
   Conditionals can be used to control whether a task runs or not. For example, you might only want to update a package if it's already installed.

```yaml
- name: Update nginx, but only if it's already installed
  apt:
    name: nginx
    state: latest
  when: "'nginx' in ansible_facts.packages"
```
In this example, the task will only run if nginx is already installed.

5. Error Handling: 
   You can control how Ansible handles errors. For example, you might want to ignore errors for a certain task.

```yaml
- name: This might fail, but that's okay
  command: /usr/bin/somecommand
  ignore_errors: yes
```
In this example, Ansible will not stop the playbook if this task fails.

6. Roles: 
   Roles are a way to group related tasks together. For example, you might have a role for setting up a web server.

```yaml
- hosts: webservers
  roles:
     - role: nginx
```
In this example, the nginx role might include tasks for installing nginx, updating the configuration, and starting the service.

### Playbook variables

Variables in Ansible are very similar to variables in any programming language. They are used to manipulate or decide the execution path of the playbook. Variables can be defined in a variety of places and have different priorities. They can be included in the inventory file, in the playbook, in reusable files or loaded from external files.

Here are some ways to define variables in Ansible:

1. Directly in the playbook:

```yaml
- hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  remote_user: root
  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
```

In this example, `http_port` and `max_clients` are variables.

2. In the inventory file:

```ini
[webservers]
www1.example.com http_port=80 max_clients=200
```

3. In a separate variables file:

```yaml
---
http_port: 80
max_clients: 200
```

You can include this file in your playbook like this:

```yaml
- hosts: webservers
  vars_files:
    - vars.yml
  remote_user: root
  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
```

Variables can also be used in tasks:

```yaml
- hosts: webservers
  vars:
    http_port: 80
  tasks:
  - name: insert the port into the configuration file
    lineinfile:
      path: /etc/httpd/conf/httpd.conf
      line: 'Listen {{ http_port }}'
```

In this example, the `http_port` variable is used to set the port in the Apache configuration file.

Variables can be very useful in playbooks. They allow you to customize the behavior of your tasks based on the specific needs of your hosts. They also make your playbooks more reusable, as you can use the same playbook with different variables to manage different hosts or environments.

### Playbook keywords

Ansible Playbooks are written in YAML and they use a number of keywords. Here are some of the most commonly used keywords:

1. `hosts`: This keyword is used to specify the target hosts where the tasks should be run. It can be a single host, a group of hosts, or all hosts.

2. `vars`: This keyword is used to define variables directly in the playbook.

3. `vars_files`: This keyword is used to load variables from external files.

4. `tasks`: This keyword is used to define a list of tasks. Each task is a call to an Ansible module.

5. `name`: This keyword is used to give a descriptive name to a task. This name is shown when the playbook is run.

6. `become`: This keyword is used to specify that a task should be run as a different user. It's equivalent to using sudo in Unix-like systems.

7. `handlers`: This keyword is used to define tasks that should only be run when notified by another task.

8. `roles`: This keyword is used to include a set of tasks, handlers, and variables that are defined in a separate directory structure.

9. `include`: This keyword is used to include tasks from another file.

10. `gather_facts`: This keyword is used to specify whether Ansible should gather facts about the target hosts. If set to no, facts will not be gathered.

Here's an example of a playbook that uses some of these keywords:

```yaml
---
- hosts: webservers
  become: yes
  vars:
    http_port: 80
  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
  - name: start apache
    service:
      name: httpd
      state: started
  handlers:
  - name: restart apache
    service:
      name: httpd
      state: restarted
```

In this playbook, the `hosts` keyword is used to specify that the tasks should be run on the webservers group of hosts. The `become` keyword is used to run the tasks as the root user. The `vars` keyword is used to define a variable. The `tasks` keyword is used to define two tasks, and the `handlers` keyword is used to define a handler that restarts Apache.

### Playbook handlers

Handlers in Ansible are just like regular tasks in an Ansible playbook, but they are only run if the task contains a `notify` directive and also indicates that it changed something.

For example, if a configuration file is changed, the task referencing the configuration file will notify the handler to restart the service, but if the configuration file is not changed, then the handler will not be triggered.

Here's an example:

```yaml
tasks:
  - name: install apache
    yum:
      name: httpd
      state: present
    notify: restart apache

handlers:
  - name: restart apache
    service:
      name: httpd
      state: restarted
```

In this example, the "install apache" task will notify the "restart apache" handler if a change is made (i.e., if Apache is installed). The "restart apache" handler will then restart the Apache service.

It's important to note that handlers are run once, after all of the tasks have been executed. This means that even if a handler is notified multiple times, it will only be run once. Also, handlers are run in the order they are defined, not in the order they are notified.

## Facts

Facts in Ansible are essentially information derived from speaking with your remote systems. When Ansible runs, it will gather facts about the remote systems and store them in variables that you can then use in your playbooks. These facts include things like the operating system, network interfaces, IP addresses, hostname, and many more.

Facts are gathered by a special module called the setup module. This module is automatically called by Ansible before executing tasks in a playbook, but you can also call it manually to see what facts it gathers.

For example, to gather facts about a remote system, you can run the following command:

```bash
ansible -m setup hostname
```

Replace "hostname" with the name or IP address of your remote system. This will return a large JSON object with all the facts gathered from the system.

You can also filter the facts to only gather specific information. For example, to only get the operating system's distribution, you can run:

```bash
ansible -m setup hostname -a 'filter=ansible_distribution'
```

In a playbook, you can use facts with the `{{ ansible_facts['fact_name'] }}` syntax. For example, to create a file with the hostname of the system, you could use a task like this:

```yaml
- name: Create a file with the hostname
  copy:
    content: "Hostname: {{ ansible_facts['hostname'] }}"
    dest: "/etc/hostname_info"
```

This task uses the `copy` module to create a file at `/etc/hostname_info`. The content of the file is a string that includes the hostname fact.

Facts are incredibly useful because they allow you to tailor the behavior of your playbooks based on the specific characteristics of the system they are managing. This makes your playbooks more flexible and adaptable to different environments.

## Examples

Sure, let's create a simple Ansible playbook that installs and starts the Apache web server on a target host. We'll use variables, tasks, and handlers in this playbook.

First, let's define the folder structure:

```
/my_ansible_project/
|-- inventory.ini
|-- playbook.yml
```

Here, `my_ansible_project` is the root directory of our project. `inventory.ini` is the inventory file where we list our target hosts. `playbook.yml` is the playbook file where we define our tasks.

Let's start with the `inventory.ini` file:

```ini
[webservers]
192.168.1.10
```

In this file, we define a group called `webservers` and add the IP address of our target host to this group.

Now, let's create our `playbook.yml`:

```yaml
---
- name: Install and start Apache
  hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  tasks:
    - name: Ensure Apache is installed
      yum:
        name: httpd
        state: present
      become: yes

    - name: Ensure Apache is running
      service:
        name: httpd
        state: started
        enabled: yes
      become: yes
      notify: 
        - Restart Apache

  handlers:
    - name: Restart Apache
      service:
        name: httpd
        state: restarted
      become: yes
...
```

In this playbook:

- We specify `hosts: webservers` to tell Ansible to run this playbook on the hosts in the `webservers` group from our inventory file.
- Under `vars`, we define two variables: `http_port` and `max_clients`. These could be used in tasks or templates.
- We have two tasks: one to ensure Apache is installed (`yum` module with `state: present`) and one to ensure it's running (`service` module with `state: started` and `enabled: yes`). We use `become: yes` to run these tasks with sudo privileges.
- We define a handler called `Restart Apache` that restarts the Apache service. This handler will only run if a task notifies it. In this case, the "Ensure Apache is running" task will notify this handler if it makes a change (i.e., if it has to start the Apache service because it wasn't running).

To run this playbook, you would use the following command:

```bash
ansible-playbook -i inventory.ini playbook.yml
```

This command tells Ansible to run the `playbook.yml` playbook using the hosts defined in the `inventory.ini` file.

### Ansible with AWS

If your machine is on AWS and does not have a static IP, you can use Ansible's dynamic inventory feature. Dynamic inventory is an ansible feature that allows you to use a dynamic source for your inventory, such as an AWS EC2 instance.

Ansible comes with several dynamic inventory scripts, including one for AWS EC2. These scripts are typically Python scripts that retrieve inventory information from cloud providers and return it in a JSON format that Ansible can understand.

To use dynamic inventory with AWS EC2, you would need to:

1. Install the `boto` library, which is a Python interface to Amazon Web Services.

```bash
pip install boto
```

2. Set up your AWS credentials either by setting the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables, or by creating an AWS credentials file.

3. Use the `ec2.py` dynamic inventory script that comes with Ansible. You can specify this script instead of a static inventory file when running your playbook:

```bash
ansible-playbook -i ec2.py playbook.yml
```

In this command, `-i ec2.py` tells Ansible to use the `ec2.py` script to get the inventory.

The `ec2.py` script will retrieve all your EC2 instances from AWS and group them based on various attributes such as instance ID, region, availability zone, and any tags you've defined. You can then use these groups in your playbook's `hosts` directive.

For example, if you have an EC2 instance with a tag `role=webserver`, you could target this instance in your playbook like this:

```yaml
---
- name: Install and start Apache
  hosts: tag_role_webserver
  ...
```

This would run the playbook on all EC2 instances with a `role=webserver` tag.
