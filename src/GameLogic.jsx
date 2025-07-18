import { createContext, useContext, useState, useEffect } from "react";

const GameLogic = createContext();

// Logic
export function GameProvider({ children }) {
  const [molePosition, setMolePosition] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [time, setTime] = useState(15);
  const [phase, setPhase] = useState("START");

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("highScore", currentScore);
    }
  }, [currentScore, highScore]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 9));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Back to Start
  const restart = () => {
    setMolePosition(null);
    setCurrentScore(0);
    setTime(15);
    setPhase("PLAYING");
  };

  // Reset High Score
  const reset = () => {
    setCurrentScore(0);
    setHighScore(0);
  };

  // Quits Game
  const end = () => {
    setCurrentScore(0);
    setHighScore(0);
    setPhase("END");
  };

  const value = {
    molePosition,
    currentScore,
    setCurrentScore,
    time,
    setTime,
    phase,
    setPhase,
    restart,
    highScore,
    setHighScore,
    reset,
    end,
  };
  return <GameLogic.Provider value={value}>{children}</GameLogic.Provider>;
}

export function useGame() {
  return useContext(GameLogic);
}
