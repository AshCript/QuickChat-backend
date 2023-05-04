import { UserDAO } from '../dao/UserDAO';
import { IUserDAO } from '../interfaces/dao/IUserDAO';
import { IUserModel } from '../interfaces/models/IUserModel';
import { IUserService } from '../interfaces/services/IUserService';

export class UserService implements IUserService {
  private declare userDao: IUserDAO;
  private declare static instance: IUserService;

  constructor() {
    this.userDao = new UserDAO();
  }

  static getInstance() {
    return (this.instance ??= new UserService());
  }

  getUserByLogin(login: string): Promise<IUserModel | null> {
    return this.userDao.getUserByLogin(login);
  }

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.userDao.getAllUsers();
  }
  async getUserById(id: number): Promise<IUserModel | null> {
    return await this.userDao.getUserById(id);
  }
  async createUser(user: IUserModel): Promise<IUserModel> {
    return await this.userDao.createUser(user);
  }
  async updateUser(id: number, user: IUserModel): Promise<IUserModel | null> {
    return await this.userDao.updateUser(id, user);
  }
  async deleteUser(id: number): Promise<void> {
    await this.userDao.deleteUser(id);
  }
}
