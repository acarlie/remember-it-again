/** @jsxImportSource @emotion/react */

import { GameProvider } from './components/game-provider';
import { Game } from './components/game'
import { useModal } from './hooks/use-modal'
import { Modal } from './components/modal'

import { css } from '@emotion/react';
import { theme } from './theme/theme'

const app = css`
  background: ${theme.color.neutral0};
  color: ${theme.color.neutral500};
  font-family: 'Space Grotesk', sans-serif;
`

function App() {
  const { isOpen, toggle } = useModal()
  return (
    <div css={app}>
      <GameProvider>
        {/* Welcome modal */}
        <Game />
        {/* Win Modal */}
        {/* Lose Modal */}
        {/* Settings */}
        <button onClick={toggle}>Open modal</button>
        <Modal isOpen={isOpen} toggle={toggle} title='Heading here'>
          Helllooo
        </Modal>
      </GameProvider>
    </div>
  );
}

export default App;
