"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/select", label: "测试" },
  { href: "/#about", label: "关于" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="ea-nav">
      <Link href="/" className="ea-nav-brand">
        <div className="ea-nav-brand-icon">
          <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        GGTI
      </Link>

      <nav className="ea-nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`ea-nav-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ width: 16 }} />
        <Link href="/select" className="ea-btn ea-btn-primary ea-btn-sm">
          开始测试
        </Link>
      </nav>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="ea-nav-toggle"
        aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: pathname === link.href ? "#fff" : "rgba(255,255,255,0.6)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/select"
            onClick={() => setMobileOpen(false)}
            className="ea-btn ea-btn-primary"
            style={{ marginTop: "1rem" }}
          >
            开始测试
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer",
            }}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </header>
  );
}
