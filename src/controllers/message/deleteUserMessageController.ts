import { Request, Response } from 'express';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';
import { MessageService } from '../../services/MessageService';
import { UserService } from '../../services/UserService';

export async function deleteUserMessageController(req: Request, res: Response) {
  try {
    const messageService = MessageService.getInstance();
    const userService = UserService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException(`Access denied. Connect first`);

    const id = Number(req.params.id);
    const messageToDelete = await messageService.getMessageById(id);

    if (!messageToDelete)
      throw new ResourceNotFoundException(
        `Message with ID ${id} doesn't exist.`
      );

    if (messageToDelete.idSender !== user.id)
      throw new AuthorizationException(
        'Access not authorized. You must be the owner of the message if you want to delete it.'
      );

    await messageService.deleteUserMessage(id);
    const message = `Message with ID ${id} deleted successfully`;
    res.json({ message, data: messageToDelete });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
