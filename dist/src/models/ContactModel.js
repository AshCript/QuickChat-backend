"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = exports.ContactModel = void 0;
const sequelize_1 = require("sequelize");
const UserModel_1 = require("./UserModel");
class ContactModel extends sequelize_1.Model {
}
exports.ContactModel = ContactModel;
const Contact = (sequelize) => {
    ContactModel.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idUser: {
            type: sequelize_1.DataTypes.INTEGER,
            unique: 'nodupl',
            allowNull: false,
        },
        idFriend: {
            type: sequelize_1.DataTypes.INTEGER,
            unique: 'nodupl',
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'contacts',
        timestamps: true,
    });
    ContactModel.belongsTo(UserModel_1.UserModel, {
        foreignKey: 'idUser',
        onDelete: 'CASCADE',
    });
    ContactModel.belongsTo(UserModel_1.UserModel, {
        foreignKey: 'idFriend',
        onDelete: 'CASCADE',
    });
    return ContactModel;
};
exports.Contact = Contact;
//# sourceMappingURL=ContactModel.js.map