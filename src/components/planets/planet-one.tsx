/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

const wrapper = css`
    width: 10rem;
    height: 10rem;
    position: relative;
`

const planet = css`
    position: absolute;
    top: 15%;
    left: 15%;
    border-radius: 100%;
    overflow: hidden;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const atmosphere1 = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 30px 20px rgba(255, 255, 255, .9);
    background: linear-gradient(125deg, hsl(173deg, 25%, 96%), hsl(187deg, 80%, 40%));
    mix-blend-mode: hard-light;
    opacity: .9;
`

const atmosphere2 = css`
    position: absolute;
    top: 4%;
    left: 4%;
    width: 92%;
    height: 92%;
    background: linear-gradient(125deg, hsl(173deg, 50%, 96%), hsl(187deg, 90%, 25%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .5;
`
const atmosphere3 = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(125deg, hsl(173deg, 50%, 96%), hsl(187deg, 90%, 25%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .5;
`

const color1 = css`
     fill: #4d5e66;
`
const color2 = css`
    fill: #82bfa8;
`
const color3 = css`
    fill: #f6f6f6;
`

export const PlanetOne = () => {
    return (
        <div css={wrapper}>
            <div css={planet}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.17 149.17">
                    <polygon css={color1} points="149.17 14.84 0 14.84 0 16.67 149.17 23.61 149.17 14.84" />
                    <polygon css={color1} points="149.17 0 0 0 0 10.77 149.17 9.64 149.17 0" />
                    <polygon css={color1} points="0 149.17 149.17 149.17 149.17 127.3 0 137.77 0 149.17" />
                    <polygon css={color1} points="0 127.63 149.17 122.74 149.17 115.85 0 106.07 0 127.63" />

                    <polygon css={color2} points="0 106.07 149.17 115.85 149.17 101.42 0 92.72 0 106.07" />
                    <polygon css={color2} points="149.17 41.24 0 51.33 0 62.44 149.17 52.26 149.17 41.24" />
                    <polygon css={color2} points="0 137.77 149.17 127.3 149.17 122.74 0 127.63 0 137.77" />
                    <polygon css={color2} points="149.17 23.61 0 16.67 0 24.93 149.17 28.09 149.17 23.61" />
                    <polygon css={color2} points="149.17 9.64 0 10.77 0 14.84 149.17 14.84 149.17 9.64" />

                    <polygon css={color3} points="149.17 28.09 0 24.93 0 51.33 149.17 41.24 149.17 28.09" />
                    <polygon css={color3} points="0 62.44 0 92.72 149.17 101.42 149.17 52.26 0 62.44" />
                </svg>
                <div css={atmosphere1} />
            </div>
            <div css={atmosphere2} />
            <div css={atmosphere3} />
        </div>
    )
}