"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PaisleyCorner, WaxSeal } from "@/components/ornaments";
import { letterParagraphs, site } from "@/lib/content";

export default function MessageLetter() {
  return (
    <section className="relative px-5 py-16 sm:py-24">
      <SectionHeading
        eyebrow="From the heart"
        title="A letter for you"
        subtitle="Read this slowly. It was written just for this day."
      />

      <motion.article
        className="letter-card mehendi-frame relative mx-auto max-w-2xl rounded-[28px] px-6 py-10 sm:px-12 sm:py-14"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <PaisleyCorner className="absolute top-4 left-4 h-14 w-14" />
        <PaisleyCorner flip className="absolute top-4 right-4 h-14 w-14" />
        <PaisleyCorner className="absolute bottom-4 left-4 h-14 w-14 rotate-180" />
        <PaisleyCorner flip className="absolute right-4 bottom-4 h-14 w-14 rotate-180" />

        <p className="font-display text-center text-[11px] tracking-[0.28em] text-rosegold uppercase">
          For {site.honoree}
        </p>
        <h3 className="font-script mt-2 text-center text-4xl text-maroon sm:text-5xl">
          {site.title}
        </h3>

        <div className="font-letter mt-8 space-y-5 text-[1.08rem] leading-8 text-ink/85 sm:text-[1.18rem] sm:leading-9">
          {letterParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <WaxSeal className="mx-auto mt-10" />
      </motion.article>
    </section>
  );
}
