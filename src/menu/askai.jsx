import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "./askai.css";

export default function AskAI() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [promptEntered, setPromptEntered] = useState(false);
  const [components, setComponents] = useState([]);

  async function getResponse(e) {
    e.preventDefault();
    setLoading(true);
    setPromptEntered(true);

    if (!prompt.trim()) {
      setPrompt("");
      setLoading(false);
      setPromptEntered(false);
      setComponents([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setComponents(data);
      } else {
        setComponents([]);
      }
    } catch (error) {
      console.log(error);
      setComponents([]);
    } finally {
      setLoading(false);
    }
  }

  function tryAgain() {
    setPrompt("");
    setComponents([]);
    setPromptEntered(false);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main className="chat-main">
        {!promptEntered ? (
          <div className="prompt-container">
            <form onSubmit={getResponse} className="prompt-form">
              <textarea
                placeholder="Enter prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button type="submit">Build PC</button>
            </form>
          </div>
        ) : loading ? (
          <div className="loading-container">
            <p>Loading...</p>
            <button onClick={tryAgain}>Ask Again</button>
          </div>
        ) : (
          <div className="response-container">
            <div className="component-names">
              {components.length > 0 ? (
                <p>{components.join(", ")}</p>
              ) : (
                <p className="no-products">No response</p>
              )}
              </div>
              <button onClick={tryAgain}>Ask Again</button>
            
          </div>
        )}
      </main>

      <footer className="chat-footer">
        Got a little knowledge about tech? Don't worry, we've got you covered.{" "}
        <span className="highlight">AskAI</span> in your language to build you a PC.
      </footer>
    </>
  );
}
