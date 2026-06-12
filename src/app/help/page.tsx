"use client";

import Link from "next/link";
import { HelpCircle, Book, MessageCircle, Mail, ExternalLink } from "lucide-react";

const faqs = [
  {
    q: "GGTI 是什么？",
    a: "GGTI（Game Personality Indicator）是一个免费的游戏人格测试工具，通过 7 道精选题目，从战术风格、沟通方式、团队角色等多个维度，解析你在游戏中的性格画像。",
  },
  {
    q: "测试需要多长时间？",
    a: "完成整个测试大约需要 2-3 分钟。我们精心设计了 7 道题目，确保在最短时间内获取最准确的人格分析结果。",
  },
  {
    q: "测试结果准确吗？",
    a: "GGTI 基于经典的 MBTI 人格理论框架，结合游戏心理学研究设计。测试结果仅供参考，不代表你的全部游戏能力或性格特征。",
  },
  {
    q: "需要注册或付费吗？",
    a: "完全免费！GGTI 旨在帮助每一位玩家了解自己的游戏人格。无需注册、无需付费，即开即用。",
  },
  {
    q: "我的数据会被保存吗？",
    a: "GGTI 不会保存你的任何个人数据。测试结果仅存储在你的浏览器本地（localStorage），你随时可以清除这些数据。",
  },
  {
    q: "如何分享我的测试结果？",
    a: "测试完成后，你可以一键复制结果链接或分享到社交媒体。但请注意，分享的内容不包含任何可识别个人身份的信息。",
  },
  {
    q: "可以重新测试吗？",
    a: "当然可以！你随时可以点击「重新测试」按钮重新开始。之前的测试结果不会影响新的测试。",
  },
  {
    q: "人格类型会改变吗？",
    a: "游戏人格相对稳定，但也可能随着你的游戏经验、心态变化而略有不同。建议每 3-6 个月重新测试一次，以获得更准确的结果。",
  },
];

export default function HelpPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {/* Hero */}
      <div className="text-center" style={{ marginBottom: "3rem" }}>
        <div
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.8125rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          <HelpCircle size={16} style={{ color: "#06b6d4" }} />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>需要帮助？</span>
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>
          帮助中心
        </h1>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto" }}>
          关于 GGTI 的常见问题与解答
        </p>
      </div>

      {/* Quick Actions */}
      <div
        className="glass-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          padding: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        <Link href="/select" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem",
              borderRadius: "var(--radius)",
              background: "rgba(255,255,255,0.05)",
              transition: "all var(--transition)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Book size={20} style={{ color: "#8b5cf6" }} />
            <span style={{ color: "#fff", fontWeight: 600 }}>开始测试</span>
          </div>
        </Link>

        <a
          href="mailto:1229012566@qq.com"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem",
              borderRadius: "var(--radius)",
              background: "rgba(255,255,255,0.05)",
              transition: "all var(--transition)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Mail size={20} style={{ color: "#10b981" }} />
            <span style={{ color: "#fff", fontWeight: 600 }}>联系我们</span>
          </div>
        </a>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <MessageCircle size={24} style={{ color: "#ff1e3c" }} />
          常见问题
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <details
              key={index}
              open
              className="glass-card"
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius)",
                cursor: "pointer",
                transition: "all var(--transition)",
              }}
            >
              <summary
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#fff",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    fontSize: "1.25rem",
                    color: "rgba(255,255,255,0.5)",
                    transition: "transform var(--transition)",
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  marginTop: "1rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div
        className="glass-card text-center"
        style={{
          padding: "2.5rem",
          borderRadius: "var(--radius-lg)",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
        }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          仍有疑问？
        </h3>
        <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
          如果以上信息无法解答你的问题，欢迎通过邮件联系我们。
        </p>
        <a
          href="mailto:1229012566@qq.com"
          className="ea-btn ea-btn-primary"
          style={{ textDecoration: "none" }}
        >
          <Mail size={16} />
          发送邮件
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
