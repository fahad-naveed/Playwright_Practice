
pipeline {

    agent any

    environment {
        BASE_URL = 'https://adactinhotelapp.com/'
        USERNAME = 'fahad123123'
        PASSWORD = 'fahad123123'
       
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-playwright',
                    url: 'https://github.com/fahad-naveed/Playwright_Practice.git'
            }
        }

        stage('Create .env File') {
            steps {
                bat '''
                    echo BASE_URL=%BASE_URL%> .env
                    echo USERNAME=%USERNAME%>> .env
                    echo PASSWORD=%PASSWORD%>> .env
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                    docker run --name %CONTAINER_NAME% %IMAGE_NAME% npx playwright test
                '''
            }
        }

    }

    post {

        always {
            bat '''
                docker cp %CONTAINER_NAME%:/app/playwright-report .\\playwright-report
                docker rm -f %CONTAINER_NAME%
            '''

            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }

        success {
            echo 'PLAYWRIGHT TESTS PASSED!'
        }

        failure {
            echo 'PLAYWRIGHT TESTS FAILED!'
        }
    }
}
