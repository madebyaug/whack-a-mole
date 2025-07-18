// Components
import { useGame } from "./GameLogic";

// Render
export default function GameEnd() {
  const { restart, currentScore, highScore, reset } = useGame();

  return (
    <>
      <h1>Whack-A-Mole</h1>
      <section id="welcome">
        <p>Welcome to Whack-A-Mole! Whack-A-Mole to earn points.</p>
        <p>How many moles can you whack?</p>
        <div id="buttons">
          <button onClick={restart}>Play Again</button>
          <button onClick={reset}>Reset Score</button>
        </div>
      </section>
      <section id="highscores">
        <h2>Final Score: {currentScore}</h2>
        <p>( Your Highest Score: {highScore} )</p>
      </section>
    </>
  );
}
