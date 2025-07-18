// Logic
import { useGame } from "./GameLogic";

// Components
import Game from "./Game";
import GameEnd from "./GameEnd";
import GameStart from "./GameStart";

// Render
export default function App() {
  const { phase } = useGame();
  if (phase === "PLAYING") return <GameStart />;
  if (phase === "END") return <GameEnd />;
  return <Game />;
}
