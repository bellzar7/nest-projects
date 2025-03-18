export type ConfigType = {
  app: AppConfig;
  postgres: PostgresConfig;
};

export type AppConfig = {
  port: number;
  host: string;
};
export type PostgresConfig = {
  host: string;
  port: number;
  postgres_user: string;
  postgres_password: string;
  postgres_db: string;
};
