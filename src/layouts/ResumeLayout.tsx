import React from "react";

import Footer from "@/features/resume/components/ResumeFooter";
import ResumeHeader from "@/features/resume/components/ResumeHeader";
import ResumeLandingPage from "@/features/resume/pages/resume-landing";

const ResumeLayout: React.FC = () => {
  return (
    <main className="grid grid-cols-[1fr] grid-rows-[10%_1fr_10%] h-screen">
      {/* header */}
      <section>
        <ResumeHeader />
      </section>

      {/* content */}
      <section>
        <ResumeLandingPage />
      </section>

      {/* footer */}
      <section className="absolute w-full bottom-0">
        <Footer />
      </section>
    </main>
  );
};

export default ResumeLayout;
