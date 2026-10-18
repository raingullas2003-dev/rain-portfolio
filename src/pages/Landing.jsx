import { useEffect, useRef, useState } from "react";
import Fairy from "../components/Fairy/Fairy";
import "./Landing.css";

function Landing({ onStart }) {
  const [isEntering, setIsEntering] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function startPortfolio() {
    if (isEntering) return;

    setIsEntering(true);

    timeoutRef.current = window.setTimeout(() => {
      onStart();
    }, 1050);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startPortfolio();
    }
  }

  return (
    <main className={`landing-screen ${isEntering ? "is-entering" : ""}`}>
      <div className="landing-stars" aria-hidden="true" />

      <header className="absolute left-0 right-0 top-0 z-10 px-6 py-7 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-300 sm:text-sm">
          Interactive Portfolio
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Rain&apos;s Portfolio
        </h1>
      </header>

      <section className="landing-content relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-200 sm:text-base">
          Your guide starts here
        </p>

        <div
          className="fairy-launcher"
          role="button"
          tabIndex={isEntering ? -1 : 0}
          aria-label="Start exploring Rain's portfolio"
          aria-disabled={isEntering}
          onClick={startPortfolio}
          onKeyDown={handleKeyDown}
        >
          <div className="fairy-launcher-glow" />
          <Fairy type="landing" />
        </div>

        <div
          className={`landing-introduction ${
            isEntering ? "intro-leaving" : ""
          }`}
        >
          <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl">
            Hi! I&apos;m Fairy.
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">
            Rain&apos;s AI Companion
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
            Click me to start exploring Rain&apos;s world.
          </p>

          <button
            type="button"
            onClick={startPortfolio}
            disabled={isEntering}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-400/40 bg-blue-500/10 px-7 py-3.5 text-sm font-semibold text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.12)] transition duration-300 hover:border-blue-300/70 hover:bg-blue-500/20 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] disabled:cursor-wait sm:text-base"
          >
            {isEntering ? "Entering your world..." : "Start exploring"}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>

      <footer className="absolute bottom-6 left-0 right-0 z-10 px-5 text-center text-xs tracking-wide text-slate-500 sm:text-sm">
        Designed with curiosity. Guided by Fairy.
      </footer>
    </main>
  );
}

export default Landing;