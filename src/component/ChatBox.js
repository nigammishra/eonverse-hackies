import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ChatBox.css"; // Import the CSS for styling

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Create a navigate function

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setLoading(true);

    // Simulating AI response
    setTimeout(() => {
      let aiResponse = "I'm here to assist you."; // Default response

      // AI response for specific user messages
      const lowerInput = input.toLowerCase();
      if (["hi", "hii", "hello", "hey"].includes(lowerInput)) {
        aiResponse = "Hello! How can I help you?";
      } else if (lowerInput.includes("how are you")) {
        aiResponse = "I'm just a bot, but I'm doing great! How about you?";
      } else if (lowerInput.includes("bye")) {
        aiResponse = "Goodbye! Have a great day!";
      } else if (lowerInput.includes("go to features")) { 
        aiResponse = "Sure! Navigating to the Features page...";
        setTimeout(() => {
          navigate("/fetures"); // Navigate to the Features page
        }, 1000);
      } else if (lowerInput.includes("go to tech stack")) { 
        aiResponse = "Sure! Navigating to the Tech Stack page...";
        setTimeout(() => {
          navigate("/techStack"); // Navigate to the Tech Stack page
        }, 1000);
      } else if (lowerInput.includes("go to demo")) { 
        aiResponse = "Sure! Navigating to the Demo page...";
        setTimeout(() => {
          navigate("/demo"); // Navigate to the Demo page
        }, 1000);
      } else if (lowerInput.includes("go to contact")) { 
        aiResponse = "Sure! Navigating to the Contact page...";
        setTimeout(() => {
          navigate("/contact"); // Navigate to the Contact page
        }, 1000);
      } else if (lowerInput.includes("go to signin")) { 
        aiResponse = "Sure! Navigating to the Signin page...";
        setTimeout(() => {
          navigate("/signin"); // Navigate to the Signin page
        }, 1000);
      } else if (lowerInput.includes("go to chat")) { 
        aiResponse = "Sure! Navigating to the Chat page...";
        setTimeout(() => {
          navigate("/chat"); // Navigate to the Chat page
        }, 1000);
      }

      const aiMessage = { text: aiResponse, sender: "ai" };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setLoading(false);
    }, 1000);
  };
 // Function to handle Enter key press
 const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
};
  return (
    <div>
      {/* Floating Chat Button */}
      <button className="chat-button" onClick={toggleChat}>
        <FaRegCommentDots size={30} />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <span>Hi there 👋</span>
            <button onClick={toggleChat}>&times;</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chat-bubble ai">Typing...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress} 
              placeholder="Enter your message..."
            />
            <button onClick={sendMessage} disabled={loading}>
              <IoSend size={20} />
            </button>
          </div>
          <div className="chat-footer">Powered by FrontendAce</div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
