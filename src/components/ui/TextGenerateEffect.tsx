"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className = "",
  duration = 0.4,
}: TextGenerateEffectProps) {
  const [displayedWords, setDisplayedWords] = useState("");
  const wordsArray = words.split(" ");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < wordsArray.length) {
        setDisplayedWords((prev) => {
          if (index === 0) return wordsArray[index];
          return prev + " " + wordsArray[index];
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, (duration * 1000) / wordsArray.length);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedWords}
    </motion.p>
  );
}
