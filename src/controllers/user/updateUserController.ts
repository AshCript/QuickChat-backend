import { Request, Response } from 'express';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';

export async function updateUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();

    const id = Number(req.params.id);
    const oldUser = await userService.getUserById(id);
    if (oldUser === null)
      throw new ResourceNotFoundException(`User with id ${id} doesn't exist`);
    const newUser = await userService.updateUser(id, req.body);
    const message = `User with id ${id} updated successfully`;
    res.json({ message, data: { old: oldUser, new: newUser } });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
