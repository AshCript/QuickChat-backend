import { Exception } from './Exception';

export class UniqueConstraintException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'UniqueConstraintException';
  }
}
