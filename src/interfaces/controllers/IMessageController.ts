import { Request, Response } from 'express';

export interface IMessageController {
  getAllUserMessages(req: Request, res: Response): Promise<void>;
  getLastUserMessages(req: Request, res: Response): Promise<void>;
  getMessageById(req: Request, res: Response): Promise<void>;
  createUserMessage(req: Request, res: Response): Promise<void>;
  updateUserMessage(req: Request, res: Response): Promise<void>;
  deleteUserMessage(req: Request, res: Response): Promise<void>;
}
