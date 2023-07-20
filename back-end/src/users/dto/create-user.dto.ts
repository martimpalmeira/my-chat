import { Chat } from 'src/chats/entities/chat.entity';
import { Contact } from 'src/contacts/entities/contact.entity';

export class CreateUserDto {
  id: string;
  name: string;
  email: string;
  accessCode: string;
  chats: Chat[];
  contacts: Contact[];
}
