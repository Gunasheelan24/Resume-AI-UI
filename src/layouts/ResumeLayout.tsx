import React from "react";

import Footer from "@/features/resume/components/ResumeFooter";
import ResumeHeader from "@/features/resume/components/ResumeHeader";
import ResumeLandingPage from "@/features/resume/pages/resume-hero";

const ResumeLayout: React.FC = () => {
  return (
    <main className="grid grid-cols-[1fr] grid-rows-[8%_1fr_7%] h-screen">
      {/* header */}
      <section>
        <ResumeHeader />
      </section>

      {/* content */}
      <section className="self-center">
        <ResumeLandingPage />
      </section>

      {/* footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ResumeLayout;
