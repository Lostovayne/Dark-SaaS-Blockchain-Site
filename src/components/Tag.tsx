import type { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends ComponentPropsWithoutRef<"div"> {
  color?: string;
}

const Tag: FC<TagProps> = (props) => {
  const { children, color, className } = props;
  return (
    <div
      className={twMerge(
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/20 text-fuchsia-400 inline-flex rounded-full",
        color === "lime" && "bg-lime-500/20 text-lime-400",
        color === "cyan" && "bg-cyan-500/20 text-cyan-400",
        color === "violet" && "bg-violet-500/20 text-violet-400",
        color === "fuchsia" && "bg-fuchsia-500/20 text-fuchsia-400",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
