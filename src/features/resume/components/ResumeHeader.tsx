import React from "react";
import { companyLogo } from "@/assets/png/Index";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResumeHeader: React.FC = () => {
  return (
    <main className="h-full w-full flex border-b  items-center ps-2 pe-2">
      <section className="md:flex md:items-center md:justify-start relative h-full w-full hidden">
        {/* Resume Logo */}
        <img
          src={companyLogo}
          alt="company-logo"
          className="h-15 object-cover absolute left-[-2px]"
        />
        <p className="absolute left-18">Resume-Builder</p>
      </section>

      <section className="flex gap-3 items-center md:justify-end justify-between w-full">
        <Button className="h-9" variant="outline">
          <Link to="/auth/signin">Login to your account</Link>
        </Button>
        <Button variant="default" className="bg-blue-600 h-9">
          <Link to="/auth/signup">Create Account</Link>
        </Button>
      </section>
    </main>
  );
};

export default ResumeHeader;
