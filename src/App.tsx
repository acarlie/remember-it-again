/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameProvider, Game } from './game'
import { theme } from './theme/theme'
import { StarField } from './components/star-field'

const app = css`
  background: ${theme.color.neutral100};
  color: ${theme.color.neutral700};
  font-size: ${theme.fontSize.t200};
  line-height: ${theme.lineHeight.text};
  position: relative;
`

function App() {
  return (
    <div css={app}>
      <StarField count={200} />
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
