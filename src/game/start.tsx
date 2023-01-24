/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { StyleRecord, centerContent } from '../utilities'
import { OutlineCard, Button } from '../components'
import { theme } from '../theme'
import * as React from 'react'

const startStyles: StyleRecord = {
    buttonRow: css`
        display: flex;
        justify-content: flex-end;
    `,
    innerWrapper: css`
        display: flex;
        flex-direction: column;
        gap: .5rem;
    `,
    mainCard: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `,
    title: css`
        font-weight: ${theme.fontWeight.semibold};
        line-height: ${theme.lineHeight.single};
        font-size: ${theme.fontSize.h200};
        color: ${theme.fontColor.heading};
        text-transform: uppercase;
    `,
    topRow: css`
        display: flex;
        justify-content: flex-end;
        width: 100%;
    `,
    wrapper: css`
        ${centerContent({ h: true, v: true, g: '0rem' })}
    `,

}

export const Start = () => {
    const { topScore, start } = React.useContext(GameContext)
    return (
        <div css={startStyles.wrapper}>
            <div css={startStyles.innerWrapper}>
                <div css={startStyles.topRow}>
                    <OutlineCard tl tr animation={{ length: 3000, delay: 0 }}> Top Score: {topScore} </OutlineCard>
                </div>
                <OutlineCard bl variant='primary' animation={{ length: 3000, delay: 0 }}>
                    <div css={startStyles.mainCard}>
                        <h2 css={startStyles.title}>To Boldy Go</h2>
                        <p>Explore strange new worlds. Click on a planet to play, but don't go to the same planet twice!</p>
                        <div css={startStyles.buttonRow}>
                            <Button onClick={start}>Play</Button>
                        </div>
                    </div>
                </OutlineCard>
            </div>
        </div >

    )
}