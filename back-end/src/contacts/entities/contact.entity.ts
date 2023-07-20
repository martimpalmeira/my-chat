import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {
  constructor(name, email, profileDescroption) {
    this.name = name;
    this.email = email;
    this.profileDescription = profileDescroption;
  }

  @Prop()
  name: string;

  @Prop({ unique: true }) // Define o atributo como único
  email: string;

  @Prop()
  profileDescription: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
