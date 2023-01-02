/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme } from './theme';
import { Tile } from './components/tile';
import { GameProvider } from './components/game';

const main = css`
  font-family: 'Space Grotesk', sans-serif;
  background: ${theme.color.neutral0};
  min-height: 100vh;
  padding: 2rem;
`

const grid = css`
  
`

function App() {
  return (
    <GameProvider>
      <main css={main}>
        <section css={grid}>
          <Tile label="hi" />
        </section>
      </main>
    </GameProvider>
  );
}

export default App;
