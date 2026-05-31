import { Button } from "@/components/ui/button";
import React from "react";
import WhyChoosingUsCard from "../../components/Card";
import {
  aiPoweredImg,
  editorImg,
  happyService,
  increase,
  matchingImg,
  secureImg,
} from "@/assets/png/Index";
import ResumePreviewCard from "../resume-card/Index";

const ResumeLandingPage: React.FC = () => {
  const getWhyChoosingUs: {
    img: string;
    title: string;
    description: string;
  }[] = [
    {
      img: secureImg,
      title: "Safe & Secure",
      description: "Your data stays private and protected.",
    },
    {
      img: aiPoweredImg,
      title: "AI-Powered",
      description: "Smart AI helps build stronger resumes faster.",
    },
    {
      img: editorImg,
      title: "Edit Directly",
      description: "Customize and update your resume anytime.",
    },
    {
      img: happyService,
      title: "Affordable Cost",
      description: "Premium features without the high price.",
    },
    {
      title: "Job Description Matching",
      description: "Compare resumes with job descriptions using AI.",
      img: matchingImg,
    },
    {
      img: increase,
      title: "Increase Hiring Chances",
      description: "Designed to help users stand out to recruiters.",
    },
  ];
  return (
    <main className="">
      <section>
        <div className="flex flex-col px-5 md:px-0 md:flex-row items-center justify-center h-screen gap-20">
          <div>
            <h1 className="text-2xl mt-10 md:text-5xl font-bold  mb-4">
              Build a Resume
              <span className="mt-2 block"> That Gets You Hired</span>
            </h1>

            <p className="text-md text-gray-400">
              Create ATS-optimized resume in minutes with AI Stand out. Get
              noticed, Land interviews
            </p>
            {/* Resume Buttong */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="mt-5 ps-4 pe-4 pt-5 pb-5  hover:bg-indigo-700 hover:text-white cursor-pointer"
              >
                Create your resume
              </Button>
              <Button
                variant="default"
                className="mt-5 ps-4 pe-4 pt-5 pb-5 hover:bg-indigo-700 hover:text-white cursor-pointer"
              >
                View Your Resumes
              </Button>
            </div>
          </div>
          <div className="-mt-10">
            <ResumePreviewCard />
          </div>
        </div>

        {/* why us */}
        <div className="mt-10">
          <p className="text-xl text-indigo-800 underline underline-offset-2 text-center font-semibold tracking-tight">
            Why Professionals Choose ResumeAI
          </p>

          <div className="grid grid-cols-2 gap-4 p-3 md:grid-cols-3 md:gap-x-5 mt-5 mb-5 md:gap-y-6">
            {getWhyChoosingUs.map(({ description, img, title }) => (
              <WhyChoosingUsCard
                img={img}
                title={title}
                descripiton={description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResumeLandingPage;
