import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/UserController';
import { IUserController } from '../interfaces/controllers/IUserController';
import { IUserRoute } from '../interfaces/routes/IUserRoute';

export class UserRoute implements IUserRoute {
  declare path: string;
  declare router: Router;
  private declare userController: IUserController;

  constructor() {
    this.path = '/user';
    this.router = Router();
    this.userController = new UserController();
    this.init();
  }
  private init(): void {
    this.router.post('/login', this.getUserLogin);
    this.router.get(`${this.path}s`, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getUserById);
    this.router.post(`${this.path}`, this.createUser);
    this.router.put(`${this.path}/:id`, this.updateUser);
    this.router.delete(`${this.path}/:id`, this.deleteUser);
  }

  getUserLogin = (req: Request, res: Response): void => {
    this.userController.getUserByLogin(req, res);
  };

  getAllUsers = (req: Request, res: Response) => {
    this.userController.getAllUsers(req, res);
  };
  getUserById = (req: Request, res: Response) => {
    this.userController.getUserById(req, res);
  };
  createUser = (req: Request, res: Response) => {
    this.userController.createUser(req, res);
  };
  updateUser = (req: Request, res: Response) => {
    this.userController.updateUser(req, res);
  };
  deleteUser = (req: Request, res: Response) => {
    this.userController.deleteUser(req, res);
  };
}
