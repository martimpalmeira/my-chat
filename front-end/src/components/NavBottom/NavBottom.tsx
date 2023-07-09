import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment , faUserGroup} from "@fortawesome/free-solid-svg-icons";

import './NavBottom.css'


const NavBottom = () => {
  return (
    <div className="bottom-menu-options">
      <div className="option">
        <FontAwesomeIcon className="chat-icon" icon={faComment} />
        <p>Chats</p>
      </div>
      <div className="option">
        <FontAwesomeIcon className="users-icon" icon={faUser} />
        <p>Users</p>
      </div>
      <div className="option">
        <FontAwesomeIcon className="groups-icon" icon={faUserGroup} />
        <p>Groups</p>
      </div>
    </div>
  );
};

export default NavBottom;
