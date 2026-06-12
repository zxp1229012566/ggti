"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PersonalityType = "commander" | "explorer" | "harmonizer" | "strategist";

interface TestState {
  selectedGame: string | null;
  currentQuestion: number;
  answers: Record<number, PersonalityType>;
  isComplete: boolean;
  isTransitioning: boolean;
  startTest: (gameId?: string | null) => void;
  selectGame: (gameId: string) => void;
  answerQuestion: (questionIndex: number, type: PersonalityType) => void;
  nextQuestion: () => void;
  setTransitioning: (value: boolean) => void;
  completeTest: () => void;
  resetTest: () => void;
  getResult: () => PersonalityType;
}

function calculateResult(answers: Record<number, PersonalityType>): PersonalityType {
  const scores: Record<PersonalityType, number> = {
    commander: 0,
    explorer: 0,
    harmonizer: 0,
    strategist: 0,
  };

  Object.values(answers).forEach((type) => {
    scores[type]++;
  });

  const entries = Object.entries(scores) as [PersonalityType, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

export const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      selectedGame: null,
      currentQuestion: 0,
      answers: {},
      isComplete: false,
      isTransitioning: false,

      startTest: (gameId = null) =>
        set({
          selectedGame: gameId,
          currentQuestion: 0,
          answers: {},
          isComplete: false,
          isTransitioning: false,
        }),

      selectGame: (gameId) =>
        set({
          selectedGame: gameId,
          currentQuestion: 0,
          answers: {},
          isComplete: false,
          isTransitioning: false,
        }),

      answerQuestion: (questionIndex, type) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: type },
        })),

      nextQuestion: () =>
        set((state) => ({
          currentQuestion: state.currentQuestion + 1,
        })),

      setTransitioning: (value) =>
        set({ isTransitioning: value }),

      completeTest: () =>
        set({ isComplete: true, isTransitioning: false }),

      resetTest: () =>
        set({
          selectedGame: null,
          currentQuestion: 0,
          answers: {},
          isComplete: false,
          isTransitioning: false,
        }),

      getResult: () => {
        const { answers } = get();
        return calculateResult(answers);
      },
    }),
    {
      name: "ggti-test-storage",
    }
  )
);
