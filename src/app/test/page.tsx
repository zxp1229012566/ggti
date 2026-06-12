"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { useState } from "react";

const questions = [
  {
    text: "在团队游戏中，你通常扮演什么角色？",
    options: [
      { label: "指挥大家行动，制定战术策略" },
      { label: "自由探索，寻找游戏中的隐藏内容" },
      { label: "协调团队氛围，维护队员关系" },
      { label: "分析局势，计算最优解" },
    ],
  },
  {
    text: "当你遇到一个强大的对手时，你会怎么做？",
    options: [
      { label: "正面迎战，相信团队配合" },
      { label: "寻找对方的弱点，伺机而动" },
      { label: "尝试与对方沟通，了解打法" },
      { label: "分析数据，制定针对性策略" },
    ],
  },
  {
    text: "你更倾向于哪种游戏风格？",
    options: [
      { label: "激进进攻，主动创造机会" },
      { label: "灵活应变，适应各种情况" },
      { label: "稳定发挥，保持团队节奏" },
      { label: "深思熟虑，每一步都有目的" },
    ],
  },
  {
    text: "在多人游戏中，你最看重什么？",
    options: [
      { label: "胜利和团队排名" },
      { label: "游戏过程中的新鲜体验" },
      { label: "与队友的愉快互动" },
      { label: "个人技术和意识的提升" },
    ],
  },
  {
    text: "当你犯了一个错误导致团队失败时，你会？",
    options: [
      { label: "主动承担责任，鼓励队友" },
      { label: "从中学习，下次避免" },
      { label: "调整心态，不让情绪影响下一局" },
      { label: "分析原因，总结经验教训" },
    ],
  },
  {
    text: "你更喜欢什么样的队友？",
    options: [
      { label: "执行力强，能配合我的指挥" },
      { label: "有创意，能带来惊喜" },
      { label: "心态好，能活跃气氛" },
      { label: "技术好，能一起分析问题" },
    ],
  },
  {
    text: "游戏结束后，你通常会做什么？",
    options: [
      { label: "复盘讨论，思考如何下次更好" },
      { label: "继续玩，探索更多内容" },
      { label: "和队友聊天，维护关系" },
      { label: "看数据回放，分析细节" },
    ],
  },
];

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(7).fill(null));

  const selectedAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleContinue = () => {
    if (selectedAnswer === null) return;
    if (isLastQuestion) {
      const result = ["commander", "explorer", "harmonizer", "strategist"][Math.floor(Math.random() * 4)];
      window.location.href = `/result/${result}`;
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      window.location.href = "/select";
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      {/* Back */}
      <button
        onClick={handleBack}
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
        返回选择游戏
      </button>

      {/* Progress */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem 1.25rem", borderRadius: "var(--radius)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Zap size={16} style={{ color: "#ff1e3c" }} />
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              问题 {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div
          style={{
            height: 6,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "9999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #ff1e3c, #ff6b81)",
              borderRadius: "9999px",
              transition: "width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 0 12px rgba(255, 30, 60, 0.5)",
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        className="glass-card animate-slide-up"
        style={{
          padding: "2rem",
          marginBottom: "1.5rem",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "0.75rem",
            }}
          >
            Game Personality Indicator
          </p>
          <h2
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.4,
            }}
          >
            {questions[currentQuestion].text}
          </h2>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {questions[currentQuestion].options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  padding: "1rem 1.25rem",
                  background: isSelected ? "rgba(255, 30, 60, 0.15)" : "rgba(30, 30, 36, 0.6)",
                  border: `1px solid ${isSelected ? "rgba(255, 30, 60, 0.5)" : "rgba(255, 255, 255, 0.08)"}`,
                  borderRadius: "var(--radius)",
                  color: isSelected ? "#fff" : "rgba(255,255,255,0.8)",
                  fontSize: "0.9375rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all var(--transition)",
                  transform: isSelected ? "scale(1.02)" : "scale(1)",
                }}
              >
                <span
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    background: isSelected ? "#ff1e3c" : "rgba(255,255,255,0.08)",
                    border: isSelected ? "#ff1e3c" : "1px solid rgba(255,255,255,0.15)",
                    color: isSelected ? "#fff" : "rgba(255,255,255,0.5)",
                    flexShrink: 0,
                    boxShadow: isSelected ? "0 4px 12px rgba(255, 30, 60, 0.4)" : "none",
                    transition: "all var(--transition)",
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span style={{ flex: 1 }}>{option.label}</span>
                {isSelected && (
                  <span
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 30, 60, 0.3)",
                      border: "1px solid rgba(255, 30, 60, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#ff1e3c",
                        boxShadow: "0 0 8px #ff1e3c",
                      }}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "0.375rem" }}>
          {questions.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: idx === currentQuestion ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor:
                  idx === currentQuestion
                    ? "#ff1e3c"
                    : idx < currentQuestion
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.15)",
                transition: "all var(--transition)",
                boxShadow: idx === currentQuestion ? "0 0 8px rgba(255, 30, 60, 0.5)" : "none",
              }}
            />
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={selectedAnswer === null}
          style={{
            minWidth: "140px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {isLastQuestion ? "查看结果" : "下一题"}
            <ArrowRight size={16} />
          </span>
        </Button>
      </div>
    </div>
  );
}
