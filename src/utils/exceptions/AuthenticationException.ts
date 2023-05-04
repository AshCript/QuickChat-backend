import { Exception } from './Exception';

export class AuthenticationException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationException';
  }
}
