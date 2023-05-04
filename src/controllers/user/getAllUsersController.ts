import { Request, Response } from 'express';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';
import { UserService } from '../../services/UserService';

export async function getAllUsersController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();

    const users = await userService.getAllUsers();
    const message = 'Users loaded successfully';
    res.json({ message, data: users });
    console.log(getLogin(req));
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
