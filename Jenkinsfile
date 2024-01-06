pipeline {
    agent any

    environment {
        // Define environment variables
        NODEJS_VERSION = '17'  // Change to the Node.js version used in your app
        DOCKER_IMAGE_NAME = 'your-docker-image-name'
        DOCKER_REGISTRY_URL = 'docker.io'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Use SSH key to authenticate with Git
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'git@github.com:marwen2025/StockBills.git']]])
                }
            }
        }

        /* stage('Unit Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        } */

        stage('Build Docker Image') {
            script {
                    // Build frontend Docker image
                    sh 'docker build -t frontend:latest ./frontend'

                    // Build backend Docker image
                    sh 'docker build -t backend:latest ./backend'
                }
        }

        stage('Integration Tests') {
            steps {
                echo 'Running integration tests...'
                // Add commands for integration tests
            }
        }

        /* stage('Push to Docker Registry') {
            steps {
                echo 'Pushing Docker image to registry...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY_URL}"
                }
                sh "docker push ${DOCKER_IMAGE_NAME}"
            }
        } */

        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                // Add cleanup steps
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
