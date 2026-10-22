"use client";

import { motion } from "framer-motion";
import PolaroidCard from "@/components/PolaroidCard";
import SectionHeading from "@/components/SectionHeading";
import { Heart, PaisleyCorner, Petal, Sparkle } from "@/components/ornaments";
import { photos } from "@/lib/content";

export default function PhotoGallery() {
  return (
    <section className="relative px-5 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Little memories"
        title="A scrapbook of you"
        subtitle="Three favourite frames, kept like polaroids in a diary."
      />

      <motion.div
        className="scrapbook-page mehendi-frame relative mx-auto max-w-5xl overflow-visible rounded-[28px] px-3 py-10 sm:px-10 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <PaisleyCorner className="absolute top-3 left-3 h-16 w-16 text-rosegold sm:h-20 sm:w-20" />
        <PaisleyCorner
          flip
          className="absolute top-3 right-3 h-16 w-16 sm:h-20 sm:w-20"
        />
        <PaisleyCorner className="absolute bottom-3 left-3 h-16 w-16 rotate-180 sm:h-20 sm:w-20" />
        <PaisleyCorner
          flip
          className="absolute right-3 bottom-3 h-16 w-16 rotate-180 sm:h-20 sm:w-20"
        />

        <Sparkle className="absolute top-16 left-1/2 h-5 w-5 -translate-x-10 text-gold" />
        <Heart className="absolute right-16 bottom-10 h-6 w-6" color="#e8a0b0" />
        <Petal className="absolute top-24 right-10 h-7 w-5 -rotate-12" color="#f3c1cc" />
        <Petal className="absolute bottom-20 left-10 h-6 w-4 rotate-12" color="#e8d5f2" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center md:min-h-[540px] md:flex-row">
          <PolaroidCard
            {...photos[0]}
            className="z-10 -mb-8 md:absolute md:top-16 md:left-6 md:mb-0"
            priority
          />
          <PolaroidCard
            {...photos[1]}
            className="z-20 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"
            showBow
            priority
          />
          <PolaroidCard
            {...photos[2]}
            className="z-10 -mt-6 md:absolute md:top-24 md:right-6 md:mt-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
