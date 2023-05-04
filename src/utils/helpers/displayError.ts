import { Response } from 'express';
import { Exception } from '../exceptions/Exception';

export function displayError(
  res: Response,
  error: Exception,
  status: number = 500
) {
  const message =
    error.message !== '' && error.message !== null
      ? error.message
      : 'Server Error!';
  res.status(status).json({ message, data: error });
}
