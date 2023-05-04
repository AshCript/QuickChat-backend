import { IUserModel } from '../models/IUserModel';

export interface IUserDAO {
  getUserByLogin(login: string): Promise<IUserModel | null>;
  getAllUsers(): Promise<IUserModel[]>;
  getUserById(id: number): Promise<IUserModel | null>;
  createUser(user: IUserModel): Promise<IUserModel>;
  updateUser(id: number, user: IUserModel): Promise<IUserModel | null>;
  deleteUser(id: number): Promise<void>;
}
