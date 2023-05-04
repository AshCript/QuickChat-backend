import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { ResourceNotFoundException } from '../../utils/exceptions/ResourceNotFoundException';
import { AuthenticationException } from '../../utils/exceptions/AuthenticationException';
import { checkErrorInstance } from '../../utils/helpers/checkErrorInstance';
import { UserService } from '../../services/UserService';

export async function getUserByLoginController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userService = UserService.getInstance();

    if (!req.body.login || !req.body.password) {
      throw new ResourceNotFoundException(
        'The property login and password must be provided!'
      );
    }
    const user = await userService.getUserByLogin(req.body.login);
    if (!user) throw new ResourceNotFoundException("User doesn't exist");
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) throw new AuthenticationException('Password invalid');

    const token = jwt.sign({ userId: user.email }, 'MEETME_KEY', {
      expiresIn: '24h',
    });
    const message = 'User connected successfully!';
    res.json({ message, data: user, token });
  } catch (error) {
    checkErrorInstance(res, error);
  }
}
