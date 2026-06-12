# GGTI - 游戏人格测试网站设计规范

## 1. Concept & Vision

GGTI 是一个面向 Z 世代游戏玩家的性格测试平台，融合赛博朋克美学与 Apple 式的极简液态玻璃质感。整体体验强调「沉浸感」——从进入页面的第一帧开始，用户就被带入一个流动的、充满未来感的数字空间。测试结果不仅仅是标签，而是一张属于玩家游戏人格的身份卡。

## 2. Design Language

### Aesthetic Direction
**参考**: Discord 深色主题 + Apple Vision Pro glassmorphism + 霓虹赛博朋克点缀

### Color Palette
```
Primary Background:    #0f0c29 → #302b63 → #24243e (动态渐变)
Surface (Glass):      rgba(255, 255, 255, 0.08)
Glass Border:         rgba(255, 255, 255, 0.15)
Glass Border Hover:   rgba(255, 255, 255, 0.30)
Primary Accent:       #8b5cf6 (紫色)
Secondary Accent:     #06b6d4 (青色)
Success:              #10b981
Warning:              #f59e0b
Text Primary:         #ffffff
Text Secondary:        rgba(255, 255, 255, 0.70)
Text Muted:           rgba(255, 255, 255, 0.50)
```

### Typography
- **标题字体**: Inter (Google Fonts) - weight 700/800
- **正文字体**: Inter - weight 400/500
- **中文字体回退**: "PingFang SC", "Microsoft YaHei", sans-serif
- **标题尺寸**: 3rem / 2.25rem / 1.5rem
- **正文尺寸**: 1rem / 0.875rem

### Spatial System
- 基础单位: 4px
- 间距节奏: 4, 8, 12, 16, 24, 32, 48, 64, 96
- 圆角: 12px (按钮) / 16px (卡片) / 24px (大卡片)

### Motion Philosophy
- **入场动画**: opacity 0→1, translateY 20px→0, 500ms ease-out, 交错间隔 100ms
- **悬浮效果**: scale 1→1.02, 200ms ease-out, 边框亮度提升
- **页面切换**: 淡入淡出 + 轻微位移, 400ms
- **液态玻璃光晕**: hover 时 radial-gradient glow 从中心扩散, 300ms
- **进度条**: 弹性动画, spring physics
- **问题卡片切换**: 滑动 + 淡入, 350ms cubic-bezier(0.4, 0, 0.2, 1)

### Visual Assets
- **图标库**: Lucide React (线性风格, stroke-width: 1.5)
- **装饰元素**: 
  - 背景浮动光点 (CSS animation)
  - 渐变光晕叠加层
  - 微妙的网格纹理
- **人格类型图标**: 自定义 SVG (每个类型独特)

## 3. Layout & Structure

### 页面结构
```
[Header - 毛玻璃导航栏]
  [主内容区 - 全屏渐变背景]
    [浮动光点装饰层]
    [页面内容]
[Footer - 极简版权信息]
```

### 响应式策略
- Mobile First
- 断点: 640px (sm) / 768px (md) / 1024px (lg)
- 测试页面在移动端全宽显示
- 结果页面在桌面端双栏布局

### 页面流程
```
首页 → 测试页 → 结果页
         ↓
    (返回/重测)
```

## 4. Features & Interactions

### 首页 (/)
- Hero 区域: 大标题 + 副标题 + CTA 按钮
- 特色介绍: 3 个玻璃卡片展示测试特点
- 立即开始按钮: hover 有液态扩散光晕效果

### 测试页 (/test)
- 顶部: 进度条 + 当前题号
- 中部: 问题卡片 (一次显示一题)
- 底部: 4 个选项按钮
- 交互:
  - 点击选项 → 卡片滑出 → 下一题滑入
  - 选择高亮 → 其他选项降低透明度
  - 禁止快速点击 (防抖 300ms)

### 结果页 (/result/[type])
- 顶部: 人格类型名称 + 专属图标
- 主体: 类型描述卡片
- 特性列表: 该类型的游戏风格特点
- 建议: 推荐的队友类型 / 适合的游戏风格
- 操作: 分享结果 / 重新测试

### 错误/边界状态
- 测试中断: 本地存储进度，可恢复
- 异常结果: 默认跳转类型 A

## 5. Component Inventory

### GlassButton
- **默认**: 半透明白色背景, backdrop-blur-xl, 细边框
- **Hover**: scale(1.02), 边框变亮, 出现光晕
- **Active**: scale(0.98)
- **Disabled**: opacity 50%, 无交互效果
- **变体**: Primary (紫色渐变填充) / Secondary (玻璃边框)

### GlassCard
- **默认**: bg-white/[0.08], backdrop-blur-2xl, border border-white/[0.15]
- **Hover**: border-white/[0.25], shadow 增强
- **变体**: Compact (padding 16px) / Standard (padding 24px) / Large (padding 32px)

### ProgressBar
- **轨道**: 玻璃轨道, 半透明
- **进度**: 紫色渐变填充, 弹性动画
- **标签**: 左侧当前/总数

### QuestionCard
- **容器**: 大圆角玻璃卡片, 居中
- **问题文字**: 大号白色字体, 居中
- **入场**: 从右侧滑入 + 淡入
- **退场**: 向左滑出 + 淡出

### TypeCard (结果页)
- **主卡**: 大尺寸玻璃卡片, 居中
- **类型图标**: 顶部居中, 72px
- **类型名称**: 渐变色文字
- **描述**: 正常透明度文字
- **入场**: 逐个元素依次淡入

## 6. Technical Approach

### Framework & Tooling
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Animation**: Framer Motion
- **State**: Zustand (测试状态管理)
- **Fonts**: next/font (Inter)

### Architecture
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── test/page.tsx       # 测试页
│   └── result/[type]/page.tsx  # 结果页
├── components/
│   ├── layout/             # 布局组件
│   ├── ui/                 # 基础 UI 组件
│   ├── test/               # 测试相关组件
│   └── result/             # 结果相关组件
├── store/                  # Zustand stores
├── data/                   # 静态数据 (问题/类型)
└── styles/                 # 全局样式
```

### Personality Test Logic
- **题数**: 7 道题
- **类型数**: 4 种人格类型 (指挥官/探险家/调和者/策略家)
- **计分**: 每题 4 选项各对应一种类型, 统计各类型得票
- **结果**: 票数最多的类型为最终人格

### Data Model
```typescript
type PersonalityType = 'commander' | 'explorer' | 'harmonizer' | 'strategist';

interface Question {
  id: number;
  text: string;
  options: { text: string; type: PersonalityType }[];
}

interface Result {
  type: PersonalityType;
  title: string;
  description: string;
  traits: string[];
  compatibleWith: PersonalityType[];
  recommendedGames: string[];
}
```

---

*Version 1.0 - Phase 1: 性格测试核心功能*
