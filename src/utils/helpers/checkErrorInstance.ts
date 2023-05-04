import { Response } from 'express';
import { UniqueConstraintError, ValidationError } from 'sequelize';
import { displayError } from './displayError';
import { ResourceNotFoundException } from '../exceptions/ResourceNotFoundException';
import { ValidationException } from '../exceptions/ValidationException';
import { UniqueConstraintException } from '../exceptions/UniqueConstraintException';
import { AuthenticationException } from '../exceptions/AuthenticationException';
import { AuthorizationException } from '../exceptions/AuthorizationException';

export const checkErrorInstance = (res: Response, error: any) => {
  try {
    if (error instanceof UniqueConstraintError)
      throw new UniqueConstraintException(error.message);

    if (error instanceof ValidationError)
      throw new ValidationException(error.errors[0].message);

    if (error instanceof ResourceNotFoundException)
      return displayError(res, error, 404);

    if (error instanceof AuthenticationException)
      return displayError(res, error, 401);

    if (error instanceof AuthorizationException)
      return displayError(res, error, 403);

    if (
      error instanceof ValidationException ||
      error instanceof UniqueConstraintException
    )
      return displayError(res, error, 400);

    return displayError(res, error);
  } catch (e) {
    if (
      e instanceof ValidationException ||
      e instanceof UniqueConstraintException
    )
      return displayError(res, e, 400);
  }
};
