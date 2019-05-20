pipeline {
    agent {
        docker {
            image 'node:10.15.3'
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
