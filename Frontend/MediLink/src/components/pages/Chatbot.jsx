import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";
import "./Chatbot.css"; // ✅ Chatbot styles (in same folder)

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 👋 How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("chatbot-blur");
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes("appointment"))
      return "You can book an appointment from the 'Book Appointment' section.";
    if (msg.includes("emergency"))
      return "In case of emergency, tap the 'Emergency' tab — we’ll connect you with nearby hospitals.";
    if (msg.includes("medicine") || msg.includes("verify"))
      return "Use the 'Verify Medicine' section to check if a medicine is approved by CDSCO.";
    if (msg.includes("payment"))
      return "You can view or complete your payments from the 'Payments' section.";
    if (msg.includes("queue"))
      return "Your live queue number is visible in the 'Queue Tracker' below the dashboard.";
    if (msg.includes("help") || msg.includes("support"))
      return "You can always reach out through support@medilink.com for further assistance.";
    return "I'm not sure I understood. You can ask about appointments, emergencies, or medicine verification.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotResponse(input) },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <>
      {/* 🌈 Floating Chat Button */}
      <motion.button
        className="chatbot-float-btn"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 191, 166, 0.3)",
            "0 0 35px rgba(0, 191, 166, 0.5)",
            "0 0 20px rgba(0, 191, 166, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Chat Support"
        title="Chat with us"
      >
        <FaComments className="chatbot-icon-inner" />
      </motion.button>

      {/* 💬 Chat Overlay */}
      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-header">
            <h3>MediLink Assistant 💭</h3>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
