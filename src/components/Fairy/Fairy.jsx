import { useEffect, useRef } from "react";
import "./Fairy.css";

function Fairy({ type = "landing", winter = false }) {

const whiteRef = useRef(null);
const mediumRef = useRef(null);
const navyRef = useRef(null);

useEffect(() => {


let frame;

let t = 0;

function animate() {

  t += 0.15;

  if (whiteRef.current) {
    whiteRef.current.setAttribute(
      "r",
      93.6 + Math.sin(t) * 3
    );
  }

  if (mediumRef.current) {
    mediumRef.current.setAttribute(
      "r",
      69 + Math.sin(t * 1.2) * 5
    );
  }

  if (navyRef.current) {
    navyRef.current.setAttribute(
      "r",
      50 + Math.sin(t * 0.9) * 5
    );
  }

  frame = requestAnimationFrame(animate);

}

animate();

return () => {
  cancelAnimationFrame(frame);
};


}, []);

return (


<div className={`fairy fairy-${type}`}>

  <svg
    viewBox="0 0 320 320"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Outer glow circle */}

    <circle
      cx="160"
      cy="160"
      r="142"
      fill="#0a1e4a"
      opacity="0.4"
    />


    {/* Notch ring */}

    <circle
      cx="160"
      cy="160"
      r="112.8"
      fill="#0b1552"
    />


    {/* Top notch */}

    <polygon
      points="160,35 172,47 160,59 148,47"
      fill="#0b1552"
    />

    {/* Right notch */}

    <polygon
      points="285,160 273,172 261,160 273,148"
      fill="#0b1552"
    />

    {/* Bottom notch */}

    <polygon
      points="160,285 148,273 160,261 172,273"
      fill="#0b1552"
    />

    {/* Left notch */}

    <polygon
      points="35,160 47,148 59,160 47,172"
      fill="#0b1552"
    />


    {/* Animated rings */}

    <circle
      ref={whiteRef}
      cx="160"
      cy="160"
      r="93.6"
      fill="#f0f6ff"
    />

    <circle
      ref={mediumRef}
      cx="160"
      cy="160"
      r="69"
      fill="#848ee3"
    />

    <circle
      ref={navyRef}
      cx="160"
      cy="160"
      r="50"
      fill="#264f96"
    />

    <circle
      cx="160"
      cy="160"
      r="36"
      fill="#0b1552"
    />


    {/* Core light */}

    <circle
      cx="172.4"
      cy="171.4"
      r="10"
      fill="#ffffff"
    />

    {winter && (
    <g className="fairy-santa-hat">

      {/* Red hat */}
      <path
        d="M112 62
          C125 31 151 13 188 10
          C178 29 187 45 207 58
          C174 49 142 51 112 62Z"
        fill="#dc2626"
        stroke="#991b1b"
        strokeWidth="2"
      />

      {/* White hat brim */}
      <path
        d="M108 59
          C137 47 174 47 205 58
          L203 72
          C171 62 137 63 111 75Z"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      {/* White pom-pom */}
      <circle
        cx="188"
        cy="10"
        r="11"
        fill="#ffffff"
        stroke="#dbeafe"
        strokeWidth="2"
      />

    </g>
  )}

  </svg>

</div>


);

}

export default Fairy;
