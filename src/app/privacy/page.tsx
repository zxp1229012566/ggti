import type { Metadata } from "next";
import { Shield, Eye, Database, Lock, UserCheck, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "隐私政策 - GGTI",
  description: "GGTI 游戏人格测试隐私政策，了解我们如何收集、使用和保护您的数据。",
};

export default function PrivacyPage() {
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
          <Shield size={16} style={{ color: "#10b981" }} />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>保护你的隐私</span>
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>
          隐私政策
        </h1>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto" }}>
          最近更新：2026 年 6 月
        </p>
      </div>

      {/* Quick Summary */}
      <div
        className="glass-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          padding: "1.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        {[
          { icon: Eye, label: "不追踪", desc: "我们不追踪你的浏览行为" },
          { icon: Database, label: "本地存储", desc: "数据仅存在你的设备上" },
          { icon: Lock, label: "无账号", desc: "无需注册，无个人信息" },
          { icon: UserCheck, label: "你做主", desc: "你可以随时清除所有数据" },
        ].map((item, index) => (
          <div key={index}>
            <item.icon size={24} style={{ color: "#10b981", marginBottom: "0.5rem" }} />
            <div style={{ fontWeight: 600, color: "#fff", marginBottom: "0.25rem" }}>{item.label}</div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="glass-card" style={{ padding: "2rem", borderRadius: "var(--radius-lg)" }}>
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>01</span> 本政策覆盖什么
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本隐私政策适用于本服务提供的全部公开页面、测试流程、结果页及相关功能，
            以及与这些页面一起交付的静态资源和脚本。
            它涵盖网站直接处理的信息、为了测试体验而保存在你浏览器中的信息，
            以及通过第三方分析、安全和内容分发工具处理的信息。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>02</span> 网站可能处理哪些信息
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            网站可能处理技术信息，例如浏览器类型、设备类型、来源页面、页面访问记录和页面交互事件。
            其中一部分信息会通过日志、分析脚本或 CDN / 安全服务自动产生。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            如果你参与测试，网站还可能在你的浏览器中保存与结果相关的状态，
            例如最终人格类型、十五维快照、分享动作状态，以便结果页正确展示
            并保留最近一次测试上下文。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>03</span> 本服务不收集什么
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务为无账号体系的公开娱乐网站，不会主动收集个人身份信息。
            我们不会收集姓名、邮箱、电话号码、IP 地址、位置信息或浏览历史。
            本服务不会使用任何用于广告追踪的 Cookie。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>04</span> 浏览器存储与类似技术
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务可能使用浏览器本地存储，包括 localStorage 等机制，
            来保存测试过程、结果快照、分享动作和排行榜提交状态。
            这能帮助结果页识别你是否刚完成测试，也能减少同一浏览器环境下的重复提交。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            CDN / 安全服务也可能根据各自策略使用 cookie 或类似技术。
            相关处理会受到这些第三方自身政策与网站当前配置的约束。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>05</span> 排行榜与测试结果
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            如果你选择把结果提交到公开排行榜，网站可能会把一次提交标识和最终人格类型
            发送到排行榜接口，用于统计该人格的累计次数。
            网站默认不会把每一个访问结果都自动记入排行榜。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            排行榜页面展示的是按人格聚合后的公开统计数据。
            本服务不会为每位访问者建立公开个人主页，也不会把真实姓名身份
            直接绑定到公开排行榜页面。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>06</span> 数据保留与清除
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            保存在你浏览器里的测试状态主要由你自己控制。
            通常你可以通过清除站点数据、cookie 或浏览器缓存来移除这些信息。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            如果你不希望本站在浏览器中保存测试状态，可以停止使用测试流程，
            或在会话结束后清除本地数据。关闭 cookie、脚本或本地存储后，
            部分功能可能无法正常工作。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>07</span> 你的选择
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            你通常可以通过浏览器设置、隐私插件或网站展示的同意管理界面
            来控制 cookie 和类似技术。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            如果你禁用 cookie、本地存储或第三方脚本，
            测试、结果页、排行榜或分析统计功能都可能受到影响。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>08</span> 未成年人隐私
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务是一个公开娱乐性质网站，并非专门面向儿童设计，
            也不会主动以儿童为目标收集个人信息。
            如果你认为有未成年人的敏感信息被误提交到本服务，
            请停止使用相关功能，并通过公开提供的联系渠道联系站点运营方。
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>09</span> 政策更新
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            随着网站功能、法律要求或分析方案变化，本隐私政策可能会不定期更新。
            除非另有说明，你访问本页时展示的版本即为当时适用的版本。
          </p>
        </section>
      </div>

      {/* Last Updated */}
      <p className="text-center" style={{ marginTop: "2rem", color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>
        如有任何问题，请联系 <a href="mailto:1229012566@qq.com" style={{ color: "rgba(255,255,255,0.5)" }}>1229012566@qq.com</a>
      </p>
    </div>
  );
}
