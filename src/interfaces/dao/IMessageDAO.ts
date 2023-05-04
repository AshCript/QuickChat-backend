import { IMessageModel } from '../models/IMessageModel';

export interface IMessageDAO {
  getAllUserMessages(
    idUserOne: number,
    idUserTwo: number
  ): Promise<IMessageModel[]>;
  getLastUserMessages(idUser: number): Promise<any[]>;
  getMessageById(id: number): Promise<IMessageModel | null>;
  createUserMessage(message: IMessageModel): Promise<IMessageModel | null>;
  updateUserMessage(
    id: number,
    message: IMessageModel
  ): Promise<IMessageModel | null>;
  deleteUserMessage(id: number): Promise<void>;
}
