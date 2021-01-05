pipeline{
    agent {
        docker{
            image 'node:8.16.0-alpine'
        }
    }

    stages{
        stage('build'){
            when{
                branch 'master'
                // changeset "**"
            }
            steps{
                echo 'Step build'
                sh 'npm install'
            }
        }
         stage('test'){
            steps{
                echo 'Step test'
            }
        }
         stage('package'){
            steps{
                echo 'Step package'
            }
        }
    }

    post{
        always{
            echo 'This is pipeline run is completed '
        }
    }

}