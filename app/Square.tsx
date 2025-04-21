"use client";

import { useEffect, useRef } from "react";

const Square = ({
  easing,
  duration = 300,
}: {
  easing: "ease-in" | "ease-out" | "ease-in-out" | "linear" | "ease";
  duration?: number;
}) => {
  const squareRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const square = squareRef.current;
    if (!square) return;

    const parent = square.parentElement;
    if (!parent) return;

    const parentWidth = parent.offsetWidth;
    const squareWidth = square.offsetWidth;
    const laneWidth = parentWidth - squareWidth;

    const runAnimation = () => {
      animationRef.current?.cancel();

      square.style.transform = "translateX(0)";

      const animation = square.animate(
        [
          { transform: "translateX(0) rotate(0deg)" },
          { transform: `translateX(${laneWidth}px) rotate(360deg)` },
        ],
        {
          duration,
          easing,
          fill: "forwards",
        }
      );

      animationRef.current = animation;
    };

    runAnimation();

    const intervalId = setInterval(runAnimation, duration + 300);

    return () => {
      clearInterval(intervalId);
      animationRef.current?.cancel();
    };
  }, []);

  return <div ref={squareRef} className="size-24 bg-indigo-300 rounded-md" />;
};

export default Square;
