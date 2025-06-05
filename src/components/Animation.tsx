"use client";
import React, { useRef, useEffect, useState } from "react";

interface AnimationProps {
  texts: string[];
  bgColor?: string;
  textColor?: string;
}
// const tences = [
//   "You meet someone at an event.",
//   "You share your card. Maybe your number.",
//   "You get home and forget their name.",
//   "It’s not just you.",
//   "Paper cards go missing.",
//   "Names get mixed up.",
//   "Leads disappear.",
//   "In a country where everyone is building something,",
//   "we need better ways to stay connected.",
//   "Konva is here to help.",
// ];

const Animation: React.FC<AnimationProps> = ({ texts, bgColor, textColor }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [backgroundColor] = useState(bgColor || "black");
  const [textCol] = useState(textColor || "#FFFFFF");
  const [sentences] = useState<string[]>(texts);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setCurrentLine(0);
    } else {
      setCurrentLine(-1);
    }
  }, [inView]);

  useEffect(() => {
    if (currentLine === -1 || currentLine >= sentences.length) return;
    const lineLength = sentences[currentLine].length;
    const delay = 500 + lineLength * 60; // ms
    const timeout = setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentLine, sentences]);

  return (
    <div
      className=" overflow-hidden relative flex items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        ref={containerRef}
        className="w-[80%] sm:w-[60%] flex flex-col justify-center"
      >
        {sentences.map((sentence, sIdx) => (
          <div
            key={sIdx}
            className="text-xl md:text-2xl font-medium text-left py-3 animated-line"
          >
            {sentence.split("").map((char, cIdx) => {
              const style = {
                color: textCol,
                animationDelay:
                  sIdx === currentLine ? `${cIdx * 0.06}s` : undefined,
              };
              if (sIdx < currentLine) {
                return (
                  <p key={cIdx} className="letter visible" style={style}>
                    {char === " " ? "\u00A0" : char}
                  </p>
                );
              }
              if (sIdx === currentLine) {
                return (
                  <p key={cIdx} className="letter animating" style={style}>
                    {char === " " ? "\u00A0" : char}
                  </p>
                );
              }
              return (
                <p key={cIdx} className="letter future" style={style}>
                  {char === " " ? "\u00A0" : char}
                </p>
              );
            })}
          </div>
        ))}
        <style jsx>{`
          .letter {
            display: inline-block;
            transition: opacity 0.7s, filter 0.7s;
          }
          .letter.visible {
            opacity: 1;
          }
          .letter.animating {
            opacity: 0.1;
            animation: letterInk 0.3s forwards;
          }
          .letter.future {
            opacity: 0.1;
          }
          .animated-line {
            white-space: pre-line;
            word-break: keep-all;
          }
          @keyframes letterInk {
            from {
              opacity: 0.1;
            }
            to {
              opacity: 1;
              filter: blur(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Animation;
