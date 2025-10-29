// components/ui/button.jsx
import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}) {
  const Component = asChild ? "span" : "button";

  // basic Tailwind-y styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-[background,box-shadow,transform] duration-150 focus:outline-none focus:ring disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.99]",
    outline:
      "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.99]",
    ghost:
      "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.99]",
  };

  const sizes = {
    sm: "text-sm px-3 h-9",
    md: "text-sm px-4 h-10",
    lg: "text-base px-5 h-11",
  };

  return (
    <Component
      className={twMerge(
        clsx(
          baseStyles,
          sizes[size] || sizes.md,
          variants[variant] || variants.default
        ),
        className
      )}
      {...props}
    />
  );
}
