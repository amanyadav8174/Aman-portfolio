"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [currentLine, setCurrentLine] = useState(0);
  const wordsArray = words[currentLine].split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % words.length);
    }, 3000); // change line every 3 seconds

    return () => clearInterval(interval); // clear interval on component unmount
  }, [words.length]);

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, currentLine]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx > 1 ? "text-purple" : "dark:text-white text-black"
            } opacity-0`}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
