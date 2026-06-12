import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GGTI — 发现你的游戏人格",
  description: "通过7道专业题目，深度解析你的游戏性格。",
  keywords: "游戏人格测试, 性格测试, 游戏, 电竞",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main style={{ minHeight: "calc(100vh - 72px - 300px)" }}>
          <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
