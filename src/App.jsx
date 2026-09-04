import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Background from "./pages/Background";
import Projects from "./pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [messages, setMessages] = useState([
    {
      sender: "fairy",
      text: "Hello! 👋 I'm Fairy, Rain's portfolio assistant. Ask me about Rain's background, skills, education, or projects."
    }
  ]);

  return (
    <main className="app">

      {currentPage === "home" && (
        <div className="page-transition">
          <Home
            setCurrentPage={setCurrentPage}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      )}

      {currentPage === "background" && (
        <div className="page-transition">
          <Background
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {currentPage === "projects" && (
        <div className="page-transition">
          <Projects
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

    </main>
  );
}

export default App;