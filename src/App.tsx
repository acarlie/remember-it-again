/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameProvider, Game } from './game'
import { theme } from './theme/theme'

const app = css`
  background: ${theme.color.neutral0};
  color: ${theme.color.neutral500};
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
