/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { PatternOne, PatternTwo, PatternThree, PatternFour } from "./patterns"
import { Pattern, PlanetColor, Hue } from "./planets.definitions"

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

const atmosphere1 = (hue: Hue) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(125deg, hsl(${hue}, 25%, 80%), hsl(${hue}, 100%, 10%));
    mix-blend-mode: hard-light;
    opacity: .9;
`

const air = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 15px 15px rgba(255, 255, 255, .9);
    mix-blend-mode: screen;
    border-radius: 100%;

`

const atmosphere2 = (hue: Hue) => css`
    position: absolute;
    top: 4%;
    left: 4%;
    width: 92%;
    height: 92%;
    background: linear-gradient(125deg, hsl(${hue}, 100%, 80%), hsl(${hue}, 80%, 10%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .5;
`

const atmosphere3 = (hue: Hue) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(125deg, hsl(${hue}, 100%, 80%), hsl(${hue}, 80%, 20%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .2;
`

// TODO: Better typing
const PatternComponents: Record<Pattern, any> = {
    patternOne: PatternOne,
    patternTwo: PatternTwo,
    patternThree: PatternThree,
    patternFour: PatternFour
}


interface PlanetProps extends PlanetColor {
    pattern: Pattern
}

export const Planet = ({ pattern, hue, light, medium, dark }: PlanetProps) => {
    const PatternComponent = PatternComponents[pattern]
    return (
        <div css={wrapper}>
            <div css={planet}>
                <PatternComponent light={light} medium={medium} dark={dark} />
                <div css={atmosphere1(hue)} />
                <div css={air} />
            </div>
            <div css={atmosphere2(hue)} />
            <div css={atmosphere3(hue)} />
        </div>
    )
}
