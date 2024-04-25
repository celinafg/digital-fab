import React, { useState } from "react";
import "./logo.css";

function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`logo spin-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/digital-fab/square.png"
        alt="Logo"
        className="spinning-image"
      />
      <p>HOME</p>
    </div>
  );
}

export default Logo;
