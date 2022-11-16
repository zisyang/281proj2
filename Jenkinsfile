pipeline {

    agent any

    stages {
        stage('Ping') {
            steps {
                echo 'Checking Webservers status'
                sh '''#!/bin/bash
                    for i in $(sudo cat /home/ec2-user/web_host.txt)
                    do
                    if [ 1 -eq $(ping -c 2 $i | grep -c "2 rec") ]
                    then
                    echo $i OK
                    else
                    echo $i not found
                    fi
                    done
                '''
            }
        }
        stage('Update') {
            steps {
                echo 'Update Webservers'
                sh '''#!/bin/bash
                    cd /tmp/
                    if [ -d 281proj2 ]; then cd 281proj2; git pull; cd ..; 
                    else git clone https://github.com/zisyang/281proj2.git ; fi
                    for i in $(sudo cat /home/ec2-user/web_host.txt)
                    do
                    sudo scp -r -i /home/ec2-user/281proj.pem 281proj2/webapp/ ec2-user@$i:/home/ec2-user/
                    sudo ssh -i /home/ec2-user/281proj.pem ec2-user@$i sudo cp -av /home/ec2-user/webapp/web/* /var/www/html/
                    done
                '''
            }
        }
        stage('Check') {
            steps { 
                echo 'Checking files in Webservers'
                sh '''#!/bin/bash
                    for i in $(sudo cat /home/ec2-user/web_host.txt)
                    do
                    sudo ssh -i /home/ec2-user/281proj.pem ec2-user@$i sudo ls -l /home/ec2-user/webapp/ /var/www/html/
                    done
                '''
            }
        }
    }
}

