pipeline {
    agent any

    environment {
        // Define environment variables
        NODEJS_VERSION = '17'  // Change to the Node.js version used in your app
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
            steps {
                script {
                    // Build frontend Docker image
                    sh 'docker build -t viconee/frontend:latest ./frontend'

                    // Build backend Docker image
                    sh 'docker build -t viconee/backend:latest ./backend'
                }
            }
        }

        stage('Integration Tests') {
            steps {
                echo 'Running integration tests...'
                // Add commands for integration tests
            }
        }

        stage('Push to Docker Registry') {
            steps {
                echo 'Pushing Docker images to registry...'
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerCred', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY_URL}"

                        // Push frontend Docker image
                        sh "docker push viconee/frontend:latest"

                        // Push backend Docker image
                        sh "docker push viconee/backend:latest"
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Apply Kubernetes manifests
                    sh 'kubectl apply -f frontend-deployment.yaml '
                    sh 'kubectl apply -f backend-deployment.yaml '
                }
            }       
        }


        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                // Add cleanup steps
                sh 'docker logout'
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
