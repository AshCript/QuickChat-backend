import { Request, Response } from 'express';
import { ContactService } from '../../services/ContactService';
import { UserService } from '../../services/UserService';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';

export async function getAllUserContactController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const contactService = ContactService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const contacts = await contactService.getAllUserContact(user.id);
    const message = `All contacts loaded successfully : ${contacts.length} ${
      contacts.length === 1 ? 'contact' : 'contacts'
    }`;
    res.json({ message, data: contacts });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
