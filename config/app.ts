export const isProduction = process.env.NODE_ENV === 'production';

export const {
  NODE_ENV,
  APP_PORT,
  DB_HOSTNAME,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  TZ,
} = process.env;
