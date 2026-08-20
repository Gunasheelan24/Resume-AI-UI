import { useState } from "react";

export default function MagneticCard() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6">
       <div
        onMouseMove={handleMove}
        className="relative w-80 h-52 rounded-3xl overflow-hidden border border-zinc-700 cursor-pointer">
        <div
          className="absolute inset-0 transition-all duration-100"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%,
              rgba(99,102,241,0.9),
              rgba(168,85,247,0.5),
              transparent 60%)`,
          }}
        />

        <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl font-bold">Magnetic Card</h2>
          <p className="text-zinc-400 text-sm mt-2">
            Move your mouse around ✨
          </p>
        </div>
      </div>
    </div>
  );
}
