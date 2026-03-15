"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "em";
}

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  delay = 0,
  as: Tag = "span",
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {word}
    </MotionTag>
  );
};

export { BlurIn };
