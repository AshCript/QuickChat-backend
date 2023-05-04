import { IContactModel } from '../models/IContactModel';

export interface IContactDAO {
  getAllUserContact(idUser: number): Promise<IContactModel[]>;
  getUserContactById(id: number): Promise<IContactModel | null>;
  createUserContact(contact: IContactModel): Promise<IContactModel | null>;
  updateUserContact(
    id: number,
    contact: IContactModel
  ): Promise<IContactModel | null>;
  deleteUserContact(id: number): Promise<void>;
}
