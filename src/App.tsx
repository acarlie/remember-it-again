
import { GameProvider } from './components/game-provider';
import { Game } from './components/game'

function App() {
  return (
    <GameProvider>
      {/* Welcome modal */}
      <Game />
      {/* Win Modal */}
      {/* Lose Modal */}
      {/* Settings */}
    </GameProvider>
  );
}

export default App;
