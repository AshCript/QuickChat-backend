import { Request, Response } from 'express';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';
import { UserService } from '../../services/UserService';
import { MessageService } from '../../services/MessageService';

export async function createUserMessageController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const messageService = MessageService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException(`Access denied. Connect first`);

    req.body.idSender = user.id;
    const messageCreated = await messageService.createUserMessage(req.body);

    const message = `Message created successfully`;
    res.json({ message, data: messageCreated });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
