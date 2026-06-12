"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Zap, Trophy, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const typeData: Record<string, {
  name: string;
  nameEn: string;
  color: string;
  description: string;
  traits: string[];
}> = {
  commander: {
    name: "指挥官",
    nameEn: "Commander",
    color: "#ff1e3c",
    description: "你是天生的领导者，具备出色的战略眼光和决策能力。在团队中，你总是能够站出来带领大家走向胜利。",
    traits: ["领导力", "决策力", "责任心", "战略思维"],
  },
  explorer: {
    name: "探险家",
    nameEn: "Explorer",
    color: "#06b6d4",
    description: "你充满好奇心，喜欢探索未知的世界。在游戏中，你总是寻找新的玩法和可能性。",
    traits: ["好奇心", "创造力", "适应力", "冒险精神"],
  },
  harmonizer: {
    name: "调和者",
    nameEn: "Harmonizer",
    color: "#10b981",
    description: "你是团队的粘合剂，擅长维护团队氛围和队员关系。你的存在让团队更加和谐。",
    traits: ["沟通力", "同理心", "包容心", "耐心"],
  },
  strategist: {
    name: "策略家",
    nameEn: "Strategist",
    color: "#f59e0b",
    description: "你善于分析局势，计算最优解。在每一场游戏中，你都在寻找胜利的方程式。",
    traits: ["分析力", "逻辑思维", "计算能力", "耐心"],
  },
};

export default function ResultPage() {
  const params = useParams();
  const typeId = params.type as string;
  const data = typeData[typeId];

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <p style={{ color: "rgba(255,255,255,0.6)" }}>未找到该人格类型</p>
        <Link href="/test">
          <Button style={{ marginTop: "1.5rem" }}>重新测试</Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {/* Back */}
      <Link href="/test">
        <button
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: "2rem",
            padding: "0.625rem 1rem",
            borderRadius: "var(--radius)",
            transition: "all var(--transition)",
          }}
        >
          <ArrowLeft size={16} />
          返回测试
        </button>
      </Link>

      {/* Result Hero */}
      <div
        className="glass-card animate-slide-up"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          padding: "3rem 2rem",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            backgroundColor: `${data.color}15`,
            border: `1px solid ${data.color}30`,
            color: data.color,
            marginBottom: "1.5rem",
          }}
        >
          <Zap size={14} />
          游戏人格类型
        </div>

        <div
          className="glass-card"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "var(--radius-xl)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            background: `linear-gradient(135deg, ${data.color}20, ${data.color}10)`,
            border: `1px solid ${data.color}30`,
            boxShadow: `0 8px 32px ${data.color}30`,
            animation: "ea-float 3s ease-in-out infinite",
          }}
        >
          <Trophy size={48} style={{ color: data.color }} />
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: data.color,
            marginBottom: "0.5rem",
            textShadow: `0 0 40px ${data.color}40`,
          }}
        >
          {data.name}
        </h1>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "1.5rem",
          }}
        >
          {data.nameEn}
        </p>

        <p
          style={{
            fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          {data.description}
        </p>
      </div>

      {/* Traits */}
      <div
        className="glass-card animate-slide-up"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
          marginBottom: "2rem",
          padding: "1.5rem",
          borderRadius: "var(--radius)",
          animationDelay: "0.1s",
        }}
      >
        {data.traits.map((trait, i) => (
          <span
            key={trait}
            className="glass-card"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              border: `1px solid ${data.color}30`,
              color: data.color,
              backgroundColor: `${data.color}10`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {trait}
          </span>
        ))}
      </div>

      {/* Stats Cards */}
      <div
        className="animate-slide-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
          animationDelay: "0.2s",
        }}
      >
        {[
          { icon: Target, label: "游戏风格", value: "进攻型" },
          { icon: Users, label: "团队定位", value: "领导核心" },
          { icon: TrendingUp, label: "胜率倾向", value: "55%+" },
          { icon: Trophy, label: "特质指数", value: "9.2/10" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card"
            style={{
              padding: "1.5rem",
              textAlign: "center",
              borderRadius: "var(--radius)",
              transition: "all var(--transition)",
              animationDelay: `${0.2 + i * 0.1}s`,
            }}
          >
            <stat.icon size={28} style={{ color: data.color, marginBottom: "0.75rem" }} />
            <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem" }}>
              {stat.label}
            </p>
            <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff" }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div
        className="animate-slide-up"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          animationDelay: "0.3s",
        }}
      >
        <Link href="/test">
          <Button>重新测试</Button>
        </Link>
        <Link href="/select">
          <Button variant="secondary">选择其他游戏</Button>
        </Link>
      </div>
    </div>
  );
}
