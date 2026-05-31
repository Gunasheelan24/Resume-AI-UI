import React from "react";
import { companyLogo } from "@/assets/png/Index";
import { Button } from "@/components/ui/button";

const ResumeHeader: React.FC = () => {
  return (
    <header className="pt-3 pe-2 flex justify-between">
      <section className="flex items-center">
        <img
          src={companyLogo}
          alt="CareerLens Logo"
          className="h-12 w-12 object-contain"
        />

        <h1 className="text-xl font-medium tracking-tight text-gray-900 -ms-1">
          Career<span className="font-bold">Lens</span>
        </h1>
      </section>

      <section className="self-center hidden xl:block relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[550px] rounded-full bg-[#F4F4F4]"></div>

        <ul className="flex gap-8 text-[0.9rem] font-medium relative">
          <li className="cursor-pointer hover:underline hover:underline-offset-3 hover:-translate-y-1 duration-100">
            Overview
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-3 hover:-translate-y-1 duration-100">
            Why Choose Us
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-3 hover:-translate-y-1 duration-100">
            How It Works
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-3 hover:-translate-y-1 duration-100">
            Pricing
          </li>
        </ul>
      </section>

      <section className="flex gap-2 items-center">
        <Button
          variant="outline"
          className="px-7 py-5 rounded-2xl cursor-pointer"
        >
          Login
        </Button>
        <Button className="px-7 py-5   rounded-2xl cursor-pointer">
          Get Started
        </Button>
      </section>
    </header>
  );
};

export default ResumeHeader;
