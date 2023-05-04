import { Request, Response } from 'express';
import { IRoute } from '../utils/IRoute';

export interface IContactRoute extends IRoute {
  getAllUserContact(req: Request, res: Response): void;
  getUserContactById(req: Request, res: Response): void;
  createUserContact(req: Request, res: Response): void;
  updateUserContact(req: Request, res: Response): void;
  deleteUserContact(req: Request, res: Response): void;
}
