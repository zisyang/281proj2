# Project #2-zisyang
- University Name: [San Jose State University](http://www.sjsu.edu/)
- Course: [CMPE 281 - Cloud Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html)
- Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)
- Student: [Zi Shun Yang](https://www.linkedin.com/in/zi-s-yang-1b764560/)


## Project Introduction
The question is: Given a picture of food, what else can you cook using the same ingredients? Which means that, what recipes can you make with the food from your kitchen? So, the idea of the project is that let user upload a picture of the food, then using AWS Rekongition to find out what the ingredients contain in the picture, then parse them to the ML model API to find recommanded recipes for the users.


## Features
- Users Login
- Admin Login
- Users upload image files, (max size 10 MB per file)
- Users/Admin can browse through already uploaded list of files
- Users/Admin can download uploaded file
- Users can uploaded new version of file
- Users/Admin can delete already uploaded file
- Users can select the uploaded image file for recipes recommandation
- Users can see a list of top 5 recommanded recipes
- Users can see a list of the ingredients for each recipe
- Users can click the link to external site for recipe detail 


## Sample Demo Screenshots
![](screenshots/Screen%20Shot%202022-10-13%20at%203.07.52%20PM.png)



## Pre-requisites Set Up

### AWS Services:
- Cognito
- VPC
- EC2
- AutoScaling Group
- ELB
- Single AZ RDS
- Lambda
- API Gateway
- IAM
- S3
- CloudFront
- Route 53 (Optional)
- CloudWatch
- AWS S3 presigned URLs with SAM
- AWS SDK
  
### Required Tools Locally
- AWS CLI
- AWS SAM CLI
- NodeJS


To setup the backend :
```
#recipes backend api 
cd webapp/backendapi/
yum install docker -y
systemctl start docker.service
systemctl enable docker.service
## Thanks to the jackmleitch's API
docker pull jackmleitch/whatscooking:api 
```
To setup Frontend :
```
#web frontend
yum install httpd.x86_64 -y
systemctl start httpd
systemctl enable httpd
cd /tmp
git clone https://github.com/zisyang/281proj2.git
cp -a /tmp/281proj2/webapp/web/* /var/www/html/
```

### How to set up and run project locally?

Run backend (Linux):
```
#recipes backend api 
cd webapp/backendapi/
yum install docker -y
systemctl start docker.service
systemctl enable docker.service
## Thanks to the jackmleitch's API
docker pull jackmleitch/whatscooking:api 
docker run --net=host -p 5000:5000 -d jackmleitch/whatscooking:api
```

Run frontend (Linux):
```
#web frontend
yum install httpd.x86_64 -y
systemctl start httpd
systemctl enable httpd
cd /tmp
git clone https://github.com/zisyang/281proj2.git
cp -a /tmp/281proj2/webapp/web/* /var/www/html/
```
