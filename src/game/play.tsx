
/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile, OutlineCard } from '../components'
import * as React from 'react'

const playStyles: Record<string, SerializedStyles> = {
    gameWrapper: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,
    grid: css`
        display: grid;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3, 1fr);
        max-width: 50rem;
    `,
    scores: css`
        display: grid;
        grid-column-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    `
}

export const Play = () => {
    const { picked, options, topScore, checkAnswer } = React.useContext(GameContext)

    return (
        <div css={playStyles.gameWrapper}>
            <section css={playStyles.scores}>
                <OutlineCard tl br>
                    Score: {picked.length}
                </OutlineCard >
                <OutlineCard tr bl>
                    <div style={{ textAlign: 'right' }}>
                        Top Score: {topScore}
                    </div>
                </OutlineCard >
            </section>
            <section css={playStyles.grid}>
                {options.map(tile => {
                    return (<Tile key={tile.label} {...tile} onClick={() => checkAnswer(tile.label)} />)
                })}
            </section>
        </div>
    )
}