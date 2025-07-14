import React from "react";

interface AnimatedTextProps {
  text: string;
  ref: (el: HTMLDivElement | null) => void;
}

export const AnimatedText = ({ text, ref }: AnimatedTextProps) => {
  return (
    <div ref={ref} className="relative overflow-hidden">
      {text.split("").map((letter, i) => (
        <span
          key={i}
          className="inline-block translate-y-full opacity-0"
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
