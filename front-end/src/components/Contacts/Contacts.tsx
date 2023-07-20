import React, { useContext } from "react";
import "./Contacts.css";
import profileDefaultPicture from "../../assets/profile-default-image.svg";
import { IContact } from "../../interfaces/IContact";
import { useState } from "react";
import { KeyboardEvent } from "react";
import { ChatContext } from "../../contexts/ChatContext";

function Contacts() {

  const {userSelected, changeUserSelected} = useContext(ChatContext);

  let contacts: IContact[] = [];

  let contact1: IContact = {
    id: 1,
    name: "João",
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

  let contact4: IContact = {
    id: 4,
    name: "Marcos",
    phone: "55(74)9812903603",
    status: "Available",
  };

  contacts = [contact1, contact2, contact3, contact4];

  const [selectedContact, setSelectedOption] = useState<IContact>();

  const [filteredList, setFilteredList] = useState<IContact[]>(contacts);

  function handleSearchBarKeyUp(event: KeyboardEvent) {
    let value = (event.target as HTMLInputElement).value;
    if (value.trim() == "") {
      setFilteredList(contacts);
    } else {
      setFilteredList(() =>
        contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  }

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

  function handleContactClick(contact: IContact) {
    setSelectedOption(contact);
    changeUserSelected(contact)

  }

  

  return (
    <div className="contacts-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search User"
          onKeyUp={handleSearchBarKeyUp}
        />
        <button className="add-contact-btn"></button>
      </div>
      <div className="contacts-list">
        {filteredList.length == 0 && (
          <p className="no-contacts-found-message">Users not found</p>
        )}
        {sortContactsByName(filteredList).map((contact) => (
          <div
            className={`contact ${
              selectedContact == contact && "selected-contact"
            }`}
            onClick={() => handleContactClick(contact)}
            key={contact.id}
          >
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
}

export default Contacts;
