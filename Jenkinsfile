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
        stage('Deploy for production') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}
