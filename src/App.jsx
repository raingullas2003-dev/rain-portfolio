
import { useState } from "react";
import "./index.css";
import "./App.css";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="min-h-screen bg-[#03060f] text-white">
      {!showPortfolio ? (
        <Landing onStart={() => setShowPortfolio(true)} />
      ) : (
        <Portfolio onReturn={() => setShowPortfolio(false)} />
      )}
    </div>
  );
}

export default App;
