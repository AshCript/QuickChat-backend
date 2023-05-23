import { Op } from 'sequelize';
import { IMessageModel } from 'src/interfaces/models/IMessageModel';
import { szModels } from '../../config/sequelize';
import { IMessageDAO } from '../interfaces/dao/IMessageDAO';
import { IUserDAO } from '../interfaces/dao/IUserDAO';
import { MessageModel } from '../models/MessageModel';
import { UserDAO } from './UserDAO';

export class MessageDAO implements IMessageDAO {
  private declare em: typeof MessageModel;
  private declare userDao: IUserDAO;

  constructor() {
    this.em = szModels.Message;
    this.userDao = new UserDAO();
  }

  async getAllUserMessages(
    idUserOne: number,
    idUserTwo: number
  ): Promise<IMessageModel[]> {
    return await this.em.findAll({
      where: {
        [Op.or]: [
          { idSender: idUserOne, idReceiver: idUserTwo },
          { idSender: idUserTwo, idReceiver: idUserOne },
        ],
      },
      order: [['createdAt', 'ASC']],
    });
  }

  async getLastUserMessages(idUser: number): Promise<any[]> {
    // Récupération de tous les messages de chaque utilisateur
    const userMessages = await this.em.findAll({
      where: {
        [Op.or]: [{ idSender: idUser }, { idReceiver: idUser }],
      },
    });

    // Ajout de tous les ID des utilisateurs dans un tableau, puis tri
    let userAdded: any[] = [];
    userMessages.map((userMessage) => {
      if (userMessage.idSender !== idUser) {
        if (!userAdded.includes(userMessage.idSender)) {
          userAdded.push(userMessage.idSender);
        }
      } else if (userMessage.idReceiver !== idUser) {
        if (!userAdded.includes(userMessage.idReceiver)) {
          userAdded.push(userMessage.idReceiver);
        }
      }
    });

    userAdded = userAdded.sort((a, b) => a - b);

    // Groupement des messages par utilisateur.
    let groupUserMessages: any[][] = [[]];
    userAdded.map((id, index) => {
      groupUserMessages.push([]);
      userMessages.forEach((userMessage) => {
        if (userMessage.idSender === id || userMessage.idReceiver === id) {
          groupUserMessages[index].push(userMessage);
        }
      });
    });
    groupUserMessages.pop();

    let output: any[] = [];

    // Sélection du dernier message de chaque utilisateur selon sa date
    groupUserMessages.forEach((groupUserMessage) => {
      output.push(
        groupUserMessage.reduce(
          (a: { createdAt: number }, b: { createdAt: number }) => {
            return a.createdAt > b.createdAt ? a : b;
          }
        )
      );
    });

    return output;
  }

  async getMessageById(id: number): Promise<IMessageModel | null> {
    return await this.em.findByPk(id);
  }

  async createUserMessage(
    message: IMessageModel
  ): Promise<IMessageModel | null> {
    return await this.em.create(message);
  }

  async updateUserMessage(
    id: number,
    message: IMessageModel
  ): Promise<IMessageModel | null> {
    await this.em.update(message, { where: { id } });
    return await this.getMessageById(id);
  }

  async deleteUserMessage(id: number): Promise<void> {
    await this.em.destroy({ where: { id } });
  }
}
