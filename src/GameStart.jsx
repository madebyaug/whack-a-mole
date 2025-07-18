import { useEffect } from "react";

// Logic
import { useGame } from "./GameLogic";

// Render
export default function GameStart() {
  const {
    molePosition,
    currentScore,
    setCurrentScore,
    time,
    setTime,
    setPhase,
    end,
  } = useGame();

  function handleClick(index) {
    if (index === molePosition) {
      setCurrentScore((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          setPhase("END");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <h1>Whack-A-Mole</h1>
      <section id="scoreboard">
        <div>Time: {time}</div>
        <button onClick={end}>Quit Game</button>
        <div>Score: {currentScore}</div>
      </section>
      <ul id="field">
        {holes.map((index) => {
          return (
            <li key={index} onClick={() => handleClick(index)}>
              {molePosition === index ? (
                <img src="./mole(2).png" alt="mole" />
              ) : (
                <img src="./hole.png" alt="hole" />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
