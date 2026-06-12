"use client";

import { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  dark?: boolean;
}

export function Dialog({ isOpen, onClose, title, children, footer, dark = false }: DialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="ea-dialog-overlay"
      onClick={handleOverlayClick}
    >
      <div className={`ea-dialog ${dark ? "ea-dialog-dark" : ""}`} role="dialog" aria-modal="true">
        {title && (
          <div className="ea-dialog-header">
            <h3 className="ea-dialog-title">{title}</h3>
            <button className="ea-dialog-close" onClick={onClose} aria-label="关闭">
              <X size={20} />
            </button>
          </div>
        )}
        <div className="ea-dialog-body">{children}</div>
        {footer && <div className="ea-dialog-footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}
