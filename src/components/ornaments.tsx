type OrnamentProps = {
  className?: string;
};

export function GoldBow({ className = "" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 80 56"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M40 28c8-16 26-22 32-12 6 10-6 18-18 16 8 4 10 14 2 18-8 4-14-6-16-14-2 8-8 18-16 14-8-4-6-14 2-18C26 34 14 26 20 16c6-10 24-4 20 12Z"
        fill="url(#bow-fill)"
        stroke="#c9897b"
        strokeWidth="1.2"
      />
      <circle cx="40" cy="28" r="6" fill="#f4d4c4" stroke="#c9897b" />
      <path
        d="M37 34c0 10-3 18-8 22M43 34c0 10 3 18 8 22"
        stroke="#c9897b"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="bow-fill" x1="12" y1="8" x2="70" y2="48">
          <stop stopColor="#f4b8c5" />
          <stop offset="1" stopColor="#e38aa0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Heart({ className = "", color = "#e8a0b0" }: OrnamentProps & { color?: string }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden="true">
      <path
        d="M12 20S2 13.4 2 7.6C2 4.5 4.5 2 7.6 2c1.8 0 3.4.9 4.4 2.3C13 2.9 14.6 2 16.4 2 19.5 2 22 4.5 22 7.6 22 13.4 12 20 12 20Z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#e8c48a" }: OrnamentProps & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5 13.8 9 21 12l-7.2 3L12 22.5 10.2 15 3 12l7.2-3L12 1.5Z"
        fill={color}
      />
    </svg>
  );
}

export function Star({ className = "", color = "#f4d4c4" }: OrnamentProps & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="m12 2 2.6 6.6L22 11l-6 4.4L17.6 22 12 18.2 6.4 22 8 15.4 2 11l7.4-2.4L12 2Z"
        fill={color}
      />
    </svg>
  );
}

export function Petal({ className = "", color = "#f3c1cc" }: OrnamentProps & { color?: string }) {
  return (
    <svg viewBox="0 0 20 28" className={className} aria-hidden="true">
      <path
        d="M10 1c6 6 9 12 8 18-1 6-5 8-8 8s-7-2-8-8C1 13 4 7 10 1Z"
        fill={color}
      />
    </svg>
  );
}

export function LotusRangoli({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {[0, 45, 90, 135].map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="100"
          rx="22"
          ry="68"
          fill="none"
          stroke="rgba(201, 137, 123, 0.35)"
          strokeWidth="1.2"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
      {[22.5, 67.5, 112.5, 157.5].map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="100"
          rx="14"
          ry="50"
          fill="rgba(248, 200, 212, 0.18)"
          stroke="rgba(227, 138, 160, 0.28)"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="10" fill="rgba(232, 196, 138, 0.45)" />
      <circle cx="100" cy="100" r="4" fill="#c9897b" />
    </svg>
  );
}

export function PaisleyCorner({ className = "", flip = false }: OrnamentProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 90"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M8 82c2-28 12-48 34-58 16-7 28 2 24 16-3 12-16 16-24 10 14 18 8 32-8 38-14 5-24-2-26-6Z"
        stroke="#c9897b"
        strokeWidth="1.3"
      />
      <path
        d="M22 70c8-10 20-16 28-12"
        stroke="#e38aa0"
        strokeWidth="1"
      />
      <circle cx="40" cy="46" r="3" fill="#e8c48a" />
      <path d="M10 28c10 2 16-8 10-16" stroke="#d4a574" strokeWidth="1" />
      <path d="M28 12c8 6 6 16-2 16" stroke="#e38aa0" strokeWidth="1" />
    </svg>
  );
}

export function FloralDivider({ className = "" }: OrnamentProps) {
  return (
    <svg viewBox="0 0 280 36" className={className} aria-hidden="true" fill="none">
      <path
        d="M10 18h86M184 18h86"
        stroke="#c9897b"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M118 18c8-12 22-12 22 0 0 12 14 12 22 0"
        stroke="#e38aa0"
        strokeWidth="1.2"
      />
      <circle cx="140" cy="18" r="3.5" fill="#e8c48a" />
      <circle cx="128" cy="14" r="2" fill="#f4b8c5" />
      <circle cx="152" cy="22" r="2" fill="#f4b8c5" />
    </svg>
  );
}

export function WashiTape({ className = "" }: OrnamentProps) {
  return (
    <div
      className={`h-6 w-16 -rotate-6 rounded-[2px] bg-[repeating-linear-gradient(90deg,#f4d4c4_0_8px,#f8c8d4_8px_16px)] shadow-sm ring-1 ring-rose/30 ${className}`}
      aria-hidden="true"
    />
  );
}

export function WaxSeal({ className = "" }: OrnamentProps) {
  return (
    <div
      className={`grid h-14 w-14 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#e38aa0,#8b3a4a)] shadow-[0_8px_18px_rgba(139,58,74,0.28)] ${className}`}
      aria-hidden="true"
    >
      <Heart className="h-6 w-6" color="#fff6f0" />
    </div>
  );
}
