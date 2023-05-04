import { Request, Response } from 'express';
import { getLogin } from '../../utils/middlewares/auth';
import { AuthorizationException } from '../../utils/exceptions/AuthorizationException';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';
import { MessageService } from '../../services/MessageService';

export async function getAllUserMessagesController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();
    const messageService = MessageService.getInstance();

    const user = await userService.getUserByLogin(getLogin(req));
    if (!user) throw new AuthorizationException('Access denied. Connect first');

    const idUserOne = user.id;
    const idUserTwo = Number(req.params.idUser);
    const userTwo = await userService.getUserById(idUserTwo);

    if (idUserOne === idUserTwo)
      throw new AuthorizationException('Choose another ID than yours');
    if (!userTwo)
      throw new ResourceNotFoundException(
        `User with ID ${idUserTwo} doesn't exist.`
      );

    const userMessages = await messageService.getAllUserMessages(
      idUserOne,
      idUserTwo
    );
    if (userMessages.length === 0)
      throw new ResourceNotFoundException(
        `No messages to be shown between you and ${userTwo.firstName} ${userTwo.lastName}.`
      );

    const message = `All messages between you and ${userTwo.firstName} ${userTwo.lastName} are loaded successfully`;
    res.json({ message, data: userMessages });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
