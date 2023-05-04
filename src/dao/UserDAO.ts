import { IUserModel } from '../interfaces/models/IUserModel';
import { UserModel } from '../models/UserModel';
import { szModels } from '../../config/sequelize';
import { IUserDAO } from '../interfaces/dao/IUserDAO';

export class UserDAO implements IUserDAO {
  private declare em: typeof UserModel;

  constructor() {
    this.em = szModels.User;
  }

  async getUserByLogin(login: string): Promise<IUserModel | null> {
    return await this.em.findOne({
      where: {
        email: login,
      },
    });
  }

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.em.findAll();
  }

  async getUserById(id: number): Promise<IUserModel | null> {
    return await this.em.findByPk(id);
  }

  async createUser(user: IUserModel): Promise<IUserModel> {
    return await this.em.create(user);
  }

  async updateUser(id: number, user: IUserModel): Promise<IUserModel | null> {
    await this.em.update(user, { where: { id } });
    return await this.getUserById(id);
  }
  async deleteUser(id: number): Promise<void> {
    await this.em.destroy({ where: { id } });
  }
}
