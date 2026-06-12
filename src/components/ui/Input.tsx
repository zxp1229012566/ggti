"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="ea-input-group">
        {label && <label className="ea-label">{label}</label>}
        <input
          ref={ref}
          className={`ea-input ${error ? "ea-input-error" : ""} ${className}`}
          {...props}
        />
        {error && <p className="ea-input-error-msg">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="ea-input-group">
        {label && <label className="ea-label">{label}</label>}
        <textarea
          ref={ref}
          className={`ea-input ea-textarea ${error ? "ea-input-error" : ""} ${className}`}
          {...props}
        />
        {error && <p className="ea-input-error-msg">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
