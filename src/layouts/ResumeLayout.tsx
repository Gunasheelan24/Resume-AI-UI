import ResumeHeader from "@/features/resume/components/ResumeHeader";
import React from "react";

const ResumeLayout: React.FC = () => {
  return (
    <main className="grid grid-rows-[15%_1fr_15%] grid-cols-[1fr_30%_1fr_1fr] h-screen">
      {/* header */}
      <section className="h-20">
        <ResumeHeader />
      </section>

      {/* aside */}
      <section></section>

      {/* content */}
      <section></section>

      {/* footer */}
      <section></section>
    </main>
  );
};

export default ResumeLayout;
