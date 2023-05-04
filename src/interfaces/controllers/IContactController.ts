import { Request, Response } from 'express';

export interface IContactController {
  getAllUserContact(req: Request, res: Response): Promise<void>;
  getUserContactById(req: Request, res: Response): Promise<void>;
  createUserContact(req: Request, res: Response): Promise<void>;
  updateUserContact(req: Request, res: Response): Promise<void>;
  deleteUserContact(req: Request, res: Response): Promise<void>;
}
