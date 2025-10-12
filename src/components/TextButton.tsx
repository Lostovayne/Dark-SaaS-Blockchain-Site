import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type TextButtonProps = {
  color?: string;
  href?: string;
  ariaLabel?: string;
} & (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

export const TextButton = (props: TextButtonProps) => {
  const { className, children, color, href, ariaLabel, ...rest } = props;

  const baseStyles = twMerge(
    "text-sm font-heading uppercase font-extrabold tracking-wider inline-block min-h-[48px] min-w-[48px] flex items-center justify-center px-4 py-3",
    color === "lime"
      ? "text-lime-400 hover:text-lime-300"
      : color === "cyan"
        ? "text-cyan-400 hover:text-cyan-300"
        : color === "violet"
          ? "text-violet-400 hover:text-violet-300"
          : "text-fuchsia-400 hover:text-fuchsia-300",
    "transition-colors duration-300",
    className,
  );

  // Si tiene href, renderizar como enlace
  if (href) {
    return (
      <a
        href={href}
        className={baseStyles}
        aria-label={
          ariaLabel || (typeof children === "string" ? children : undefined)
        }
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }

  // Si no tiene href, renderizar como botón
  return (
    <button
      className={baseStyles}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
};
