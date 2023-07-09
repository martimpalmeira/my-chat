import "./Header.css";
import logo from "../../assets/logo.svg";
import profilePicture from "../../assets/profile-default-image.svg";
import { useState } from "react";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const handleDropDownClick = () => {
    setIsDropDownOpen((previousState) => !previousState);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a className="logo-link" href="#">
            MyChat
          </a>
          <img src={logo} alt="" />
        </div>

        <div className="profile-container" onClick={handleDropDownClick}>
          <img className="profile-img" src={profilePicture} alt="" />
          <div className="three-dots">
            <span className="dot"></span>
          </div>

          {isDropDownOpen && (
            <div className="profile-config-dropdown">
              <a href="#">Disconnect</a>
              <a href="#">Edit Profile</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
