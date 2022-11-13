pipeline {

    agent any

    stages {
        stage('Ping') {
            steps {
                echo 'Checking Webservers status'
                sh 'sudo /home/ec2-user/pingweb.sh'
            }
        }
        stage('Update') {
            steps {
                echo 'Update Webservers'
                sh 'sudo /home/ec2-user/putec2web.sh'
            }
        }
        stage('Check') {
            steps { 
                echo 'Checking files in Webservers'
                sh ' sudo /home/ec2-user/checkweb.sh' 
            }
        }
    }
}

