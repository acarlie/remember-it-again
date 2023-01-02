/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme } from './theme';
import { Tile } from './components/tile';
import { GameProvider } from './components/game';
import { tiles } from './constants';

const main = css`
  font-family: 'Space Grotesk', sans-serif;
  background: ${theme.color.neutral0};
  min-height: 100vh;
  padding: 2rem;
  color: ${theme.color.neutral500};
`

const grid = css`
  
`

function App() {
  return (
    <GameProvider>
      <main css={main}>
        <section css={grid}>
          {tiles.map(tile => <Tile {...tile} />)}
        </section>
      </main>
    </GameProvider>
  );
}

export default App;
