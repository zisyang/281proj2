#!/bin/bash
yum update -y
yum install git -y
yum install mysql -y
#recipes backend api 
yum install docker -y
systemctl start docker.service
systemctl enable docker.service
docker pull jackmleitch/whatscooking:api
docker run --net=host -p 5000:5000 -d jackmleitch/whatscooking:api
#web frontend
yum install httpd.x86_64 -y
systemctl start httpd
systemctl enable httpd
cd /tmp
git clone https://github.com/zisyang/281proj2.git
cp -a /tmp/281proj2/webapp/web/* /var/www/html/


