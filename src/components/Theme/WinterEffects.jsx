import "./WinterEffects.css";

const snowflakes = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  delay: `-${(index * 3.7) % 22}s`,
  duration: `${13 + ((index * 7) % 15)}s`,
  size: `${7 + ((index * 5) % 10)}px`,
  drift: `${(index % 2 === 0 ? 1 : -1) * (12 + ((index * 11) % 28))}px`,
  opacity: 0.25 + ((index * 13) % 50) / 100,
}));

function WinterEffects() {
  return (
    <div className="winter-snowfall" aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <span
          key={index}
          className="winter-snowflake"
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            fontSize: flake.size,
            opacity: flake.opacity,
            "--snow-drift": flake.drift,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

export default WinterEffects;