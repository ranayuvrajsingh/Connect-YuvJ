import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect({ text }) {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .callFunction(() => {})
            .pauseFor(2500)

            .callFunction(() => {})
            .start();
        }}
      />
    </div>
  );
}
