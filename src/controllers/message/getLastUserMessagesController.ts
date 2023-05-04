import { Request, Response } from 'express';
import { getLogin } from '../../utils/middlewares/auth';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';
import { MessageService } from '../../services/MessageService';

export async function getLastUserMessagesController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const messageService = MessageService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const idUser = user.id;

    const lastUserMessages = await messageService.getLastUserMessages(idUser);
    if (lastUserMessages.length === 0)
      throw new ResourceNotFoundException(`No messages to be shown.`);

    const message = `All last messages are loaded successfully`;
    res.json({ message, data: lastUserMessages });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
