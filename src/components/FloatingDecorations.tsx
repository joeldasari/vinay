"use client";

import { motion } from "framer-motion";
import { GoldBow, Heart, Petal, Sparkle, Star } from "@/components/ornaments";

const floaters = [
  { type: "heart", x: "6%", y: "12%", delay: 0, size: 22, color: "#e8a0b0" },
  { type: "sparkle", x: "18%", y: "28%", delay: 0.4, size: 16, color: "#e8c48a" },
  { type: "bow", x: "88%", y: "16%", delay: 0.2, size: 42, color: "" },
  { type: "petal", x: "78%", y: "38%", delay: 0.8, size: 18, color: "#f3c1cc" },
  { type: "star", x: "10%", y: "58%", delay: 0.6, size: 16, color: "#f4d4c4" },
  { type: "heart", x: "92%", y: "62%", delay: 1.1, size: 18, color: "#c9897b" },
  { type: "sparkle", x: "4%", y: "80%", delay: 0.3, size: 14, color: "#fff8f0" },
  { type: "petal", x: "84%", y: "82%", delay: 1.4, size: 20, color: "#e8d5f2" },
  { type: "bow", x: "8%", y: "36%", delay: 1.8, size: 34, color: "" },
  { type: "star", x: "70%", y: "10%", delay: 0.9, size: 14, color: "#e8c48a" },
  { type: "heart", x: "48%", y: "6%", delay: 1.6, size: 16, color: "#f4b8c5" },
  { type: "sparkle", x: "58%", y: "88%", delay: 0.5, size: 16, color: "#d4a574" },
] as const;

function Ornament({
  type,
  color,
}: {
  type: (typeof floaters)[number]["type"];
  color: string;
}) {
  const className = "h-full w-full drop-shadow-sm";

  if (type === "heart") return <Heart className={className} color={color} />;
  if (type === "sparkle") return <Sparkle className={className} color={color} />;
  if (type === "star") return <Star className={className} color={color} />;
  if (type === "petal") return <Petal className={className} color={color} />;
  return <GoldBow className={className} />;
}

export default function FloatingDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {floaters.map((item, index) => (
        <motion.div
          key={`${item.type}-${index}`}
          className="absolute"
          style={{ left: item.x, top: item.y, width: item.size, height: item.size }}
          animate={{ y: [0, -14, 0], rotate: [-8, 8, -8], opacity: [0.35, 0.9, 0.35] }}
          transition={{
            duration: 6 + index * 0.25,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <Ornament type={item.type} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
}
