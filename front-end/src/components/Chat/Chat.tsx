import React from "react";
import "./Chat.css";
import chatHomeImage from "../../assets/chat-home-image.svg";
import profileDefaultPicture from "../../assets/profile-default-image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip, faMicrophone } from "@fortawesome/free-solid-svg-icons";

export const Chat = () => {
  return (
    <div className="chat-container">
      {/* <img src={chatHomeImage} alt="" />
      <h2><span className="mychat-title-span">MyChat</span> Web</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        sapiente tempora quis molestias, ullam nam officiis magni totam
        consequuntur numquam debitis ducimus culpa reiciendis
      </p> */}
      <div className="chat-selected-user">
        <div className="contact">
          <img
            src={profileDefaultPicture}
            alt=""
            className="contact-profile-picture"
          />
          <div className="profile-description">
            <p className="profile-name">Felipe</p>
            <p className="profile-status">Disponivel</p>
          </div>
        </div>
      </div>
      <div className="chat-messages-container">
        <div className="chat-date">04 Jul 2023</div>
        <div className="messages">
          <div className="my-message-container">
            <div className="my-message message">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus impedit deserunt modi! Aliquid voluptatibus accusamus iste id distinctio tempora assumenda alias esse, non quo corrupti eos, numquam quos delectus nemo?
                
              </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="other-message-container">
            <div className="other-message message">
              <p>Lorem ipsum dolor sit </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="my-message-container">
            <div className="my-message message">
              <p>
                Lorem ipsum dolor sit
                
              </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="my-message-container">
            <div className="my-message message">
              <p>
                Lorem ipsum dolor sit
                
              </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="other-message-container">
            <div className="other-message message">
              <p>Lorem ipsum dolor sit </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="other-message-container">
            <div className="other-message message">
              <p>Lorem ipsum dolor sit </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="my-message-container">
            <div className="my-message message">
              <p>
                Lorem ipsum dolor sit
                
              </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="my-message-container">
            <div className="my-message message">
              <p>
                Lorem ipsum dolor sit
                
              </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>

          <div className="other-message-container">
            <div className="other-message message">
              <p>Lorem ipsum dolor sit </p>
              <p className="message-send-time">10:22</p>
            </div>
          </div>
          
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
      </div>
    </div>
  );
};
