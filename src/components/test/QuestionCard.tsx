import { motion } from "framer-motion";
import { questions } from "@/data/questions";
import { useTestStore } from "@/store/testStore";
import { ArrowRight } from "lucide-react";

export function ProgressBar() {
  const currentQuestion = useTestStore((s) => s.currentQuestion);
  const total = Math.max(questions.length, 1);
  const progress = Math.min((currentQuestion / total) * 100, 100);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-white/50">问题 {currentQuestion + 1} / {total}</span>
        <span className="text-xs text-white/50">{Math.round(progress)}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
    </div>
  );
}

interface QuestionCardProps {
  title: string;
  description: string;
  onContinue: () => void;
  isTransitioning: boolean;
}

export function QuestionCard({ title, description, onContinue, isTransitioning }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass rounded-3xl p-8 md:p-12 text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
          <ArrowRight className="w-7 h-7 text-white/50" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">{title}</h2>
        <p className="text-white/60 leading-relaxed max-w-xl mx-auto mb-8">{description}</p>
        <button
          onClick={onContinue}
          disabled={isTransitioning}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          继续
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </motion.div>
  );
}
