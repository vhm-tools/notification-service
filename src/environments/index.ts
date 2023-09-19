import { NodeEnv } from '@enums';
import * as dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  HOST,
  NODE_ENV,
  VHM_API_KEY,
  API_VERSION,
  REQ_LOGGING,
  DB_LOGGING,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  RABBITMQ_QUEUE,
  MAILJET_SECRET_KEY,
  MAILJET_API_KEY,
  SENDGRID_EMAIL,
  SENDGRID_API_KEY,
  RABBITMQ_URL_DOCKER,
  RABBITMQ_URL,
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
} = process.env;

if (NODE_ENV && !Object.values(NodeEnv).includes(NODE_ENV as NodeEnv)) {
  throw new Error('NODE_ENV must be either test, production or development');
}

if (!PORT || !HOST) {
  throw new Error('PORT or HOST is not define');
}

if (!POSTGRES_HOST || !POSTGRES_PORT || !POSTGRES_DB) {
  throw new Error('POSTGRES config is not define');
}

if (
  !RABBITMQ_QUEUE ||
  !RABBITMQ_URL_DOCKER ||
  !RABBITMQ_URL ||
  !RABBITMQ_USERNAME ||
  !RABBITMQ_PASSWORD
) {
  throw new Error('RabbitMQ config is not define');
}

if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY) {
  throw new Error('Mailjet config is not define');
}

if (!SENDGRID_API_KEY || !SENDGRID_EMAIL) {
  throw new Error('Send grid config is not define');
}

if (!VHM_API_KEY) {
  throw new Error('VHM Api key config is not define');
}

export default {
  PORT,
  HOST,
  NODE_ENV,
  API_VERSION,
  VHM_API_KEY,
  DB_LOGGING,
  REQ_LOGGING,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  RABBITMQ_URL_DOCKER,
  RABBITMQ_QUEUE,
  RABBITMQ_URL,
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
  MAILJET_SECRET_KEY,
  MAILJET_API_KEY,
  SENDGRID_EMAIL,
  SENDGRID_API_KEY,
};
