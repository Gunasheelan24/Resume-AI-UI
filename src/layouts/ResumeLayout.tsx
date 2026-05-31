import React from "react";

import ResumeHeader from "@/features/resume/components/ResumeHeader";
import ResumeLandingPage from "@/features/resume/pages/resume-hero";
// import Footer from "@/features/resume/components/ResumeFooter";

const ResumeLayout: React.FC = () => {
  return (
    <main className="grid grid-cols-[1fr] grid-rows-[8%_90%_7%] h-screen bg-[#E7E7E9]">
      {/* header */}
      <section>
        <ResumeHeader />
      </section>

      {/* content */}
      <section className="self-center">
        <ResumeLandingPage />
      </section>

      {/* footer */}
      <section>{/* <Footer /> */}</section>
    </main>
  );
};

export default ResumeLayout;
