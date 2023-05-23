"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeSingleton = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
class SequelizeSingleton {
    static getInstance() {
        if (!this.instance) {
            this.instance = new sequelize_1.Sequelize(database_1.dbConfig.database, database_1.dbConfig.username, database_1.dbConfig.password, database_1.dbConfig);
            this.connectAndSynchronize();
        }
        return this.instance;
    }
    static connectAndSynchronize() {
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
                console.error(`[ERROR] Sequelize : database synchronization failed 🥺 : ${error}`);
            });
        })
            .catch((error) => {
            console.error(`[ERROR] Sequelize: database connection failed 😭 : ${error}`);
        });
    }
}
exports.SequelizeSingleton = SequelizeSingleton;
//# sourceMappingURL=SequelizeSingleton.js.map