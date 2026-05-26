import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResumeHeader: React.FC = () => {
  return (
    <main className="grid grid-cols-2 xl:grid-cols-3 ps-3 pe-3 pb-3 pt-3 border-b border-b-chart-7">
      <section className="self-center">
        <div className="inline-flex items-center rounded-xl border border-gray-200/80 bg-white px-4 py-2 shadow-sm shadow-gray-200/50">
          <span className="text-md font-semibold tracking-tight text-gray-900">
            Resume
          </span>

          <span className="ml-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-white">
            AI
          </span>
        </div>
      </section>

      <section className="self-center hidden xl:block">
        <ul className="flex gap-9 items-center justify-center font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Build Your Resume</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </section>

      <section className="grid grid-flow-col justify-end items-center gap-2">
        <Button className="h-9" variant="outline">
          <Link to="/auth/signin">Sign in</Link>
        </Button>
        <Button variant="default" className="bg-blue-600 h-9">
          <Link to="/auth/signup">Get Started For Freee</Link>
        </Button>
      </section>
    </main>
  );
};

export default ResumeHeader;
