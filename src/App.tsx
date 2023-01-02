
import { GameProvider } from './components/game-provider';
import { Game } from './components/game'
import { useModal } from './hooks/use-modal'
import { Modal } from './components/modal'
function App() {
  const { isOpen, toggle } = useModal()
  return (
    <GameProvider>
      {/* Welcome modal */}
      <Game />
      {/* Win Modal */}
      {/* Lose Modal */}
      {/* Settings */}
      <button onClick={toggle}>Open modal</button>
      <Modal isOpen={isOpen} toggle={toggle} title='hi'>
        Helllooo
      </Modal>
    </GameProvider>
  );
}

export default App;
