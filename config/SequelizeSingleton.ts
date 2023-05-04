import { Sequelize } from 'sequelize';
import { dbConfig } from './database';

export class SequelizeSingleton {
  private declare static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!this.instance) {
      this.instance = new Sequelize(
        dbConfig.database,
        dbConfig.username,
        dbConfig.password,
        dbConfig
      );
      this.connectAndSynchronize();
    }

    return this.instance;
  }

  private static connectAndSynchronize() {
    this.instance
      .authenticate()
      .then(() => {
        console.log('[OK] Sequelize : database connected 🔥');
        this.instance
          .sync({ force: false })
          .then(() => {
            console.log('[OK] Sequelize : database synchronized 🎉');
          })
          .catch((error) => {
            console.error(
              `[ERROR] Sequelize : database synchronization failed 🥺 : ${error}`
            );
          });
      })
      .catch((error) => {
        console.error(
          `[ERROR] Sequelize: database connection failed 😭 : ${error}`
        );
      });
  }
}
