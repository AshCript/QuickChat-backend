import { IRoute } from '../utils/IRoute';
import { Request, Response } from 'express';

export interface IUserRoute extends IRoute {
  getUserLogin(req: Request, res: Response): void;
  getAllUsers(req: Request, res: Response): void;
  getUserById(req: Request, res: Response): void;
  createUser(req: Request, res: Response): void;
  updateUser(req: Request, res: Response): void;
  deleteUser(req: Request, res: Response): void;
}
