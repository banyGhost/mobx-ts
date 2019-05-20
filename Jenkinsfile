pipeline {
    agent {
        docker {
            image 'node:10.15.3'
            args '-p 3002:3000 -p 5000:5000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('deploy for development') {
            steps {
                sh 'chmod -R 777 ./jenkins/script'
                sh './jenkins/script/dev.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
