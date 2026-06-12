"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTestStore, type PersonalityType } from "@/store/testStore";
import { GlassButton } from "@/components/ui/GlassButton";
import type { ResultType } from "@/data/types";
import {
  ArrowRight,
  ArrowLeft,
  Share2,
  Crown,
  Compass,
  Heart,
  Brain,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const typeIcons: Record<PersonalityType, typeof Crown> = {
  commander: Crown,
  explorer: Compass,
  harmonizer: Heart,
  strategist: Brain,
};

const typeGradientMap: Record<PersonalityType, string> = {
  commander: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  explorer: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  harmonizer: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  strategist: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
};

const typeColorMap: Record<PersonalityType, string> = {
  commander: "#f59e0b",
  explorer: "#10b981",
  harmonizer: "#ec4899",
  strategist: "#06b6d4",
};

interface ResultPageProps {
  typeData: ResultType;
}

function TraitTag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="trait-tag"
      style={{
        background: `${color}18`,
        borderColor: `${color}40`,
        color: color,
      }}
    >
      {label}
    </span>
  );
}

function StrengthItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} strokeWidth={2} />
      <span className="text-sm text-white/75 leading-relaxed">{text}</span>
    </div>
  );
}

function WeaknessItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-start gap-3">
      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} strokeWidth={2} />
      <span className="text-sm text-white/55 leading-relaxed">{text}</span>
    </div>
  );
}

export function ResultDisplay({ typeData }: ResultPageProps) {
  const router = useRouter();
  const typeId = typeData.id as PersonalityType;
  const Icon = typeIcons[typeId] ?? Crown;
  const gradient = typeGradientMap[typeId];
  const color = typeColorMap[typeId];

  const handleShare = async () => {
    const text = `我的游戏人格是「${typeData.title}」！${typeData.subtitle}\n快来测试你的游戏人格 → GGTI`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "我的游戏人格", text });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="result-hero"
      >
        <div
          className="result-type-badge"
          style={{
            background: `${color}18`,
            border: `1px solid ${color}40`,
            color: color,
          }}
        >
          <Zap className="w-3 h-3" strokeWidth={2.5} />
          游戏人格类型
        </div>

        <div
          className="result-type-icon"
          style={{ background: `${color}18`, borderColor: `${color}40` }}
        >
          <Icon className="w-12 h-12" strokeWidth={1.5} style={{ color }} />
        </div>

        <h1 className="result-type-name" style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {typeData.title}
        </h1>
        <p className="result-type-subtitle">{typeData.subtitle}</p>
        <p className="result-description">{typeData.description}</p>

        <div className="trait-tags">
          {typeData.traits.map((trait) => (
            <TraitTag key={trait} label={trait} color={color} />
          ))}
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color }} strokeWidth={2} />
            性格优势
          </h3>
          <div className="flex flex-col gap-3">
            {typeData.strengths.map((s, i) => (
              <StrengthItem key={i} text={s} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" style={{ color }} strokeWidth={2} />
            性格短板
          </h3>
          <div className="flex flex-col gap-3">
            {typeData.weaknesses.map((w, i) => (
              <WeaknessItem key={i} text={w} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Compatible Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" style={{ color }} strokeWidth={2} />
            最佳搭档
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeData.compatibleWith.map((compId) => (
              <Link
                key={compId}
                href={`/result/${compId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                style={{
                  background: `${typeColorMap[compId as PersonalityType]}15`,
                  borderColor: `${typeColorMap[compId as PersonalityType]}40`,
                  color: typeColorMap[compId as PersonalityType],
                }}
              >
                <span>{compId === "commander" ? "指挥官" : compId === "explorer" ? "探险家" : compId === "harmonizer" ? "调和者" : "策略家"}</span>
                <ChevronRight className="w-3 h-3" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recommended Games */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" style={{ color }} strokeWidth={2} />
            推荐游戏
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeData.recommendedGames.map((game) => (
              <span
                key={game}
                className="px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {game}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <GlassButton
          variant="primary"
          size="lg"
          onClick={handleShare}
          className="h-12 px-8 text-sm flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" strokeWidth={1.5} />
          分享结果
        </GlassButton>
        <Link href="/select">
          <GlassButton size="lg" className="h-12 px-8 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            重新测试
          </GlassButton>
        </Link>
        <Link href="/">
          <GlassButton size="lg" className="h-12 px-8 text-sm flex items-center gap-2">
            返回首页
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </GlassButton>
        </Link>
      </motion.div>
    </div>
  );
}
