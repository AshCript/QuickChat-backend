import { Exception } from './Exception';

export class ResourceNotFoundException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'ResourceNotFoundException';
  }
}
