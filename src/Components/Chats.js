import React from "react";
import newMessage from "../icons/newMessgae.svg";
import message from "../icons/message.svg";
const Chats = ({ users }) => {
  const usersMessages = users.map((e, i) => (
    <div className="chatInfo" key={i}>
      <img src={require(`../profiles/${e.img}`)} alt="" />
      <div className="inf">
        <span>{e.name}</span>
        <span>Sent you a message</span>
      </div>
    </div>
  ));
  return (
    <div className="cahtsContainer">
      <div className="chats">
        <div className="prof">
          jo_ahmedd_
          <img src={newMessage} alt="" />
        </div>
        <div className="messageSections">
          <span className="activeMsg">PRIMARY</span>
          <span>GENERAL</span>
        </div>
        <div className="chat">
          {usersMessages.length === 0 ? (
            <span className="noMessages">No Chats Yet.</span>
          ) : (
            usersMessages
          )}
        </div>
      </div>
      <div className="newMessage">
        <div className="msg">
          <img src={message} alt="" />
          <h4>Your Message</h4>
          <p>Send private photos and messages to a friend or group.</p>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
