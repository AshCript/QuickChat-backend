import { IContactModel } from 'src/interfaces/models/IContactModel';
import { IContactService } from '../interfaces/services/IContactService';
import { IContactDAO } from '../interfaces/dao/IContactDAO';
import { ContactDAO } from '../dao/ContactDAO';

export class ContactService implements IContactService {
  private declare contactDao: IContactDAO;
  private declare static instance: IContactService;

  constructor() {
    this.contactDao = new ContactDAO();
  }

  static getInstance(): IContactService {
    return (this.instance ??= new ContactService());
  }

  async getAllUserContact(idUser: number): Promise<IContactModel[]> {
    return await this.contactDao.getAllUserContact(idUser);
  }

  async getUserContactById(id: number): Promise<IContactModel | null> {
    return await this.contactDao.getUserContactById(id);
  }

  async createUserContact(
    contact: IContactModel
  ): Promise<IContactModel | null> {
    return await this.contactDao.createUserContact(contact);
  }

  async updateUserContact(
    id: number,
    contact: IContactModel
  ): Promise<IContactModel | null> {
    return await this.contactDao.updateUserContact(id, contact);
  }

  async deleteUserContact(id: number): Promise<void> {
    return await this.contactDao.deleteUserContact(id);
  }
}
