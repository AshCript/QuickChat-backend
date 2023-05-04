import { Request, Response } from 'express';
import { ContactService } from '../../services/ContactService';
import { UserService } from '../../services/UserService';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { getLogin } from '../../utils/middlewares/auth';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';

export async function updateUserContactController(req: Request, res: Response) {
  try {
    const userService = UserService.getInstance();
    const contactService = ContactService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const id = parseInt(req.params.id);
    console.log(req.body);
    if (!req.body.idUser || !req.body.idFriend)
      throw new ResourceNotFoundException(
        'You must provide idUser and idFriend properties.'
      );
    const oldContact = await contactService.getUserContactById(id);
    if (!oldContact)
      throw new ResourceNotFoundException(
        `Contact with ID ${id} doesn't exist.`
      );

    const newContact = await contactService.updateUserContact(id, req.body);
    const message = `Contact with ID ${id} updated successfully.`;
    res.json({ message, data: { old: oldContact, new: newContact } });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
