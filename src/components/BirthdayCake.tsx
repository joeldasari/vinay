type BirthdayCakeProps = {
  blown?: boolean;
  size?: "md" | "lg";
};

const candles = [
  { left: 86, delay: "0s" },
  { left: 104, delay: "0.12s" },
  { left: 122, delay: "0.04s" },
  { left: 140, delay: "0.18s" },
  { left: 158, delay: "0.08s" },
];

const pearls = [18, 42, 66, 90, 114, 138, 162];

export default function BirthdayCake({
  blown = false,
  size = "lg",
}: BirthdayCakeProps) {
  return (
    <div
      className={`birthday-cake is-${size} ${blown ? "is-blown" : ""}`}
      aria-hidden="true"
    >
      <div className="absolute top-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gold/25 blur-2xl" />

      {candles.map((candle) => (
        <div
          key={candle.left}
          className="candle"
          style={{ left: candle.left, top: 88 }}
        >
          <span className="candle-wick" />
          <span className="flame" style={{ animationDelay: candle.delay }}>
            <span className="flame-core" />
          </span>
          <span className="smoke" />
        </div>
      ))}

      <div className="cake-rose" style={{ left: 104, top: 108 }} />
      <div className="cake-rose" style={{ left: 118, top: 102, transform: "rotate(25deg)" }} />
      <div className="cake-rose" style={{ left: 132, top: 108, transform: "rotate(55deg)" }} />

      <div className="cake-tier top">
        <span className="cake-drip" style={{ left: 12 }} />
        <span className="cake-drip" style={{ left: 48 }} />
        <span className="cake-drip" style={{ left: 82 }} />
      </div>
      <div className="cake-tier middle">
        <span className="cake-ribbon" />
        <span className="cake-drip" style={{ left: 20, background: "#f0b2b8" }} />
        <span className="cake-drip" style={{ left: 70, background: "#f0b2b8" }} />
        <span className="cake-drip" style={{ left: 116, background: "#f0b2b8" }} />
      </div>
      <div className="cake-tier bottom">
        {pearls.map((left) => (
          <span key={left} className="cake-pearl" style={{ left, top: 14 }} />
        ))}
        <span className="cake-drip" style={{ left: 24, background: "#e38aa0" }} />
        <span className="cake-drip" style={{ left: 86, background: "#e38aa0" }} />
        <span className="cake-drip" style={{ left: 148, background: "#e38aa0" }} />
      </div>
      <div className="cake-plate" />
    </div>
  );
}
