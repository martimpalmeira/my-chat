import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import NavBottom from "../../components/NavBottom/NavBottom";
import { Chat } from "../../components/Chat/Chat";
import "./ContactsPage.css";
import { IContact } from "../../interfaces/IContact";
import { IMessage } from "../../interfaces/IMessage";
import { IChat } from "../../interfaces/IChat";
import { IUser } from "../../interfaces/IUser";
import { ChatContext } from "../../contexts/ChatContext";
import { useEffect } from "react";

const ContactsPage = () => {
  let contact1: IContact = {
    id: 1,
    name: "João da Silva",
    phone: "55(75)981290360",
    status: "Available",
  };

  let contact2: IContact = {
    id: 2,
    name: "Maria",
    phone: "55(71)981290360",
    status: "Available",
  };

  let contact3: IContact = {
    id: 3,
    name: "Felipe",
    phone: "55(74)981290360",
    status: "Available",
  };

  let message1: IMessage = {
    id: 1,
    content: "Mensagem do João para Maria",
    dateTime: new Date(),
    user: contact1,
  };

  let message2: IMessage = {
    id: 2,
    content: "Mensagem do João",
    dateTime: new Date(),
    user: contact1,
  };

  let message3: IMessage = {
    id: 3,
    content: "Mensagem da Maria pro João",
    dateTime: new Date(),
    user: contact2,
  };

  let message4: IMessage = {
    id: 4,
    content: "Mensagem do Felipe pro João",
    dateTime: new Date(),
    user: contact3,
  };

  let chat1: IChat = {
    id: 1,
    messages: [message1, message3],
    recipient: contact2,
  };

  let chat2: IChat = {
    id: 2,
    messages: [message2, message4],
    recipient: contact3,
  };

  let user: IUser = {
    id: 1,
    name: "João da Silva",
    phone: "+55(75)98129-0360",
    chats: [chat1, chat2],
  };

  const { userSelected } = useContext(ChatContext);

  function getChatByContactSelected(): IChat | undefined{
    const [chatToBeShown, setChatToBeShown] = useState<IChat>();

    useEffect(() => {
      if (userSelected) {
        user.chats.forEach((chat) => {
          if (chat.recipient.name == userSelected.name) {
            //console.log(chat.recipient)
            setChatToBeShown(chat)
            return;
          }
        });
      }
    }, [userSelected]);

    console.log(chatToBeShown)

    return chatToBeShown;
  }

  return (
    <div>
      <Header />
      <div className="contact-page-container">
        <div className="contact-page-left-container">
          <Contacts />
          <NavBottom />
        </div>
        <div className="contact-page-right-container">
          <Chat chat={getChatByContactSelected()} />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
