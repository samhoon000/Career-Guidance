import { useState, useRef, useEffect } from "react";
import { sendToGroq } from "./utils/api.js";

export default function AiPanel({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    const newMsg = { role: "user", text: userMessage };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendToGroq(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        text: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="side-panel">
      <div className="panel-header">
        <h3>AI Assistant</h3>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chat-box" ref={chatBoxRef}>
        {messages.length === 0 && (
          <div className="msg assistant" style={{ alignSelf: "center", maxWidth: "100%", textAlign: "center", color: "#6b7280" }}>
            Ask me about education, career, learning paths, skills, courses, or certifications!
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>{m.text}</div>
        ))}
        {loading && (
          <div className="msg assistant">
            <span style={{ opacity: 0.6 }}>Thinking...</span>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about education or career..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

