import { IUserModel } from '../interfaces/models/IUserModel';
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements IUserModel
{
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare phone: string;
  declare password: string;
}

export const User = (sequelize: Sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING(13),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
    }
  );
  return UserModel;
};
