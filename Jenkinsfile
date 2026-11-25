
pipeline {
    agent any

    stages {

        stage("Clean Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Git Checkout") {
            steps {
                git branch: 'main',
                    url: 'https://github.com/premkumarvarkala-ui/Nodejs-Mongodb-CRUD.git'
            }
        }

        stage("Node Version") {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }

        stage("Install Dependencies") {
            steps {
                sh 'npm ci'
            }
        }

        stage("Run Unit Tests") {
            steps {
                sh 'npm test'
            }
        }

        stage("Run Node Application") {
            steps {
                sh 'npm start'
            }
        }

        stage("Create Build Artifact") {
            steps {
                sh '''
                    mkdir -p dist

                    zip -r dist/nodejs-calculator.zip \
                        app.js \
                        calculator.js \
                        package.json \
                        package-lock.json
                '''
            }
        }

        stage("Verify Artifact") {
            steps {
                sh '''
                    ls -lh dist/
                    unzip -l dist/nodejs-calculator.zip
                '''
            }
        }
    }

    post {

        success {
            archiveArtifacts artifacts: 'dist/*.zip',
                             fingerprint: true

            echo 'Node.js CI pipeline completed successfully!'
            echo 'Artifact generated and archived!'
        }

        failure {
            echo 'Node.js CI pipeline failed!'
        }
    }
}
