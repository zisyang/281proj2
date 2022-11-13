#!/bin/bash
set -x
cd $(dirname $0)
SHOME=$(pwd)
if [ -d 281proj2 ]; then rm -rf 281proj2; fi
git clone https://github.com/zisyang/281proj2.git
#cd 281proj2
for i in $(cat $SHOME/web_host.txt)
do
scp -r -i $SHOME/281proj.pem 281proj2/webapp/ ec2-user@$i:/home/ec2-user/
ssh -i $SHOME/281proj.pem ec2-user@$i sudo cp -a /home/ec2-user/webapp/web/* /var/www/html/
done

