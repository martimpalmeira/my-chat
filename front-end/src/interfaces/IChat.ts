import { IContact } from "./IContact";
import { IMessage } from "./IMessage";

export interface IChat {
    id: string,
    messages: IMessage[],
    recipient: IContact
}