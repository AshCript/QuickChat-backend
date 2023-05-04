import { Exception } from './Exception';

export class AuthorizationException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationException';
  }
}
