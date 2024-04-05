# portfolio-project-django-aws-beanstalk

# Elastic Beanstalk CLI Installer
- [1. Overview](#1-overview)
  - [1.1. Prerequisites](#11-prerequisites)
- [2. Quick start](#2-quick-start)
  - [2.1. Clone this repository](#21-clone-this-repository)
  - [2.2. Install/Upgrade the EB CLI](#22-installupgrade-the-eb-cli)
    - [MacOS/Linux](#macoslinux)
    - [Windows](#windows)
  - [2.3. After installation](#23-after-installation)
- [3. Usage](#3-usage)
  - [3.1 Advanced usage](#31-advanced-usage)
- [4. Environment Configurations](#4-environment-configurations)
  - [4.1 Create and Activate Environment](#41-create-and-activate-environment)
- [5. Install Requirements](#5-install-requirements)
- [6. AWS Configurations](#6-aws-configurations)
- [7. Deploying with EB CLI](#6-deploying-with-eb-cli)

## 1. Overview

This repository hosts scripts to generate self-contained installations of the [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html).

### 1.1. Prerequisites

You will need to have the following prerequisites installed before running the install script.

* **Git**
  * If not already installed you can download git from the [Git downloads page](https://git-scm.com/downloads).
* **Python**
  * We recommend that you install Python using the [pyenv](https://github.com/pyenv/pyenv) Python version manager. Alternately, you can download Python from the [Python downloads page](https://www.python.org/downloads/).
* **virtualenv**
  * Follow the [virtualenv documentation](https://virtualenv.pypa.io/en/latest/installation.html) to install virtualenv.

## 2. Quick start

### 2.1. Clone this repository

Use the following:

```
git clone https://github.com/ahmetdzdrr/portfolio-project-django-aws-beanstalk.git
```

### 2.2. Install/Upgrade the EB CLI

#### MacOS/Linux
On **Bash** or **Zsh**:

```
python ./portfolio-project-django-aws-beanstalk/scripts/ebcli_installer.py
```

#### Windows
In **PowerShell** or in a **Command Prompt** window:

```
python .\portfolio-project-django-aws-beanstalk\scripts\ebcli_installer.py
```

### 2.3. After installation

On Linux and macOS, the output contains instructions to add the EB CLI (and Python) executable file to the shell's `$PATH` variable, if it isn't already in it.

## 3. Usage

The `ebcli_installer.py` Python script will install the [awsebcli](https://pypi.org/project/awsebcli/) package in a virtual environment to prevent potential conflicts with other Python packages.

For most use cases you can execute the `ebcli_installer.py` script with no arguments.

```
python ./portfolio-project-django-aws-beanstalk/scripts/ebcli_installer.py
```

### 3.1 Advanced usage

  - To install a **specific version** of the EB CLI:

    ```shell
    python scripts/ebcli_installer.py --version 3.14.13
    ```

  - To install the EB CLI with a specific **version of Python** (the Python version doesn't need to be in `$PATH`):

    ```shell
    python scripts/ebcli_installer.py --python-installation /path/to/some/python/on/your/computer
    ```

  - To install the EB CLI **from source** (Git repository, .tar file, .zip file):
    ```shell
    python scripts/ebcli_installer.py --ebcli-source /path/to/awsebcli.zip

    python scripts/ebcli_installer.py --ebcli-source /path/to/EBCLI/codebase/on/your/computer
    ```

## 4. Environment Configurations

Create a virtual environment with virtualenv and use it to install Django and its dependencies. By using a virtual environment, you can know exactly which packages your application needs, so that the required packages are installed on the Amazon EC2 instances that are running your application.

The following steps demonstrate the commands you must enter for Unix-based systems and Windows, shown on separate tabs.

### 4.1 Create and Actviate Environment

1. Create a virtual environment named *eb-virt*

```
virtualenv %HOMEPATH%\eb-virt
```

2. Activate the virtual environment.

```
C:\>%HOMEPATH%\eb-virt\Scripts\activate
```

## 5. Install Requirements

You have to install some dependencies to build and manage the project. You'll see *requirements.txt*. To install this file:

```
(eb-virt)~$ pip install -r requirements.txt
```

## 6. AWS Configurations


## 7. Deploying with EB CLI

You've added everything you need to deploy your application on Elastic Beanstalk. Your project directory should now look like this.

```
~/ebdjango/
|-- .ebextensions
|   `-- django.config
|-- ebdjango
|   |-- __init__.py
|   |-- settings.py
|   |-- urls.py
|   `-- wsgi.py
|-- db.sqlite3
|-- manage.py
`-- requirements.txt
```

Next, you'll create your application environment and deploy your configured application with Elastic Beanstalk.

1. Initialize your EB CLI repository with the eb init command. **Make sure into endjango folder.**

```
~/ebdjango$ eb init
```