import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Chat } from 'src/chats/entities/chat.entity';
import { Contact } from 'src/contacts/entities/contact.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  accessCode: string;

  @Prop()
  chats: Chat[];

  @Prop()
  contacts: Contact[];
}

export const UserSchema = SchemaFactory.createForClass(User);
