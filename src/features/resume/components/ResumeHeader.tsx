import React from "react";
import { companyLogo } from "@/assets/png/Index";
import { Button } from "@/components/ui/button";

const ResumeHeader: React.FC = () => {
  return (
    <main className="h-full w-full flex border-b items-center ps-2 pe-2">
      <section className="flex items-center justify-start relative h-full w-full">
        {/* Resume Logo */}
        <img
          src={companyLogo}
          alt="company-logo"
          className="h-15 object-cover absolute left-[-2px]"
        />
        <p className="absolute left-18">Resume-Builder</p>
      </section>

      <section className="flex gap-3 items-center">
        <Button className="h-9" variant="outline">
          Login to your account
        </Button>
        <Button variant="default" className="bg-blue-600 h-9">
          Create Account
        </Button>
      </section>
    </main>
  );
};

export default ResumeHeader;
