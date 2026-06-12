export interface GameOption {
  id: string;
  name: string;
  description: string;
  accent: string;
  icon?: string;
}

export const gameOptions: GameOption[] = [
  {
    id: "apex-legends",
    name: "Apex Legends",
    description: "英雄技能与高速对抗并存，适合强调团队协作与临场判断。",
    accent: "#ff6b3d",
    icon: "/games/icons/apex-legends.jpg",
  },
  {
    id: "battlefield-6",
    name: "Battlefield 6",
    description: "以大规模战场体验为核心，适合突出战术推进与战局理解。",
    accent: "#4ea8ff",
    icon: "/games/icons/battlefield-6.jpg",
  },
  {
    id: "valorant",
    name: "VALORANT",
    description: "技能博弈与战术配合并重，适合展示执行与沟通能力。",
    accent: "#ff5f72",
  },
  {
    id: "cs2",
    name: "Counter-Strike 2",
    description: "以枪法与地图控制见长，适合强调稳定性与临场决策。",
    accent: "#f0b04d",
  },
  {
    id: "call-of-duty-warzone",
    name: "Warzone",
    description: "节奏紧凑、信息密度高，适合突出反应与局势读取。",
    accent: "#8bc6ff",
  },
  {
    id: "overwatch-2",
    name: "Overwatch 2",
    description: "角色分工鲜明，适合强调团队职责与节奏把控。",
    accent: "#ff9d3d",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    description: "建造与射击融合，适合突出创造性与即时适应能力。",
    accent: "#7c6cff",
  },
  {
    id: "rainbow-six-siege",
    name: "Rainbow Six Siege",
    description: "战术深度高，适合表现规划能力与高压执行。",
    accent: "#d7c27a",
  },
  {
    id: "pubg",
    name: "PUBG: Battlegrounds",
    description: "强调资源分配与圈型理解，适合表现耐心与判断。",
    accent: "#d8a53f",
  },
  {
    id: "the-finals",
    name: "THE FINALS",
    description: "高机动与环境破坏并存，适合展示灵活应变能力。",
    accent: "#ffcf5a",
  },
  {
    id: "escape-from-tarkov",
    name: "Escape from Tarkov",
    description: "风险管理与信息处理要求极高，适合突出谨慎与专注。",
    accent: "#8f9f7a",
  },
  {
    id: "destiny-2",
    name: "Destiny 2",
    description: "刷装成长与团队副本并重，适合体现长期投入与协作。",
    accent: "#b9a6ff",
  },
  {
    id: "halo-infinite",
    name: "Halo Infinite",
    description: "经典竞技节奏下更考验枪法、路线与资源控制。",
    accent: "#68c6d6",
  },
  {
    id: "splitgate-2",
    name: "Splitgate 2",
    description: "传送门机制带来高维博弈，适合展示空间理解能力。",
    accent: "#7d8cff",
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    description: "英雄技能联动鲜明，适合体现风格化战斗与合作意识。",
    accent: "#ff4f6d",
  },
  {
    id: "xdefiant",
    name: "XDefiant",
    description: "偏竞技快节奏体验，适合表现压枪、身位与连续判断。",
    accent: "#ffd257",
  },
  {
    id: "hunt-showdown",
    name: "Hunt: Showdown",
    description: "听觉博弈与风险权衡突出，适合强调耐心与时机选择。",
    accent: "#b48b60",
  },
  {
    id: "arena-breakout-infinite",
    name: "Arena Breakout: Infinite",
    description: "撤离玩法考验物资价值判断与路线规划能力。",
    accent: "#80d1b3",
  },
  {
    id: "delta-force",
    name: "Delta Force",
    description: "强调火力协同与多维战场判断，适合表现团队推进能力。",
    accent: "#72d7ff",
  },
  {
    id: "fragpunk",
    name: "FragPunk",
    description: "规则变化丰富，适合突出适应性与策略切换能力。",
    accent: "#ff78b2",
  },
];

export interface QuestionOption {
  text: string;
  type: string;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 0,
    text: "比赛中队友与你的战术思路产生分歧，你会怎么做？",
    options: [
      { text: "坚持己见，用战绩说服他们", type: "commander" },
      { text: "听取意见，快速适应新方案", type: "explorer" },
      { text: "调和双方，找到折中点", type: "harmonizer" },
      { text: "分析利弊，用数据支持决策", type: "strategist" },
    ],
  },
  {
    id: 1,
    text: "残局 1v1，你只剩 5 秒，但枪械优势不在，你的第一反应是？",
    options: [
      { text: "直接peek，赌一波反应和枪法", type: "commander" },
      { text: "绕路绕视野，创造有利地形", type: "explorer" },
      { text: "等队友报点，按信息决策", type: "harmonizer" },
      { text: "回忆对手习惯，推测其位置", type: "strategist" },
    ],
  },
  {
    id: 2,
    text: "连续输掉五局后，你最可能的状态是？",
    options: [
      { text: "越挫越勇，主动指挥反攻", type: "commander" },
      { text: "换换心情，聊聊骚话活跃气氛", type: "explorer" },
      { text: "安慰队友，维持团队稳定", type: "harmonizer" },
      { text: "沉默复盘，找出系统性原因", type: "strategist" },
    ],
  },
  {
    id: 3,
    text: "新版本更新后，你会优先？",
    options: [
      { text: "立刻开打，用实战感受变化", type: "commander" },
      { text: "探索新内容，体验所有改动", type: "explorer" },
      { text: "等队友问询，一起研究", type: "harmonizer" },
      { text: "先看攻略和数据，了解全局", type: "strategist" },
    ],
  },
  {
    id: 4,
    text: "队友打得很烂，但你不想伤感情，你会？",
    options: [
      { text: "私下指出问题，给出具体建议", type: "commander" },
      { text: "开玩笑缓解气氛，降低压力", type: "explorer" },
      { text: "自己多打carry，不提这事", type: "harmonizer" },
      { text: "等结束后整理数据再说", type: "strategist" },
    ],
  },
  {
    id: 5,
    text: "你最喜欢的比赛节奏是？",
    options: [
      { text: "越快越好，高强度对抗", type: "commander" },
      { text: "充满变数，有意外才有趣", type: "explorer" },
      { text: "稳中有序，配合默契最重要", type: "harmonizer" },
      { text: "步步为营，每个决策都精确", type: "strategist" },
    ],
  },
  {
    id: 6,
    text: "如果游戏是现实中的技能，你希望它是？",
    options: [
      { text: "领导千军的统帅之力", type: "commander" },
      { text: "穿越任何障碍的瞬移能力", type: "explorer" },
      { text: "感知队友情绪的共情力", type: "harmonizer" },
      { text: "预知未来三步的先知之眼", type: "strategist" },
    ],
  },
];
