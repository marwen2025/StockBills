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

        stages {
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    // Build frontend Docker image
                    sh 'docker build -t frontend:latest ./frontend'
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    // Build backend Docker image
                    sh 'docker build -t backend:latest ./backend'
                }
            }
        }
        

        /* stage('Integration Tests') {
            steps {
                echo 'Running integration tests...'
                // Add commands for integration tests
            }
        } */

        stage('Push to Docker Registry') {
            steps {
                echo 'Pushing Docker images to registry...'
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerCreds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY_URL}"

                        // Push frontend Docker image
                        sh "docker push frontend:latest"

                        // Push backend Docker image
                        sh "docker push backend:latest"
                    }
                }
            }
        }
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
