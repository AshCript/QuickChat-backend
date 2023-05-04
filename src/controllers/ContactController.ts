import { Request, Response } from 'express';
import { IContactController } from '../interfaces/controllers/IContactController';
import { createUserContactController } from './contact/createUserContactController';
import { deleteUserContactController } from './contact/deleteUserContactController';
import { getAllUserContactController } from './contact/getAllUserContactController';
import { getUserContactByIdController } from './contact/getUserContactByIdController';
import { updateUserContactController } from './contact/updateUserContactController';

export class ContactController implements IContactController {
  async getAllUserContact(req: Request, res: Response): Promise<void> {
    return await getAllUserContactController(req, res);
  }
  async getUserContactById(req: Request, res: Response): Promise<void> {
    return await getUserContactByIdController(req, res);
  }
  async createUserContact(req: Request, res: Response): Promise<void> {
    return await createUserContactController(req, res);
  }
  async updateUserContact(req: Request, res: Response): Promise<void> {
    return await updateUserContactController(req, res);
  }
  async deleteUserContact(req: Request, res: Response): Promise<void> {
    return await deleteUserContactController(req, res);
  }
}
