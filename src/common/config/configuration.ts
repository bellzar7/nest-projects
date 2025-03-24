import * as process from 'process';
import { Config } from './config.type';

export default (): Config => ({
  app: {
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
    host: process.env.APP_HOST || 'localhost',
  },
  database: {
    host: process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : 'localhost',
    port: process.env.POSTGRES_PORT
      ? parseInt(process.env.POSTGRES_PORT, 10)
      : 5432,
    user: process.env.POSTGRES_USER ? process.env.POSTGRES_USER : 'postgres',
    password: process.env.POSTGRES_PASSWORD
      ? process.env.POSTGRES_PASSWORD
      : 'password',
    name: process.env.POSTGRES_DB ? process.env.POSTGRES_DB : 'postgres',
  },
  redis: {
    host: process.env.REDIS_HOST ? process.env.REDIS_HOST : 'localhost',
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : '',
  },
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY : '',
    secretKey: process.env.AWS_SECRET_KEY ? process.env.AWS_SECRET_KEY : '',
  },
});
