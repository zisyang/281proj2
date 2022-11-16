#!/bin/bash
yum update -y
yum install git -y
yum install mysql -y
#recipes backend api 
yum install docker -y
systemctl start docker.service
systemctl enable docker.service
docker pull jackmleitch/whatscooking:api
#to run the api
docker run --net=host -p 5000:5000 -d jackmleitch/whatscooking:api
