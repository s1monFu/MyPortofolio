pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                echo 'Initializing...'
            }
        }

        stage('Killing'){
            steps{
                echo 'Killing...'
                sh 'sudo fuser -n tcp -k 9001 || true'
            }
        }

        stage('Copy'){
            steps{
                echo 'Copying...'
                sh 'sudo rm -rf /home/ubuntu/MyPortofolio'
                sh 'sudo cp -r /var/lib/jenkins/workspace/MyPortofolio /home/ubuntu/MyPortofolio'
            }
        }

        stage('Build'){
            steps{
                echo 'Building...'
                dir('/home/ubuntu/MyPortofolio'){
                    sh 'sudo npm install'
                    sh 'sudo npm run build'
                    sh 'JENKINS_NODE_COOKIE=dontKillMe nohup serve -s build -l 9001 &'
                }
            }
        }



    }
}
