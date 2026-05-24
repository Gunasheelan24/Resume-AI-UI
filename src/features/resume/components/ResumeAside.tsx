import React from "react";
import {
  LayoutDashboard,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "My Resume",
    icon: <FileText size={20} />,
  },
  {
    title: "Profile",
    icon: <User size={20} />,
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
  },
];

const ResumeAside: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col justify-between p-5">
      {/* Top */}
      <div>
        <h1 className="text-2xl font-bold mb-10">
          Resume<span className="text-cyan-400">AI</span>
        </h1>

        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400 transition">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default ResumeAside;
