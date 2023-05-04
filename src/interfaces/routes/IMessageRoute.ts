import { Request, Response } from 'express';
import { IRoute } from '../utils/IRoute';

export interface IMessageRoute extends IRoute {
  getAllUserMessages(req: Request, res: Response): void;
  getLastUserMessages(req: Request, res: Response): void;
  getMessageById(req: Request, res: Response): void;
  createUserMessage(req: Request, res: Response): void;
  updateUserMessage(req: Request, res: Response): void;
  deleteUserMessage(req: Request, res: Response): void;
}
