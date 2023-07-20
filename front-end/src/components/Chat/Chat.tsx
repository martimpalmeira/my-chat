import React, { useContext } from "react";
import "./Chat.css";
import chatHomeImage from "../../assets/chat-home-image.svg";
import profileDefaultPicture from "../../assets/profile-default-image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../../contexts/ChatContext";
import jwt_decode from "jwt-decode";
import { IChat } from "../../interfaces/IChat";
import { IMessage } from "../../interfaces/IMessage";
import { IContact } from "../../interfaces/IContact";

interface Props {
  chat: IChat | undefined;
}

export const Chat = ({ chat }: Props) => {
  const { userSelected } = useContext(ChatContext);

  // Token for test
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm_Do28gZGEgU2lsdmEiLCJpZCI6IjEiLCJwaG9uZSI6Iis1NSg3NSk5ODEyOTAzNjAifQ.xygoZqjkWdbPIWsZXMTAizA2PM8XWoO3rU06m9WiD0I"
  );

  let token: string = String(localStorage.getItem("token"));
  let decoded: any = jwt_decode(token);

  function formatTwoDigits(number: number) {
    if (number < 10 && number >= 0) return "0" + number;
    else {
      return number;
    }
  }

  return (
    <div className="chat-container">
      {!userSelected ? (
        <div className="chat-default-container">
          <img src={chatHomeImage} alt="" />
          <h2>
            <span className="mychat-title-span">MyChat</span> Web
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            sapiente tempora quis molestias, ullam nam officiis magni totam
            consequuntur numquam debitis ducimus culpa reiciendis
          </p>
        </div>
      ) : (
        <>
          <div className="chat-selected-user">
            <div className="contact">
              <img
                src={profileDefaultPicture}
                alt=""
                className="contact-profile-picture"
              />
              <div className="profile-description">
                <p className="profile-name">{userSelected?.name}</p>
                <p className="profile-status">{userSelected?.status}</p>
              </div>
            </div>
          </div>
          <div className="chat-messages-container">
            <div className="chat-date">04 Jul 2023</div>
            <div className="messages">
              {chat?.messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.user.id == decoded.id
                      ? "my-message-container"
                      : "other-message-container"
                  }`}
                >
                  <div
                    className={`message ${
                      message.user.id == decoded.id
                        ? "my-message"
                        : "other-message"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="message-send-time">
                      {formatTwoDigits(message.dateTime.getHours())}:
                      {formatTwoDigits(message.dateTime.getMinutes())}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-type-message-container">
            <div className="chat-type-message-input">
              <input type="text" placeholder="Type a message" />
              <div className="option emoji">
                <FontAwesomeIcon className="chat-icon" icon={faSmile} />
              </div>
              <div className="option clip">
                <FontAwesomeIcon className="chat-icon" icon={faPaperclip} />
              </div>
              <div className="option voice">
                <FontAwesomeIcon className="chat-icon" icon={faMicrophone} />
              </div>
            </div>

            <button className="add-contact-btn"></button>
          </div>{" "}
        </>
      )}
    </div>
  );
};
