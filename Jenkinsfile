pipeline {

    agent any

    stages {
        stage('Ping') {
            steps {
                echo 'Checking Webservers status'
                sh '/tmp/pingweb.sh'
            }
        }
        stage('Update') {
            steps {
                echo 'Update Webservers'
                sh '/tmp/putec2web.sh'
            }
        }
        stage('Check') {
            steps { 
                echo 'Checking files in Webservers'
                sh ' /tmp/checkweb.sh' 
            }
        }
    }
}

