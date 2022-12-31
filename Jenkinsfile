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
                sh 'fuser -k -n tcp 9001 || true'
            }
        }

        stage('Copy'){
            steps{
                echo 'Copying...'
                sh 'rm -rf /home/ubuntu/MyPortofolio'
                sh 'cp -r /var/lib/jenkins/workspace/MyPortofolio /home/ubuntu/MyPortofolio'
            }
        }

        stage('Build'){
            steps{
                echo 'Building...'
                dir('/home/ubuntu/MyPortofolio'){
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'nohup serve -s build -l 9001 &'
                }
            }
        }



    }
}
