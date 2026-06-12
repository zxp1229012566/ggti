import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "使用条款与免责声明 - GGTI",
  description: "GGTI 游戏人格测试使用条款与免责声明。",
};

export default function TermsPage() {
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
          <AlertTriangle size={16} style={{ color: "#f59e0b" }} />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>使用前请阅读</span>
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>
          使用条款与免责声明
        </h1>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto" }}>
          最近更新：2026 年 6 月
        </p>
      </div>

      {/* Content */}
      <div className="glass-card" style={{ padding: "2rem", borderRadius: "var(--radius-lg)" }}>
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>01</span> 本政策覆盖什么
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本使用条款与免责声明适用于本服务提供的全部页面、测试流程、结果页及相关功能。
            用户在访问或使用本服务时，即视为已充分理解并同意接受本条款的全部约束。
            如用户不同意本条款的任何内容，应立即停止访问或使用本服务。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>02</span> 服务性质
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务为用户提供在线游戏人格测试相关内容，系供用户参考使用的非经营性互联网信息服务。
            本服务仅供休闲娱乐参考，不构成任何形式的专业心理评估、医疗诊断、职业指导
            或其他专业领域的意见或建议。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>03</span> 服务变更与中断
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务提供者保留随时变更、暂停、限制、中断或终止本服务全部或部分内容的权利，
            恕不另行通知。用户理解并同意，服务提供者不对因服务变更、暂停、限制、中断或终止
            而给用户造成的任何损失承担任何责任。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>04</span> 知识产权
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务涉及的全部内容，包括但不限于文字表述、数据、界面设计、版面框架、
            图表、图片、音频、视频、软件及程序等，其知识产权归本服务提供者所有，
            受中华人民共和国著作权法及相关国际公约保护。
            未经本服务提供者书面授权，用户不得以任何方式对上述内容进行复制、转载、
            修改、翻译、展示、传播或用于其他任何商业或非商业用途。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>05</span> 用户行为规范
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            用户在使用本服务时，应遵守中华人民共和国现行法律、行政法规、部门规章
            及规范性文件的规定，不得利用本服务从事任何违法活动。
            用户对其在本服务中发布、传播的全部内容及行为独立承担全部法律责任。
            如因用户行为导致本服务提供者遭受任何损失，用户应予以全额赔偿。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>06</span> 第三方内容
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务可能包含指向第三方网站、应用或内容的链接。
            第三方内容由其各自的运营者负责，本服务提供者不对其内容、合法性、可靠性
            或安全性做任何保证。用户与任何第三方之间的交易、通信或纠纷，
            均由用户与该第三方自行解决，本服务提供者不承担任何责任。
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>07</span> 适用法律
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本条款的订立、执行和解释均适用中华人民共和国法律。
            因本条款或用户使用本服务引起的或与之相关的任何争议，
            双方应首先通过友好协商解决；协商不成的，任一方可向有管辖权的人民法院提起诉讼。
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#8b5cf6" }}>08</span> 免责声明
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            本服务按"现状"提供，本服务提供者不对本服务的准确性、完整性、及时性、
            可靠性或安全性做任何明示或暗示的保证。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            在适用法律允许的最大范围内，本服务提供者不对因使用或无法使用本服务、
            或因依赖本服务内容而造成的任何直接损失、间接损失、偶然损失、
            特殊损失或惩罚性损失承担任何责任，包括但不限于利润损失、
            收入损失、数据丢失、商誉损失或其他经济损失，
            即使本服务提供者已被告知发生此类损失的可能性。
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "1rem" }}>
            本服务提供者不对因不可抗力、计算机病毒、网络故障、黑客攻击、
            系统维护或升级、第三方服务中断或其他非因本服务提供者过错导致的
            服务中断、数据丢失或任何其他损失承担责任。
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
