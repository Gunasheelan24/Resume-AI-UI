import React from "react";
import { companyLogo } from "@/assets/png/Index";

const ResumeHeader: React.FC = () => {
  return (
    <main className="h-full w-full">
      <section className="flex items-center justify-start relative h-full w-full">
        {/* Resume Logo */}
        <img
          src={companyLogo}
          alt="company-logo"
          className="h-20 object-cover absolute left-[-20px]"
        />
        <p className="absolute left-18">Resume-Builder</p>
      </section>
    </main>
  );
};

export default ResumeHeader;
