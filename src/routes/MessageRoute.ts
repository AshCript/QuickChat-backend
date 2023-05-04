import { Request, Response, Router } from 'express';
import { MessageController } from '../controllers/MessageController';
import { IMessageController } from '../interfaces/controllers/IMessageController';
import { IMessageRoute } from '../interfaces/routes/IMessageRoute';
import { auth } from '../utils/middlewares/auth';

export class MessageRoute implements IMessageRoute {
  declare path: string;
  declare router: Router;
  private declare messageController: IMessageController;

  constructor() {
    this.path = '/message';
    this.router = Router();
    this.messageController = new MessageController();
    this.init();
  }

  private init(): void {
    this.router.get(`${this.path}s/:idUser`, auth, this.getAllUserMessages);
    this.router.get(`${this.path}s`, auth, this.getLastUserMessages);
    this.router.get(`${this.path}/:id`, auth, this.getMessageById);
    this.router.post(`${this.path}`, auth, this.createUserMessage);
    this.router.put(`${this.path}/:id`, auth, this.updateUserMessage);
    this.router.delete(`${this.path}/:id`, auth, this.deleteUserMessage);
  }

  getAllUserMessages = (req: Request, res: Response): void => {
    this.messageController.getAllUserMessages(req, res);
  };

  getLastUserMessages = (req: Request, res: Response): void => {
    this.messageController.getLastUserMessages(req, res);
  };

  getMessageById = (req: Request, res: Response): void => {
    this.messageController.getMessageById(req, res);
  };

  createUserMessage = (req: Request, res: Response): void => {
    this.messageController.createUserMessage(req, res);
  };

  updateUserMessage = (req: Request, res: Response): void => {
    this.messageController.updateUserMessage(req, res);
  };

  deleteUserMessage = (req: Request, res: Response): void => {
    this.messageController.deleteUserMessage(req, res);
  };
}
