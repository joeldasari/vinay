"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BirthdayCake from "@/components/BirthdayCake";
import ConfettiEffect from "@/components/ConfettiEffect";
import SectionHeading from "@/components/SectionHeading";
import { LotusRangoli } from "@/components/ornaments";
import { site } from "@/lib/content";
import { playCelebrationSound } from "@/lib/sound";

export default function CakeSection() {
  const [blown, setBlown] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const celebrationTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (celebrationTimer.current !== null) {
        window.clearTimeout(celebrationTimer.current);
      }
    };
  }, []);

  function blowCandles() {
    if (blown) return;
    setBlown(true);
    setCelebrating(true);
    playCelebrationSound();
    celebrationTimer.current = window.setTimeout(() => {
      setCelebrating(false);
    }, 2200);
  }

  function relight() {
    if (celebrationTimer.current !== null) {
      window.clearTimeout(celebrationTimer.current);
    }
    setBlown(false);
    setCelebrating(false);
  }

  return (
    <section id="cake" className="relative scroll-mt-6 px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Make a wish"
        title="Blow the candles, Maggieee"
        subtitle="Close your eyes for a second. Then tap the button."
      />

      <motion.div
        className="relative mx-auto flex max-w-xl flex-col items-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <LotusRangoli className="absolute top-8 left-1/2 h-72 w-72 -translate-x-1/2 opacity-40" />
        <ConfettiEffect active={celebrating} />

        <div className="relative z-10 py-6">
          <BirthdayCake blown={blown} size="lg" />
        </div>

        <motion.button
          type="button"
          onClick={blown ? relight : blowCandles}
          aria-pressed={blown}
          aria-label={blown ? site.relightButton : site.blowButton}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 mt-4 min-h-11 rounded-full bg-maroon px-8 py-3 text-sm font-semibold tracking-wide text-cream shadow-[0_10px_24px_rgba(139,58,74,0.28)] ring-2 ring-white/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          {blown ? site.relightButton : site.blowButton}
        </motion.button>

        <AnimatePresence>
          {blown ? (
            <motion.p
              key="wish"
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }}
              className="font-script mt-6 text-3xl text-maroon sm:text-4xl"
            >
              {site.wishText}
            </motion.p>
          ) : (
            <p className="mt-6 h-10 text-sm text-ink/50">The candles are waiting...</p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
