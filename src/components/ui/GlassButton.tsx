"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ variant = "default", size = "md", className = "", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3.5 text-base",
      lg: "px-12 py-4 text-lg",
    };

    const variantClasses = {
      default: "",
      primary: "liquid-btn-primary",
      ghost: "border-transparent hover:border-white/20",
    };

    return (
      <button
        ref={ref}
        className={`liquid-btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";
