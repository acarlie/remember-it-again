/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme } from './theme';
import { Tile } from './components/tile';
import { GameProvider } from './components/game';

const main = css`
  background: ${theme.colors.neutral500};
  min-height: 100vh;
  padding: 2rem;
`

function App() {
  return (
    <GameProvider>
      <main css={main}>
        Hello
        <Tile label="hi" />
      </main>
    </GameProvider>
  );
}

export default App;
