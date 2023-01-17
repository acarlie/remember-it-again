/** @jsxImportSource @emotion/react */

/**
 * TODO: Optimize Stars
 * - Reduce star variants to set number to cut down on inline styling used
 */

import { css, keyframes } from "@emotion/react"
import { getRandomInt, StyleRecord } from '../utilities'

type StarFieldProps = {
    count: number
}

const twinkle = keyframes`
    0% {
        opacity: 1;
    }
    33% {
        opacity: 0;
    }
    50% {
        opacity: .7;
    }
    80% {
        opacity: .2;
    }
    100% {
        opacity: 1;
    }
`

const starfieldStyles: StyleRecord = {
    field: css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        opacity: .4;
    `,
    star: css`
        position: absolute;
        background: rgba(255, 255, 255, 1);
        border-radius: 3px;
        animation-name: ${twinkle};
    `,
}


export const StarField = ({ count }: StarFieldProps) => {
    const stars = [...Array(count)].map((_val, idx) => idx)

    return (
        <div css={starfieldStyles.field}>
            {
                stars.map(s => {
                    const x = getRandomInt(1, 100)
                    const y = getRandomInt(1, 100)
                    const size = getRandomInt(1, 3)
                    const glow = getRandomInt(2, 15)
                    const opacity = getRandomInt(1, 10)
                    const twinkleChance = getRandomInt(1, 10) > 7
                    return (
                        <div
                            css={starfieldStyles.star}
                            style={{
                                top: `${x}vh`,
                                left: `${y}vw`,
                                width: `${size + 1}px`,
                                height: `${size + 1}px`,
                                boxShadow: `0 0 ${glow}px blue, 0 0 ${glow}px white`,
                                opacity: `${twinkleChance ? 1 : opacity / 10}`,
                                animationDuration: twinkleChance ? '5s' : '0',
                                animationIterationCount: twinkleChance ? 'infinite' : '',
                                animationTimingFunction: twinkleChance ? 'linear' : '',
                                animationDelay: twinkleChance ? `${3 / glow}s` : '',
                            }}
                            key={`star-${s}`}
                        />
                    )
                })
            }

        </div>
    )
}