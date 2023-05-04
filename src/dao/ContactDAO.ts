import { IContactModel } from 'src/interfaces/models/IContactModel';
import { ContactModel } from 'src/models/ContactModel';
import { szModels } from '../../config/sequelize';
import { IContactDAO } from '../interfaces/dao/IContactDAO';

export class ContactDAO implements IContactDAO {
  private declare em: typeof ContactModel;

  constructor() {
    this.em = szModels.Contact;
  }

  async getAllUserContact(idUser: number): Promise<IContactModel[]> {
    return await this.em.findAll({ where: { idUser } });
  }

  async getUserContactById(id: number): Promise<IContactModel | null> {
    return await this.em.findByPk(id);
  }

  async createUserContact(
    contact: IContactModel
  ): Promise<IContactModel | null> {
    return await this.em.create(contact);
  }

  async updateUserContact(
    id: number,
    contact: IContactModel
  ): Promise<IContactModel | null> {
    await this.em.update(contact, { where: { id } });
    return await this.getUserContactById(id);
  }

  async deleteUserContact(id: number): Promise<void> {
    await this.em.destroy({ where: { id } });
  }
}
