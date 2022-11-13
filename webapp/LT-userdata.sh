#!/bin/bash
yum update -y
yum install httpd.x86_64 -y
yum install git -y
yum install mysql -y
systemctl start httpd
systemctl enable httpd
cd /tmp
git clone https://github.com/zisyang/281proj2.git
cp -a /tmp/281proj2/webapp/web/* /var/www/html/
