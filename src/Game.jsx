// Components
import { useGame } from "./GameLogic";

// Render
export default function Game() {
  const { restart, currentScore } = useGame();

  return (
    <>
      <h1>Whack-A-Mole</h1>
      <section id="welcome">
        <p>Welcome to Whack-A-Mole! Whack-A-Mole to earn points.</p>
        <p>How many moles can you whack?</p>
        <button onClick={restart}>Start Game</button>
      </section>
      <section id="highscores">
        <h2>Final Score: {currentScore}</h2>
        <p>( None yet... Play the game! )</p>
      </section>
    </>
  );
}
