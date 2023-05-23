"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
const User = (sequelize) => {
    UserModel.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Firstname must not be empty!' },
                notNull: { msg: 'Firstname must not be null!' },
                len: {
                    args: [2, 64],
                    msg: 'Firstname length must be between 2 and 64',
                },
            },
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Lastname must not be empty!' },
                notNull: { msg: 'Lastname must not be null!' },
                len: {
                    args: [2, 64],
                    msg: 'Lastname length must be between 2 and 64',
                },
            },
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: {
                name: 'email',
                msg: 'Email already used. Try another email.',
            },
            validate: {
                notEmpty: { msg: 'Email must not be empty!' },
                notNull: { msg: 'Email must not be null!' },
            },
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(13),
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'users',
        timestamps: true,
    });
    return UserModel;
};
exports.User = User;
//# sourceMappingURL=UserModel.js.map