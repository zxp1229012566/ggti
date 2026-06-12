"use client";

import Link from "next/link";
import { Zap, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="ea-footer">
      <div className="container">
        <div className="ea-footer-grid">
          <div>
            <div className="ea-footer-brand flex items-center gap-2">
              <div className="ea-nav-brand-icon">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              GGTI
            </div>
            <p className="ea-footer-tagline">
              通过 7 道专业题目，深度解析你的游戏性格。
            </p>
          </div>

          <div>
            <h4 className="ea-footer-col-title">导航</h4>
            <ul className="ea-footer-links">
              <li><Link href="/">首页</Link></li>
              <li><Link href="/select">开始测试</Link></li>
              <li><Link href="/#about">关于项目</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="ea-footer-col-title">人格类型</h4>
            <ul className="ea-footer-links">
              <li><Link href="/result/commander">指挥官</Link></li>
              <li><Link href="/result/explorer">探险家</Link></li>
              <li><Link href="/result/harmonizer">调和者</Link></li>
              <li><Link href="/result/strategist">策略家</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="ea-footer-col-title">支持</h4>
            <ul className="ea-footer-links">
              <li><a href="#">帮助中心</a></li>
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">使用条款</a></li>
            </ul>
          </div>
        </div>

        <div className="ea-footer-bottom">
          <p className="ea-footer-legal">
            © 2026 GGTI. 发现你的游戏人格.
          </p>
          <div className="ea-footer-legal-links">
            <a href="#" aria-label="GitHub">
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
