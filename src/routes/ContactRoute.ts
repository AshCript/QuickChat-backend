import { Request, Response } from 'express';
import { Router } from 'express';
import { IContactRoute } from '../interfaces/routes/IContactRoute';
import { IContactController } from '../interfaces/controllers/IContactController';
import { ContactController } from '../controllers/ContactController';
import { auth } from '../utils/middlewares/auth';

export class ContactRoute implements IContactRoute {
  declare path: string;
  declare router: Router;

  private declare contactController: IContactController;

  constructor() {
    this.path = '/contact';
    this.router = Router();
    this.contactController = new ContactController();
    this.init();
  }

  private init(): void {
    this.router.get(`${this.path}s`, auth, this.getAllUserContact);
    this.router.get(`${this.path}/:id`, auth, this.getUserContactById);
    this.router.post(`${this.path}`, auth, this.createUserContact);
    this.router.put(`${this.path}/:id`, auth, this.updateUserContact);
    this.router.delete(`${this.path}/:id`, auth, this.deleteUserContact);
  }

  getAllUserContact = (req: Request, res: Response): void => {
    this.contactController.getAllUserContact(req, res);
  };
  getUserContactById = (req: Request, res: Response): void => {
    this.contactController.getUserContactById(req, res);
  };
  createUserContact = (req: Request, res: Response): void => {
    this.contactController.createUserContact(req, res);
  };
  updateUserContact = (req: Request, res: Response): void => {
    this.contactController.updateUserContact(req, res);
  };
  deleteUserContact = (req: Request, res: Response): void => {
    this.contactController.deleteUserContact(req, res);
  };
}
