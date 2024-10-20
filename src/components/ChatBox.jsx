import React, { useState } from "react";
import "./ChatBox.css";
import { Link } from 'react-router-dom';

const emojis = [
  "😍",
  "😎",
  "😂",
  "😊",
  "😭",
  "😡",
  "👍",
  "👎",
  "❤️",
  "💔",
  "🎉",
  "🔥",
  "💯",
  "👏",
  "🙏",
  "💪",
  "🤔",
  "😴",
  "😱",
  "😜",
];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className="emoji-container">
        {emojis.map((emoji, index) => (
          <span
            key={index}
            className="emoji"
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <br />
      <center><Link to="/" className="homeButton">Home</Link></center>
    </div>
  );
};

export default ChatBox;
