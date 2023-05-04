import { Request, Response } from 'express';
import { IMessageController } from '../interfaces/controllers/IMessageController';
import { createUserMessageController } from './message/createUserMessageController';
import { deleteUserMessageController } from './message/deleteUserMessageController';
import { getAllUserMessagesController } from './message/getAllUserMessagesController';
import { getLastUserMessagesController } from './message/getLastUserMessagesController';
import { getMessageByIdController } from './message/getMessageByIdController';
import { updateUserMessageController } from './message/updateUserMessageController';

export class MessageController implements IMessageController {
  async getAllUserMessages(req: Request, res: Response): Promise<void> {
    return await getAllUserMessagesController(req, res);
  }

  async getLastUserMessages(req: Request, res: Response): Promise<void> {
    return await getLastUserMessagesController(req, res);
  }

  async getMessageById(req: Request, res: Response): Promise<void> {
    return await getMessageByIdController(req, res);
  }

  async createUserMessage(req: Request, res: Response): Promise<void> {
    return await createUserMessageController(req, res);
  }

  async updateUserMessage(req: Request, res: Response): Promise<void> {
    return await updateUserMessageController(req, res);
  }

  async deleteUserMessage(req: Request, res: Response): Promise<void> {
    return await deleteUserMessageController(req, res);
  }
}
