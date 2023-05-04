import { Request, Response } from 'express';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { getLogin } from '../../utils/middlewares/auth';
import { UserService } from '../../services/UserService';
import { MessageService } from '../../services/MessageService';

export async function updateUserMessageController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const messageService = MessageService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException(`Access denied. Connect first`);

    const id = Number(req.params.id);

    const oldMessage = await messageService.getMessageById(id);
    if (!oldMessage)
      throw new ResourceNotFoundException(
        `Message with id ${id} doesn't exist.`
      );
    if (oldMessage.idSender !== user.id)
      throw new AuthorizationException(
        'You must be the owner of this message if you want to edit it.'
      );

    req.body.idSender = user.id;
    req.body.idReceiver = oldMessage.idReceiver;

    const newMessage = await messageService.updateUserMessage(id, req.body);

    const message = `Message with id ${id} updated successfully.`;

    res.json({ message, data: { old: oldMessage, new: newMessage } });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
