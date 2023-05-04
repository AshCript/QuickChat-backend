import { Request, Response } from 'express';
import { ContactService } from '../../services/ContactService';
import { UserService } from '../../services/UserService';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { getLogin } from '../../utils/middlewares/auth';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';

export async function deleteUserContactController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const contactService = ContactService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const id = parseInt(req.params.id);
    const contactToDelete = await contactService.getUserContactById(id);

    if (!contactToDelete)
      throw new ResourceNotFoundException(
        `Contact with ID ${id} doesn't exist.`
      );

    await contactService.deleteUserContact(id);
    const message = `Contact with ID ${id} deleted successfully.`;
    res.json({ message, data: contactToDelete });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
