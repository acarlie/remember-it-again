/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile } from './tile';
import * as React from 'react'

const main = css`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`

const grid = css`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 40rem;
`

export const Game = () => {
    const { picked, options } = React.useContext(GameContext)
    return (
        <main css={main}>
            <div>
                <div>
                    Score: {picked.length}
                </div>
                <section css={grid}>
                    {options.map(tile => <Tile key={tile.label} {...tile} />)}
                </section>
            </div>
        </main>

    )
}