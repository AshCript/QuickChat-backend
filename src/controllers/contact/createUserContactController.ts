import { Request, Response } from 'express';
import { ContactService } from '../../services/ContactService';
import { UserService } from '../../services/UserService';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { getLogin } from '../../utils/middlewares/auth';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';

export async function createUserContactController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const contactService = ContactService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');
    if (!req.body.idUser || !req.body.idFriend)
      throw new ResourceNotFoundException(
        `You must provide idUser and idFriend properties`
      );
    const contactCreated = await contactService.createUserContact(req.body);

    const message = `Contact added successfully!`;
    res.json({ message, data: contactCreated });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
