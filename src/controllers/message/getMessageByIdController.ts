import { Request, Response } from 'express';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';
import { UserService } from '../../services/UserService';
import { MessageService } from '../../services/MessageService';

export async function getMessageByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const messageService = MessageService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException(`Access denied. Connect first`);

    const id = Number(req.params.id);
    const messageRequested = await messageService.getMessageById(id);
    if (!messageRequested)
      throw new ResourceNotFoundException(
        `Message with ID ${id} doesn't exist.`
      );

    if (
      messageRequested.idSender !== user.id &&
      messageRequested.idReceiver !== user.id
    ) {
      throw new AuthorizationException(`You don't have access to this message`);
    }

    const message = `Message with ID ${id} loaded successfully`;
    res.json({ message, data: messageRequested });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
