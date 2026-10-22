"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldBow, WashiTape } from "@/components/ornaments";

type PolaroidCardProps = {
  src: string;
  alt: string;
  caption: string;
  rotation?: number;
  className?: string;
  showBow?: boolean;
  priority?: boolean;
};

export default function PolaroidCard({
  src,
  alt,
  caption,
  rotation = 0,
  className = "",
  showBow = false,
  priority = false,
}: PolaroidCardProps) {
  return (
    <motion.figure
      className={`polaroid relative w-[min(240px,86vw)] rounded-[6px] p-2.5 pb-1 sm:w-[260px] ${className}`}
      style={{ rotate: rotation }}
      whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <WashiTape className="absolute -top-3 left-1/2 -translate-x-1/2" />
      {showBow ? (
        <GoldBow className="absolute -top-7 -right-4 z-10 h-12 w-16" />
      ) : null}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-peach/40">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 70vw, 280px"
        />
      </div>
      <figcaption className="font-script mt-3 pb-1 text-center text-2xl text-maroon">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
