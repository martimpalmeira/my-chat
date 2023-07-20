import { IChat } from "./IChat";
import { IContact } from "./IContact";

export interface IUser {
  id: string,
  name: string,
  phone: string,
  chats: IChat[],
  contacts: IContact[]
}
