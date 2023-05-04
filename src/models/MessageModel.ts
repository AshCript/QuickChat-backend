import {
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';
import { IMessageModel } from '../interfaces/models/IMessageModel';
import { UserModel } from './UserModel';

export class MessageModel
  extends Model<
    InferAttributes<MessageModel>,
    InferCreationAttributes<MessageModel>
  >
  implements IMessageModel
{
  declare id: number;
  declare idSender: ForeignKey<UserModel['id']>;
  declare idReceiver: ForeignKey<UserModel['id']>;
  declare content: string;
}

export const Message = (sequelize: Sequelize) => {
  MessageModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      content: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          notNull: { msg: 'Content must not be null' },
          notEmpty: { msg: 'Content must not be empty' },
        },
      },
    },
    {
      sequelize,
      tableName: 'messages',
      timestamps: true,
    }
  );

  MessageModel.belongsTo(UserModel, {
    foreignKey: 'idSender',
    onDelete: 'CASCADE',
  });

  MessageModel.belongsTo(UserModel, {
    foreignKey: 'idReceiver',
    onDelete: 'CASCADE',
  });

  return MessageModel;
};
