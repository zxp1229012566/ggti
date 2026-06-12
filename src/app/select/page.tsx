"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const GAMES_PER_PAGE = 8;
const MAX_SELECTIONS = 5;

const games = [
  { id: "honor", name: "王者荣耀", category: "MOBA", accent: "#c89b3c", image: "/images/games/honor.jpg" },
  { id: "lol", name: "英雄联盟", category: "MOBA", accent: "#c89b3c", image: "/images/games/lol.jpg" },
  { id: "valorant", name: "无畏契约", category: "FPS", accent: "#ff4655", image: "/images/games/valorant.jpg" },
  { id: "peace", name: "和平精英", category: "FPS", accent: "#f5a623", image: "/images/games/peace.jpg" },
  { id: "pubg", name: "PUBG", category: "FPS", accent: "#f5a623", image: "/images/games/pubg.jpg" },
  { id: "csgo", name: "CS2", category: "FPS", accent: "#f5a623", image: "/images/games/cs2.jpg" },
  { id: "rainbow6", name: "彩虹六号", category: "FPS", accent: "#0078d4", image: "/images/games/rainbow6.jpg" },
  { id: "apex", name: "Apex 英雄", category: "FPS", accent: "#cd343f", image: "/images/games/apex.jpg" },
  { id: "deltaforce", name: "三角洲行动", category: "FPS", accent: "#1e90ff", image: "/images/games/deltaforce.jpg" },
  { id: "battlefield6", name: "Battlefield 6", category: "FPS", accent: "#e63946", image: "/images/games/battlefield-6.jpg" },
  { id: "overwatch", name: "守望先锋", category: "FPS", accent: "#fa9c1e", image: "/images/games/overwatch.jpg" },
  { id: "fortnite", name: "Fortnite", category: "FPS", accent: "#9b59b6", image: "/images/games/fortnite.jpg" },
  { id: "minecraft", name: "我的世界", category: "沙盒", accent: "#5d8c3e", image: "/images/games/minecraft.jpg" },
  { id: "dota2", name: "DOTA 2", category: "MOBA", accent: "#dc1458", image: "/images/games/dota2.jpg" },
  { id: "identityv", name: "第五人格", category: "RPG", accent: "#8b0000", image: "/images/games/identityv.jpg" },
];

export default function SelectPage() {
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(games.length / GAMES_PER_PAGE);
  const displayedGames = games.slice(
    (currentPage - 1) * GAMES_PER_PAGE,
    currentPage * GAMES_PER_PAGE
  );

  const toggleGame = (gameId: string) => {
    setSelectedGames((prev) => {
      if (prev.includes(gameId)) {
        return prev.filter((id) => id !== gameId);
      }
      if (prev.length >= MAX_SELECTIONS) {
        return prev;
      }
      return [...prev, gameId];
    });
  };

  const clearSelection = () => {
    setSelectedGames([]);
  };

  const isSelected = (gameId: string) => selectedGames.includes(gameId);
  const isMaxed = selectedGames.length >= MAX_SELECTIONS;

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "2rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "0.5rem",
            }}
          >
            Game Personality Indicator
          </p>
          <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }}>
            选择游戏
          </h1>
        </div>

        {/* Selection Status */}
        {selectedGames.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
              已选择 <span style={{ color: "#fff", fontWeight: 700 }}>{selectedGames.length}</span> / {MAX_SELECTIONS}
            </span>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {selectedGames.map((id) => {
                const game = games.find((g) => g.id === id);
                return (
                  <span
                    key={id}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      backgroundColor: `${game?.accent}20`,
                      border: `1px solid ${game?.accent}50`,
                      color: "#fff",
                    }}
                  >
                    {game?.name}
                  </span>
                );
              })}
            </div>
            <button
              onClick={clearSelection}
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 600,
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <X size={12} />
              清空
            </button>
          </div>
        )}
      </div>

      {/* Game Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {displayedGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            selected={isSelected(game.id)}
            disabled={isMaxed && !isSelected(game.id)}
            onToggle={() => toggleGame(game.id)}
          />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "2.5rem",
              padding: "0 1rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(0,0,0,0.2)",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Library · {games.length} Games
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <ChevronLeft size={16} />
          </Button>
          <span
            style={{
              minWidth: "4rem",
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      {/* Start Button */}
      {selectedGames.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
          }}
        >
          <Link href={`/test?games=${selectedGames.join(",")}`}>
            <Button size="lg" style={{ minWidth: "200px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <Check size={18} style={{ marginRight: "8px" }} />
              开始测试 ({selectedGames.length})
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

function GameCard({
  game,
  selected,
  disabled,
  onToggle,
}: {
  game: (typeof games)[0];
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        aspectRatio: "16 / 10",
        background: `linear-gradient(135deg, ${game.accent}20 0%, rgba(20,20,25,0.95) 100%)`,
        border: selected
          ? `2px solid ${game.accent}`
          : "1px solid rgba(255,255,255,0.1)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: 0,
        opacity: disabled ? 0.5 : 1,
        textAlign: "left",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.5,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${game.accent}20 0%, rgba(20,20,25,0.5) 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Selection Checkbox */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "24px",
          height: "24px",
          borderRadius: "6px",
          backgroundColor: selected ? game.accent : "rgba(0,0,0,0.5)",
          border: selected ? "none" : "2px solid rgba(255,255,255,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          backdropFilter: "blur(8px)",
        }}
      >
        {selected && <Check size={14} color="#fff" strokeWidth={3} />}
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.25rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 12px",
            borderRadius: "9999px",
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${game.accent}50`,
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          <Zap size={12} style={{ color: game.accent }} />
          {game.category}
        </div>
        <h3
          style={{
            fontSize: "1.0625rem",
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {game.name}
        </h3>
      </div>
    </button>
  );
}
