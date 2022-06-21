#!grppvy

pipeline {

    agent any
    options {
        disableConcurrentBuilds()
        timeout(time: 5, unit: 'MINUTES')
    }
    environment {
        NODE_ENV="production"
    }

    stages{
        stage("SETUP"){
            steps{
                script{
                    COMMIT_HASH = sh(script:"git rev-parse --short HEAD", returnStdout: true).trim()
                    COMMIT_HASH_PREV_2 = sh(script:" git rev-parse --short HEAD-2", returnStdout:true).trim()              
                }
            }
        }

        stage("BUILD"){
		steps{
                script{
                   sh "docker build -t dockeruser/projectname:$COMMIT_HASH ."         
                }
            }
        }
        }
            
    }
}
    
    
