import { motion } from "framer-motion";
import type { FC } from "react";

interface AnimatedHeaderProps {
  text: string;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedHeader: FC<AnimatedHeaderProps> = ({ text }) => {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", gap: "0.05em", justifyContent: "center" }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeader;
