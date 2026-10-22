"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Petal, Sparkle, Star } from "@/components/ornaments";

type Piece = {
  id: number;
  x: number;
  y: number;
  rotate: number;
  delay: number;
  type: "heart" | "star" | "petal" | "sparkle";
  color: string;
  size: number;
};

const colors = ["#e8a0b0", "#d4a574", "#e8d5f2", "#fdd5c8", "#8b3a4a", "#f4b8c5"];
const types: Piece["type"][] = ["heart", "star", "petal", "sparkle"];

function makePieces(): Piece[] {
  return Array.from({ length: 42 }, (_, id) => ({
    id,
    x: (Math.random() - 0.5) * 520,
    y: -80 - Math.random() * 280,
    rotate: Math.random() * 360,
    delay: Math.random() * 0.18,
    type: types[id % types.length],
    color: colors[id % colors.length],
    size: 12 + (id % 5) * 3,
  }));
}

function PieceIcon({ piece }: { piece: Piece }) {
  const className = "h-full w-full";
  if (piece.type === "heart") return <Heart className={className} color={piece.color} />;
  if (piece.type === "star") return <Star className={className} color={piece.color} />;
  if (piece.type === "petal") return <Petal className={className} color={piece.color} />;
  return <Sparkle className={className} color={piece.color} />;
}

export default function ConfettiEffect({ active }: { active: boolean }) {
  const pieces = useMemo(() => (active ? makePieces() : []), [active]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <AnimatePresence>
        {active
          ? pieces.map((piece) => (
              <motion.div
                key={`${active}-${piece.id}`}
                className="absolute top-1/2 left-1/2"
                style={{ width: piece.size, height: piece.size }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 }}
                animate={{
                  x: piece.x,
                  y: piece.y,
                  opacity: [1, 1, 0],
                  scale: 1,
                  rotate: piece.rotate,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, delay: piece.delay, ease: "easeOut" }}
              >
                <PieceIcon piece={piece} />
              </motion.div>
            ))
          : null}
      </AnimatePresence>
    </div>
  );
}
