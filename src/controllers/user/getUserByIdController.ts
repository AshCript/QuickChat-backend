import { Request, Response } from 'express';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';

export async function getUserByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const id = Number(req.params.id);
    const user = await userService.getUserById(id);
    if (!user)
      throw new ResourceNotFoundException(`User with id ${id} doesn't exist`);
    const message = `User with id ${id} loaded successfully`;
    res.json({ message, data: user });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
