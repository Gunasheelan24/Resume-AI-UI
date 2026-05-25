import { Button } from "@/components/ui/button";
import React from "react";

const ResumeLandingPage: React.FC = () => {
  return (
    <main className="ps-10">
      <section className="flex flex-col items-start">
        <h1 className="text-4xl font-bold text-indigo-800">
          Build a Resume
          <span className="block mt-2 text-indigo-900">
            That Gets You Hired
          </span>
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          <span className="block">
            Create ATS-optimized resume in minutes with AI
          </span>
          <span className="block">Stand out. Get noticed, Land interviews</span>
        </p>

        {/* Resume Buttong */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="mt-5 hover:bg-indigo-700 hover:text-white cursor-pointer"
          >
            Create your resume
          </Button>
          <Button
            variant="default"
            className="mt-5 bg-indigo-500 hover:bg-indigo-700 hover:text-white cursor-pointer"
          >
            View Your Resumes
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ResumeLandingPage;
