import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Contact } from 'src/contacts/entities/contact.entity';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop()
  messages: string[];

  @Prop()
  recipient: Contact;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
