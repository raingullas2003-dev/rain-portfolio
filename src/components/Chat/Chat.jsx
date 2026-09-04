import { useState, useEffect, useRef } from "react";
import "./Chat.css";

function Chat({
setCurrentPage,
messages,
setMessages
}) {

const [input, setInput] = useState("");

const chatWindowRef = useRef(null);

useEffect(() => {

  const chatWindow = chatWindowRef.current;

  if (chatWindow) {

    chatWindow.scrollTop =
      chatWindow.scrollHeight;

  }

}, [messages]);

function sendMessage() {


const text = input.trim();

if (!text) return;

const query = text.toLowerCase();

setMessages((previousMessages) => [
  ...previousMessages,
  {
    sender: "user",
    text: text
  }
]);

setInput("");

// ---------- BACKGROUND ----------

if (
  query.includes("background") ||
  query.includes("education") ||
  query.includes("skill") ||
  query.includes("experience") ||
  query.includes("certificate")
) {

  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "fairy",
      text: "Sure! Let me show you Rain's background."
    }
  ]);

  setTimeout(() => {
    setCurrentPage("background");
  }, 700);

  return;
}

// ---------- PROJECTS ----------

if (query.includes("project")) {

  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "fairy",
      text: "Of course! Here are Rain's projects."
    }
  ]);

  setTimeout(() => {
    setCurrentPage("projects");
  }, 700);

  return;
}

// ---------- GREETINGS ----------

if (
  query === "hi" ||
  query === "hello" ||
  query === "hey"
) {

  setMessages((previousMessages) => [
    ...previousMessages,
    {
      sender: "fairy",
      text: "Hello! 👋 How can I help you learn more about Rain?"
    }
  ]);

  return;
}

// ---------- DEFAULT ----------

setMessages((previousMessages) => [
  ...previousMessages,
  {
    sender: "fairy",
    text: "I'm not sure what you mean yet. You can ask me about Rain's background, education, skills, experience, certificates, or projects."
  }
]);


}

function handleKeyDown(event) {


if (event.key === "Enter") {
  sendMessage();
}


}

return (


<div className="chat-container">

  <div className="chat-window" ref={chatWindowRef}>

    {messages.map((message, index) => (

      <div
        key={index}
        className={`message ${message.sender}`}
      >

        <strong>
          {message.sender === "fairy" ? "Fairy" : "You"}
        </strong>

        <p>
          {message.text}
        </p>

      </div>

    ))}

  </div>


  <div className="chat-input-area">

    <input
      type="text"
      placeholder="Ask Fairy anything about Rain..."
      value={input}
      onChange={(event) => setInput(event.target.value)}
      onKeyDown={handleKeyDown}
    />

    <button onClick={sendMessage}>
      Send
    </button>

  </div>

</div>


);

}

export default Chat;
