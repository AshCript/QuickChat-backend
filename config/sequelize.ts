import { Contact } from '../src/models/ContactModel';
import { Message } from '../src/models/MessageModel';
import { User } from '../src/models/UserModel';
import { SequelizeSingleton } from './SequelizeSingleton';

export const szInstance = SequelizeSingleton.getInstance();

export const szModels = {
  User: User(szInstance),
  Message: Message(szInstance),
  Contact: Contact(szInstance),
};
