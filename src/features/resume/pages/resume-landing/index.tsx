import { Button } from "@/components/ui/button";
import React from "react";

const ResumeLandingPage: React.FC = () => {
  return (
    <main className="mt-20">
      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-indigo-800 mb-4">
          Build a Resume
          <span className="mt-2 text-indigo-900"> That Gets You Hired</span>
        </h1>

        <p className="text-md text-gray-400">
          Create ATS-optimized resume in minutes with AI Stand out. Get noticed,
          Land interviews
        </p>

        {/* Resume Buttong */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="mt-5 ps-4 pe-4 pt-5 pb-5 hover:bg-indigo-700 hover:text-white cursor-pointer"
          >
            Create your resume
          </Button>
          <Button
            variant="default"
            className="mt-5 ps-4 pe-4 pt-5 pb-5 bg-indigo-500 hover:bg-indigo-700 hover:text-white cursor-pointer"
          >
            View Your Resumes
          </Button>
        </div>

        {/* why us */}
        <div className="mt-7">
          <p className="text-xl font-semibold tracking-tight text-gray-900">
            Why Professionals Choose ResumeAI
          </p>
        </div>
      </section>
    </main>
  );
};

export default ResumeLandingPage;
