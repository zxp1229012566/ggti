import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "帮助中心 - GGTI",
  description: "GGTI 游戏人格测试常见问题解答与帮助指南。",
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
