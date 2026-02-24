"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-sm font-normal uppercase tracking-wider transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infinite-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-infinite-gray-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: 
          "bg-transparent border border-infinite-green-500 text-infinite-green-500 hover:bg-infinite-green-500 hover:text-infinite-gray-950 hover:-translate-y-0.5 hover:shadow-green",
        secondary:
          "bg-infinite-gray-850 border border-infinite-gray-700 text-white hover:border-infinite-green-500 hover:text-infinite-green-500 hover:-translate-y-0.5",
        glass:
          "glass-panel text-white hover:glass-card-green hover:text-infinite-green-500 hover:-translate-y-0.5",
        outline:
          "bg-transparent border border-white/20 text-white hover:border-infinite-green-500 hover:text-infinite-green-500 hover:bg-infinite-green-500/5",
        ghost:
          "bg-transparent border-none text-white hover:text-infinite-green-500 hover:bg-white/5",
        magnetic:
          "bg-infinite-green-500 text-infinite-gray-950 hover:scale-105 hover:shadow-green-lg transition-transform",
      },
      size: {
        sm: "h-10 px-4 py-2 text-xs",
        default: "h-12 px-6 py-3 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12 p-0",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    loading = false,
    icon,
    iconPosition = "left",
    disabled,
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        )}
        {!loading && icon && iconPosition === "left" && icon}
        {children}
        {!loading && icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };