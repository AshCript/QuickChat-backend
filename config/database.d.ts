import { Dialect, Options } from 'sequelize';

declare interface IConfigOptions {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  timezone: string;
  define: {
    charset: string;
    collate: string;
  };
}

const dbConfig: IConfigOptions;

export { dbConfig };
