pipeline {
  agent any
  environment {
    REGISTRY = 'ghcr.io/wiktor-nowak/wiktor-nowak.online'
    IMAGE_TAG = "${env.BUILD_ID}"
    SSH_CRED = 'vps-ssh'
    SSH_HOST = 'debian@57.128.197.21'
    DEPLOY_PORT = 3000
    APP_NAME = 'wiktor-nowak.online'
  }
  stages {

    stage('Check Tools') {
    steps {
        sh 'which docker && docker --version'
        sh 'which docker-compose || echo "docker-compose not installed"'
    }
    }

    stage('Checkout & Build') {
      steps {
        checkout scm
        withCredentials([
          file(credentialsId: 'wn-personal-website-env', variable: 'ENV_FILE'),
          file(credentialsId: 'wn-personal-website-next-env', variable: 'NEXT_ENV_FILE')
        ]) {
          sh """
          cp \$ENV_FILE .env
          cp \$NEXT_ENV_FILE next-env.d.ts
          
          docker build -t ${REGISTRY}:${IMAGE_TAG} .
          """
        }
      }
    }

    stage('Push Image') {
      steps {
        script {
          docker.withRegistry('https://ghcr.io', 'docker_registry_credentials') {
            docker.image("${REGISTRY}:${IMAGE_TAG}").push()
            docker.image("${REGISTRY}:${IMAGE_TAG}").push('latest')
          }
        }
      }
    }

    stage('Deploy to VPS') {
      steps {
        sshagent([SSH_CRED]) {
          sh """
          ssh -o StrictHostKeyChecking=no ${SSH_HOST} \\
            docker pull ${REGISTRY}:${IMAGE_TAG} && \\
            docker rm -f ${APP_NAME} || true && \\
            docker-compose -f wiktor-website-compose.yml up --build -d
          """
        }
      }
    }
  }
}
