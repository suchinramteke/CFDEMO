pipeline{
    agent none
   

    stages{
        stage('build'){
             agent {
                docker{
                    image 'node:8.16.0-alpine'
                }
        }
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
              agent {
                docker{
                    image 'node:8.16.0-alpine'
                }
}
            steps{
                echo 'Step test'
            }
        }
         stage('package'){
              agent {
        docker{
            image 'node:8.16.0-alpine'
        }
    }
            steps{
                echo 'Step package'
            }
        }
         stage('docker-package'){
             agent any
            steps{
                echo 'Preparing docker image file'
                script{
                   docker.withRegistry('https://index.docker.io/v1', 'dockerlogin') {
                       def workerImage = docker.build("suchin/worker:v${env.BUILD_ID}","./")
                       workerImage.push()
                       workerImage.push("${env.BRANCH_NAME}")
                   }
                }
            }
        }
    }

    post{
        always{
            echo 'This is pipeline run is completed '
        }
    }

}