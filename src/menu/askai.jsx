import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import "./askai.css";

export default function AskAI() {
  const [messages, setMessages] = useState([]); // chat history
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  async function getResponse(e) {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: prompt }];
    setMessages(newMessages);
    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      let botReply = "";
      if (Array.isArray(data) && data.length > 0) {
        botReply = data.join(", ");
      } else {
        botReply = "No response.";
      }

      // Add AI response
      setMessages((prev) => [...prev, { role: "ai", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "ai", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  }

  // Auto scroll down when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <>
      <Header />
      <main className="chat-main">
        <div className="chat-container">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.role === "user" ? "user-msg" : "ai-msg"}`}
            >
              {msg.text}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="chat-message ai-msg typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={getResponse} className="chat-input-form">
          <textarea
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={2}
          />
          <button type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </main>

      <footer className="chat-footer">
        Got a little knowledge about tech? Don't worry, we've got you covered.{" "}
        <span className="highlight">AskAI</span> in your language to build you a PC.
      </footer>
    </>
  );
}
