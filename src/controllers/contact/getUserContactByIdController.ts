import { ContactService } from '../../services/ContactService';
import { UserService } from '../../services/UserService';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { getLogin } from '../../utils/middlewares/auth';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { Request, Response } from 'express';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';

export async function getUserContactByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const contactService = ContactService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const id = parseInt(req.params.id);
    const contactRequested = await contactService.getUserContactById(id);
    if (!contactRequested)
      throw new ResourceNotFoundException(
        `Contact with ID ${id} doesn't exist.`
      );

    if (contactRequested.idUser !== user.id)
      throw new AuthorizationException(`You don't have access to this contact`);

    const message = `Contact with ID ${id} loaded successfully!`;
    res.json({ message, data: contactRequested });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
