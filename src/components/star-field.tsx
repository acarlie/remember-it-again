/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

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



function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const star = (x: number, y: number, size: number, glow: number, opacity: number) => css`
    position: absolute;
    top: ${x}vh;
    left: ${y}vw;
    width: ${size + 1}px;
    height: ${size + 1}px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
    box-shadow: 0 0 ${glow}px blue, 0 0 ${glow}px white;
    opacity: ${opacity / 10} ;
`

export const StarField = ({ count }: StarFieldProps) => {
    const stars = [...Array(count)].map((_val, idx) => idx)

    return (
        <div css={field}>
            {
                stars.map(s => (
                    <div css={star(getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 3), getRandomInt(2, 15), getRandomInt(1, 10))} key={`star-${s}`} />
                ))
            }

        </div>
    )
}