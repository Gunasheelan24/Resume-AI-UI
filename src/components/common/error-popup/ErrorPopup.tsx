import React, { useEffect } from "react";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { TiCancel } from "react-icons/ti";

export interface ErrorPopupProps {
  isSuccess: boolean;
  message: string;
  popupToogle: boolean;
  closePopup: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({
  isSuccess,
  message,
  popupToogle,
  closePopup,
}) => {
  // useEffect logic
  useEffect(() => {
    if (!popupToogle) return;

    // popup close timer logic
    const popupTimeOut = setTimeout(() => {
      closePopup();
    }, 5000);

    return () => {
      clearTimeout(popupTimeOut);
    };
  });

  return (
    <>
      {popupToogle && (
        <main className="fixed bottom-5 right-5 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <section className="flex relative items-start gap-4 min-w-[340px] rounded-2xl border border-emerald-400/30 bg-zinc-950/95 backdrop-blur-xl p-5 shadow-2xl shadow-emerald-500/10">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
              {isSuccess ? (
                <IoCheckmarkDoneCircle className="h-7 w-7 text-emerald-400" />
              ) : (
                <TiCancel className="h-7 w-7 text-emerald-400" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold tracking-wide text-emerald-400">
                {isSuccess ? "Success" : "Something went wrong"}
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => closePopup()}
              className="text-white absolute right-[-5px] z-0 top-[-5px] transition"
            >
              <MdOutlineCancel className="text-2xl hover:text-red-500 z-90" />
            </button>
          </section>
        </main>
      )}
    </>
  );
};

export default ErrorPopup;
