"use client";

import { motion } from "framer-motion";
import BirthdayCake from "@/components/BirthdayCake";
import { GoldBow, LotusRangoli } from "@/components/ornaments";
import { site } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-12 text-center sm:py-16">
      <LotusRangoli className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-[42%] opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <GoldBow className="h-10 w-14" />
          <p className="font-display text-[11px] tracking-[0.32em] text-rosegold uppercase">
            A birthday card, just for you
          </p>
          <GoldBow className="h-10 w-14 -scale-x-100" />
        </div>

        <h1 className="font-script mx-auto max-w-4xl text-[2.7rem] leading-[1.15] text-maroon drop-shadow-sm sm:text-7xl md:text-8xl">
          {site.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/70 sm:text-lg">
          {site.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 mt-8"
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      >
        <BirthdayCake size="md" />
      </motion.div>

      <motion.a
        href="#cake"
        className="relative z-10 mt-8 inline-flex min-h-11 items-center text-xs tracking-[0.24em] text-maroon/70 uppercase focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Scroll for a little magic ↓
      </motion.a>
    </section>
  );
}
