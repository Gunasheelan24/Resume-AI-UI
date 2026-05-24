import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left */}
        <p className="text-sm text-slate-500 flex items-center gap-1">
          Built with <Heart size={14} className="text-red-500 fill-red-500" />{" "}
          by ResumeBuilder AI
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-black transition">
            <Github size={20} />
          </button>

          <button className="text-slate-600 hover:text-blue-600 transition">
            <Linkedin size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
