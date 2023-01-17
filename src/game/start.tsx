/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { StyleRecord, centerContent } from '../utilities'
import { Text, OutlineCard, Button } from '../components'
import * as React from 'react'

const startStyles: StyleRecord = {
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
                    <OutlineCard tl tr> Top Score: {topScore} </OutlineCard>
                </div>
                <OutlineCard bl>
                    <div css={startStyles.mainCard}>
                        <Text tag="h2" variant="heading1">To Boldy Go</Text>
                        <Text tag='p' variant='textMD'>Explore strange new worlds. Click on a planet to play, but don't go to the same planet twice!</Text>
                        <Button variant='primary' onClick={start}>Play</Button>
                    </div>
                </OutlineCard>
            </div>
        </div >

    )
}