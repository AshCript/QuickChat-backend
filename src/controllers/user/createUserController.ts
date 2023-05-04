import { Request, Response } from 'express';
import { ValidationException } from '../../utils/exceptions/ValidationException';
import bcrypt from 'bcrypt';
import { UserService } from '../../services/UserService';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';

export async function createUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();

    if (req.body.password === '')
      throw new ValidationException('Password must not be empty');
    if (req.body.password === null)
      throw new ValidationException('Password must not be null');
    if (req.body.password.length < 6 || req.body.password.length > 20) {
      throw new ValidationException('Password length must be between 6 and 20');
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const createdUser = await userService.createUser(req.body);
    const message = 'User added successfully';
    res.json({ message, data: createdUser });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
