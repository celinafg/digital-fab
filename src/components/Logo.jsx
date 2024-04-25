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
        src="https://res.cloudinary.com/digifab/image/upload/v1714008645/digital-fab/square_n7urev.png"
        alt="Logo"
        className="spinning-image"
      />
      <p>HOME</p>
    </div>
  );
}

export default Logo;
