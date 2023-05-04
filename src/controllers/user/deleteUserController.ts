import { Request, Response } from 'express';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';

export async function deleteUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();

    const id = Number(req.params.id);
    if (!(await userService.getUserById(id))) {
      throw new ResourceNotFoundException(`User with id ${id} doesn't exist`);
    }
    await userService.deleteUser(id);

    const message = `User with id ${id} deleted successfully`;
    res.json({ message });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
