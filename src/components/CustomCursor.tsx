"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target && typeof e.target === 'object') {
        const target = e.target as HTMLElement;
        if (target.matches('a, button, [data-hover]')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: -4,
        left: -4,
        pointerEvents: "none",
        zIndex: 99999,
      }}
      animate={{
        width: isHovering ? 24 : 8,
        height: isHovering ? 24 : 8,
        backgroundColor: isHovering ? "transparent" : "#FF4D00",
        border: isHovering ? "1.5px solid #FF4D00" : "0px solid transparent",
        borderRadius: "50%",
      }}
      transition={{ duration: 0.15 }}
    />
  );
}
