#!/bin/bash
set -x
cd $(dirname $0)
SHOME=$(pwd)
for i in $(cat $SHOME/web_host.txt)
do
ssh -i $SHOME/281proj.pem ec2-user@$i sudo ls -l /home/ec2-user/webapp/ /var/www/html/
done