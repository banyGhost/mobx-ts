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
                sh 'yarn start'
            }
        }
    }
}
