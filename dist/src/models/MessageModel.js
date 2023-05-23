"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.MessageModel = void 0;
const sequelize_1 = require("sequelize");
const UserModel_1 = require("./UserModel");
class MessageModel extends sequelize_1.Model {
}
exports.MessageModel = MessageModel;
const Message = (sequelize) => {
    MessageModel.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: sequelize_1.DataTypes.STRING(256),
            allowNull: false,
            validate: {
                notNull: { msg: 'Content must not be null' },
                notEmpty: { msg: 'Content must not be empty' },
            },
        },
    }, {
        sequelize,
        tableName: 'messages',
        timestamps: true,
    });
    MessageModel.belongsTo(UserModel_1.UserModel, {
        foreignKey: 'idSender',
        onDelete: 'CASCADE',
    });
    MessageModel.belongsTo(UserModel_1.UserModel, {
        foreignKey: 'idReceiver',
        onDelete: 'CASCADE',
    });
    return MessageModel;
};
exports.Message = Message;
//# sourceMappingURL=MessageModel.js.map