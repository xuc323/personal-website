---
title: How to Deploy Nginx in a Docker Container on a Linux VM - A Step-by-Step Guide
description: Learn how to deploy Nginx in a Docker container on a Linux VM with this comprehensive step-by-step guide. From setting up Docker to configuring and running Nginx, this tutorial covers the essentials for web server deployment in a virtualized environment.
---

# How to Deploy Nginx in a Docker Container on Linux

Nginx is a highly efficient, lightweight, open-source web server that is widely used for serving web content. It can act as a reverse proxy, load balancer, and HTTP cache. Nginx excels in handling concurrent connections efficiently with its asynchronous, event-driven architecture.

Running Nginx in a Docker container offers several advantages. Docker provides environment isolation that can prevent conflicts with other applications or services on the host machine. This modular approach also makes managing and upgrading much easier by simply pulling a new version of the container image without impacting the rest of the system.

### Get a VM that Runs Docker

While Docker containers can run on any environment that have Docker installed, many cloud providers offer their own versions of Linux that are dedicated to run containerized applications. These operating systems are designed to run containers efficiently with minimal footprint and fewer unnecessary packages. The image below if one of the Linux distro provided by GCP when trying to create a Compute Engine instance. Generally any LTS version works. Here we will go with `Container-Optimized OS 113-18244.151.33 LTS` that comes with Docker `24.0.9`. Feel free to navigate to the rest of the settings and finish creating the VM instance.

![gcp-boot-disk-images.png](./img/gcp-boot-disk-images.png)

### Check if Docker is installed

Assuming you have a Linux machine with `docker` installed. Run the command below to check whether docker is installed and accessible by the currency user.

```bash
docker version
```

If the version info is being printed then docker is properly installed!

### Pull the latest nginx docker image

```bash
docker pull nginx:latest
```

### Run the nginx docker container and bind port 80 from the host machine

```bash
docker run -d -p 80:80 --name nginx nginx:latest
```

### Docker compose

```yaml
services:
  proxy:
    container_name: nginx
    image: "nginx:latest"
    restart: unless-stopped
```

Nginx is now running in a container and binded to port 80. Open the server ip address in the browser and a placeholder page should show up.

![nginx-placeholder-page.png](./img/nginx-placeholder-page.png)

\*[VM]: Google Cloud Platform
