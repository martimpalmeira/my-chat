import React from "react";
import "./Contacts.css";
import profileDefaultPicture from "../../assets/profile-default-image.svg";
import { IContact } from "../../interfaces/IContact";

function sortContactsByName(contacts: IContact[]): IContact[] {
  // Use the sort() method with a custom comparison function
  return contacts.sort((a, b) => {
    // Convert names to lowercase for case-insensitive sorting
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1; // nameA comes before nameB
    } else if (nameA > nameB) {
      return 1; // nameA comes after nameB
    } else {
      return 0; // names are equal
    }
  });
}

const Contacts = () => {
  let contacts: IContact[] = [];

  let contact1: IContact = {
    name: "João",
    phone: "55(75)981290360",
    status: "Available",
  };

  let contact2: IContact = {
    name: "Maria",
    phone: "55(71)981290360",
    status: "Available",
  };

  let contact3: IContact = {
    name: "Felipe",
    phone: "55(74)981290360",
    status: "Available",
  };

  let contact4: IContact = {
    name: "Marcos",
    phone: "55(74)981290360",
    status: "Available",
  };

   contacts = [contact1, contact2, contact3, contact4];

  return (
    <div className="contacts-container">
      <div className="search-bar">
        <input type="text" placeholder="Search User" />
        <button className="add-contact-btn"></button>
      </div>
      <div className="contacts-list">
        {contacts.length == 0 && (
          <p className="no-contacts-found-message">Users not found</p>
        )}
        {sortContactsByName(contacts).map((contact) => (
          <div className="contact" key={contact.phone}>
            <img
              src={profileDefaultPicture}
              alt=""
              className="contact-profile-picture"
            />
            <div className="profile-description">
              <p className="profile-name">{contact.name}</p>
              <p className="profile-status">{contact.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
