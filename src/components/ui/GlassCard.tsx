"use client";

import type { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

export function GlassCard({
  variant = "default",
  padding = "md",
  className = "",
  children,
  ...props
}: GlassCardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantClasses = {
    default: "glass",
    strong: "glass-strong",
    interactive: "glass glass-hover cursor-pointer transition-all duration-200",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${paddingClasses[padding]} rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
