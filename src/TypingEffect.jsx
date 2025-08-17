import React from "react";
import {ReactTyped} from "react-typed";

function TypingEffect() {
  return (
    <div style={{ fontSize: "1.5rem", fontFamily: "monospace" }}>
      <ReactTyped
        strings={["Hello, world!", "Typing effect in React!", "Cool, right?"]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
}

export default TypingEffect;