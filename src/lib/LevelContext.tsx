'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Level } from '@/content/types';

interface LevelContextType {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelContext = createContext<LevelContextType>({
  level: 'beginner',
  setLevel: () => {},
});

// Explanation depth only. Controls which :::beginner / :::advanced callouts render.
// Never gates access to tracks or lessons. Persisted to a cookie so it survives reloads
// and can be read during SSR if needed.
export function LevelProvider({
  children,
  initialLevel = 'beginner',
}: {
  children: ReactNode;
  initialLevel?: Level;
}) {
  const [level, setLevelState] = useState<Level>(initialLevel);

  const setLevel = (next: Level) => {
    setLevelState(next);
    if (typeof document !== 'undefined') {
      document.cookie = `academy-level=${next};path=/;max-age=31536000;samesite=lax`;
    }
  };

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  return useContext(LevelContext);
}
