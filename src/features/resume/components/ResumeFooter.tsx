// import { Field, FieldLabel } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white px-6 py-4">
      <main className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left */}
        <section>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            From idea to interview — all in one place.
          </p>
        </section>

        {/* Right */}
        <section className="flex items-center gap-4">
          {/* <Field>
            <div className="flex gap-2">
              <FieldLabel htmlFor="email">email:</FieldLabel>
              <Input type="email" placeholder="something@gmail.com" required />
            </div>
          </Field> */}

          <button className="text-slate-600 hover:text-black transition cursor-pointer">
            <FaGithub size={20} />
          </button>

          <button className="text-slate-600 hover:text-blue-600 transition cursor-pointer">
            <FaLinkedin size={20} />
          </button>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
