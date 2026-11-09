
import { useState } from "react";
import "./index.css";
import "./App.css";
import "./PageTransition.css";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function startPortfolio() {
    if (isTransitioning || showPortfolio) return;

    setIsTransitioning(true);
    setShowPortfolio(true);
  }

  function finishTransition(event) {
    if (event.target !== event.currentTarget) return;

    setShowLanding(false);
    setIsTransitioning(false);
  }

  function returnToLanding() {
    setShowPortfolio(false);
    setShowLanding(true);
    setIsTransitioning(false);
  }

  return (
    <div
      className={`app-stage ${
        isTransitioning ? "is-transitioning" : ""
      }`}
    >
      {showPortfolio && (
        <div
          className={`app-portfolio-layer ${
            isTransitioning ? "is-entering" : ""
          }`}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) {
              setIsTransitioning(false);
            }
          }}
        >
          <Portfolio onReturn={returnToLanding} />
        </div>
      )}

      {showLanding && (
        <div
          className={`app-landing-layer ${
            isTransitioning ? "is-exiting" : ""
          }`}
          onAnimationEnd={finishTransition}
        >
          <Landing onStart={startPortfolio} />
        </div>
      )}
    </div>
  );
}

export default App;
