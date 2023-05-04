import {
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { IContactModel } from '../interfaces/models/IContactModel';
import { UserModel } from './UserModel';

export class ContactModel
  extends Model<
    InferAttributes<ContactModel>,
    InferCreationAttributes<ContactModel>
  >
  implements IContactModel
{
  declare id: number;
  declare idUser: ForeignKey<UserModel['id']>;
  declare idFriend: ForeignKey<UserModel['id']>;
}

export const Contact = (sequelize: Sequelize) => {
  ContactModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        unique: 'nodupl',
        allowNull: false,
      },
      idFriend: {
        type: DataTypes.INTEGER,
        unique: 'nodupl',
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'contacts',
      timestamps: true,
    }
  );

  ContactModel.belongsTo(UserModel, {
    foreignKey: 'idUser',
    onDelete: 'CASCADE',
  });
  ContactModel.belongsTo(UserModel, {
    foreignKey: 'idFriend',
    onDelete: 'CASCADE',
  });

  return ContactModel;
};
