import React from "react";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import NavBottom from "../../components/NavBottom/NavBottom";
import { Chat } from "../../components/Chat/Chat";
import './ContactsPage.css'

const ContactsPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-page-container">
        <div className="contact-page-left-container">
          <Contacts />
          <NavBottom />
        </div>
        <div className="contact-page-right-container">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
