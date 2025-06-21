import { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const CutCornerButton = ({ className, children }: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={twMerge(
        "bg-fuchsia-500/20 px-4 py-2 uppercase font-extrabold font-heading text-sm tracking-wide relative",
        className
      )}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 mask-[linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
      {/* Agregado el SVG aquí */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 text-fuchsia-500"
      >
        <path d="M0 1H12.2667L23 11.7333V24" stroke="currentColor" strokeWidth="2"></path>
      </svg>
      <span className="leading-6">{children}</span>
    </button>
  );
};
