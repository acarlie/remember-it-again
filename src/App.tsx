/** @jsxImportSource @emotion/react */

import { GameProvider } from './components/game-provider';
import { Game } from './components/game'

import { css } from '@emotion/react';
import { theme } from './theme/theme'

const app = css`
  background: ${theme.color.neutral0};
  color: ${theme.color.neutral500};
  font-family: 'Space Grotesk', sans-serif;
`

function App() {
  return (
    <div css={app}>
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
