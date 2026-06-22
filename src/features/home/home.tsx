import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-medium">
            👋 Hello, I'm
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight"></h1>

          <h2 className="text-2xl text-slate-300 mt-3">Full Stack Developer</h2>

          <p className="mt-6 text-slate-400 leading-8 max-w-xl">
            I build fast, modern, and responsive web applications with React,
            Node.js, and modern web technologies. Passionate about creating
            clean UI and exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition">
              View Projects
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition">
              Contact Me
            </button>
          </div>

          <div className="flex gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">25+</h3>
              <p className="text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
              <p className="text-slate-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-slate-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/profile.png"
              alt="Profile"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
