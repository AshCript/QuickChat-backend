import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthorizationException } from '../exceptions/AuthorizationException';
import { checkErrorInstance } from '../helpers/checkErrorInstance';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      throw new AuthorizationException(
        'No suitable authentication token provided. Add it inside the header'
      );
    } else {
      const token = authorizationHeader.split(' ')[1];

      jwt.verify(token, 'MEETME_KEY', (error, decodedToken: any) => {
        if (error) {
          throw new AuthorizationException('Resource Access denied.');
        }

        // userId = email
        const userId = decodedToken.userId;

        if (req.body.email && req.body.email !== userId) {
          throw new AuthorizationException('Email invalid!');
        } else {
          next();
        }
      });
    }
  } catch (error) {
    checkErrorInstance(res, error);
  }
};

export const getLogin = (req: Request) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    const decodedToken: any = jwt.decode(token);
    return decodedToken.userId;
  }
};
