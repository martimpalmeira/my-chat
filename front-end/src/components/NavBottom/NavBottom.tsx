import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faUser,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import "./NavBottom.css";

const NavBottom = () => {
  
  const [selectedOption, setSelectedOption] = useState<string>('chats');

  function handleIconBtnClick(option: string){
    setSelectedOption(option)
  }


  return (
    <div className="bottom-menu-options">
      <div className="option" onClick={()=>handleIconBtnClick('chats')}>
        <FontAwesomeIcon
          className={`chat-icon ${
            selectedOption == "chats" && "selected-option"
          }`}
          icon={faComment}
        />
        <p className={`${selectedOption == "chats" && "selected-option"}`}>
          Chats
        </p>
      </div>
      <div className="option" onClick={()=>handleIconBtnClick('users')}>
        <FontAwesomeIcon
          className={`users-icon ${
            selectedOption == "users" && "selected-option"
          }`}
          icon={faUser}
        />
        <p className={`${selectedOption == "users" && "selected-option"}`}>
          Users
        </p>
      </div>
      <div className="option" onClick={()=>handleIconBtnClick('groups')}>
        <FontAwesomeIcon
          className={`groups-icon ${
            selectedOption == "groups" && "selected-option"
          }`}
          icon={faUserGroup}
        />
        <p className={`${selectedOption == "groups" && "selected-option"}`}>
          Groups
        </p>
      </div>
    </div>
  );
};

export default NavBottom;
