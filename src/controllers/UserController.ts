import { Request, Response } from 'express';
import { IUserController } from '../interfaces/controllers/IUserController';
import { createUserController } from './user/createUserController';
import { deleteUserController } from './user/deleteUserController';
import { getAllUsersController } from './user/getAllUsersController';
import { getUserByIdController } from './user/getUserByIdController';
import { getUserByLoginController } from './user/getUserByLoginController';
import { updateUserController } from './user/updateUserController';

export class UserController implements IUserController {
  async getUserByLogin(req: Request, res: Response): Promise<void> {
    return await getUserByLoginController(req, res);
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    return await getAllUsersController(req, res);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    return await getUserByIdController(req, res);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    return await createUserController(req, res);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    return await updateUserController(req, res);
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    return await deleteUserController(req, res);
  }
}
