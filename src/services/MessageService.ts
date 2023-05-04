import { IMessageModel } from 'src/interfaces/models/IMessageModel';
import { IMessageService } from '../interfaces/services/IMessageService';
import { IMessageDAO } from '../interfaces/dao/IMessageDAO';
import { MessageDAO } from '../dao/MessageDAO';

export class MessageService implements IMessageService {
  private declare messageDao: IMessageDAO;
  private declare static instance: IMessageService;

  constructor() {
    this.messageDao = new MessageDAO();
  }

  static getInstance() {
    return (this.instance ??= new MessageService());
  }

  async getAllUserMessages(
    idUserOne: number,
    idUserTwo: number
  ): Promise<IMessageModel[]> {
    return this.messageDao.getAllUserMessages(idUserOne, idUserTwo);
  }

  getLastUserMessages(idUser: number): Promise<any[]> {
    return this.messageDao.getLastUserMessages(idUser);
  }

  async getMessageById(id: number): Promise<IMessageModel | null> {
    return await this.messageDao.getMessageById(id);
  }

  async createUserMessage(
    message: IMessageModel
  ): Promise<IMessageModel | null> {
    return this.messageDao.createUserMessage(message);
  }

  async updateUserMessage(
    id: number,
    message: IMessageModel
  ): Promise<IMessageModel | null> {
    return this.messageDao.updateUserMessage(id, message);
  }

  async deleteUserMessage(id: number): Promise<void> {
    return this.messageDao.deleteUserMessage(id);
  }
}
