export default function SparkleBackground() {
  return (
    <div className="page-glow pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="glow-orb top-[-8%] left-[8%] h-72 w-72 bg-blush/70" />
      <div className="glow-orb top-[18%] right-[-6%] h-80 w-80 bg-lavender/60" />
      <div className="glow-orb bottom-[8%] left-[30%] h-72 w-72 bg-peach/55" />
      <div className="glow-orb top-[48%] left-[-8%] h-64 w-64 bg-gold/25" />
      <div className="paper-grain absolute inset-0 opacity-70" />
    </div>
  );
}
