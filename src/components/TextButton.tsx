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
    "text-sm font-heading uppercase font-extrabold tracking-wider inline-block",
    color === "lime"
      ? "text-lime-500 hover:text-lime-400"
      : color === "cyan"
        ? "text-cyan-500 hover:text-cyan-400"
        : color === "violet"
          ? "text-violet-500 hover:text-violet-400"
          : "text-fuchsia-500 hover:text-fuchsia-400",
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
