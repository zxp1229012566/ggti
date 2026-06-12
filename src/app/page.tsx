"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ textAlign: "center", paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            className="glass-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2.5rem",
              animation: "ea-float 3s ease-in-out infinite",
            }}
          >
            <Zap size={16} style={{ color: "#ff1e3c" }} />
            10,000+ 玩家已测试
          </div>

          <h1
            className="animate-slide-up"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            发现你的
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #ff1e3c, #ff6b81)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              游戏人格
            </span>
          </h1>

          <p
            className="animate-slide-up"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "2.5rem",
              animationDelay: "0.1s",
            }}
          >
            7 道专业题目，深度解析你在游戏世界中的独特性格。
            <br />
            了解你的潜质、游戏偏好、团队价值与战略思维。
          </p>

          <div
            className="animate-slide-up"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              animationDelay: "0.2s",
            }}
          >
            <Link href="/select">
              <Button size="lg" style={{ minWidth: "200px" }}>
                开始测试
              </Button>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <span>无需注册</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span>7 道题</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span>2 分钟完成</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ paddingBottom: "4rem" }}>
        <div
          className="glass-card animate-slide-up"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 30, 60, 0.7)",
              marginBottom: "0.75rem",
            }}
          >
            Game Personality Indicator
          </p>

          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, marginBottom: "0.25rem" }}>
            关于 GGTI
          </h2>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1.5rem",
            }}
          >
            What is GGTI
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "1rem",
            }}
          >
            GGTI 通过 7 道精选题目，从战术风格、沟通方式、团队角色等多个维度，
            解析你在游戏中的性格画像。无论你是热衷竞技的 FPS 高手，
            还是休闲娱乐的 MOBA 玩家，都能找到属于你的答案。
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "1.5rem",
            }}
          >
            你的测试结果会归类为四种游戏人格类型之一：
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { label: "指挥官", color: "#ff1e3c" },
              { label: "探险家", color: "#06b6d4" },
              { label: "调和者", color: "#10b981" },
              { label: "策略家", color: "#f59e0b" },
            ].map((p, i) => (
              <span
                key={p.label}
                className="glass-card"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#fff",
                  borderLeft: `3px solid ${p.color}`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: p.color,
                    boxShadow: `0 0 8px ${p.color}`,
                  }}
                />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
