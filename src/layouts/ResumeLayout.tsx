import ResumeHeader from "@/features/resume/components/ResumeHeader";
import React from "react";

const ResumeLayout: React.FC = () => {
  return (
    <main className="grid grid-cols-[30%_1fr] grid-rows-[15%_1fr_15%] h-screen">
      {/* header */}
      <section className="col-span-2">
        <ResumeHeader />
      </section>

      {/* aside */}
      <section className=""></section>

      {/* content */}
      <section className=""></section>

      {/* footer */}
      <section className="col-span-2"></section>
    </main>
  );
};

export default ResumeLayout;
