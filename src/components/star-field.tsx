/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react"

type StarFieldProps = {
    count: number
}

const field = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`

const twinkle = keyframes`
    0% {
        opacity: 1;
    }
    33% {
        opacity: .3;
    }
    50% {
        opacity: .7;
    }
    80% {
        opacity: .3;
    }
    100% {
        opacity: 1;
    }
`


function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const star = (x: number, y: number, size: number, glow: number, opacity: number, twinkleChance: number) => css`
    position: absolute;
    top: ${x}vh;
    left: ${y}vw;
    width: ${size + 1}px;
    height: ${size + 1}px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
    box-shadow: 0 0 ${glow}px blue, 0 0 ${glow}px white;
    opacity: ${twinkleChance > 7 ? 1 : opacity / 10};
    animation: ${twinkleChance > 7 ? twinkle : 'none'} 5s infinite linear;
    animation-delay: ${3 / glow}s;

`

export const StarField = ({ count }: StarFieldProps) => {
    const stars = [...Array(count)].map((_val, idx) => idx)

    return (
        <div css={field}>
            {
                stars.map(s => (
                    <div css={star(getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 3), getRandomInt(2, 15), getRandomInt(1, 10), getRandomInt(1, 10))} key={`star-${s}`} />
                ))
            }

        </div>
    )
}