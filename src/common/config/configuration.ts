import * as process from 'process';
import { ConfigType } from './config.type';

export default (): ConfigType => ({
  app: {
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
    host: process.env.APP_HOST || '0.0.0.0',
  },
  postgres: {
    host: process.env.DATABASE_HOST || '0.0.0.0',
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10)
      : 5432,
    postgres_user: process.env.POSTGRES_USER ?? '',
    postgres_password: process.env.POSTGRES_PASSWORD ?? '',
    postgres_db: process.env.POSTGRES_DB ?? '',
  },
});
