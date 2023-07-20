import { IContact } from "./IContact";

export interface IMessage {
    id: string,
    content: string,
    dateTime: Date,
    user: IContact
}