"use client";

import { motion } from "framer-motion";
import { FloralDivider } from "@/components/ornaments";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl px-4 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow ? (
        <p className="font-display mb-2 text-[11px] tracking-[0.28em] text-rosegold uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-script text-5xl text-maroon sm:text-6xl">{title}</h2>
      <FloralDivider className="mx-auto mt-3 h-8 w-56" />
      {subtitle ? (
        <p className="mt-2 text-sm text-ink/70 sm:text-base">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
