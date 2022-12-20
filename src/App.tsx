/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme } from './theme';
import { Tile } from './components/tile';

const main = css`
  background: ${theme.colors.secondary};
  min-height: 100vh;
  padding: 2rem;
`

function App() {
  return (
    <main css={main}>
      Hello
      <Tile label="hi" />
    </main>
  );
}

export default App;
