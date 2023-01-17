/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { Pattern, PlanetProps, Hue } from "./planets.definitions"
import { PatternOne, PatternTwo, PatternThree, PatternFour } from "./patterns"
import { processRandom, StyleRecord } from "../../utilities"
import CSS from 'csstype';

const sharedStyles: StyleRecord = {
    absolute100: css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,
    atmosphereBase: css`
        mix-blend-mode: hard-light;
        border-radius: 100%;
        overflow: hidden;
    `
}

const planetStyles: StyleRecord = {
    planet: css`
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        svg {
            width: 100%;
        }
    `,
    air: css`
        ${sharedStyles.absolute100}
        box-shadow: inset 0 0 15px 15px rgba(255, 255, 255, .9);
        mix-blend-mode: screen;
        border-radius: 100%;
        overflow: hidden;
    `,
    atmosphere1: css`
        ${sharedStyles.absolute100}
        ${sharedStyles.atmosphereBase}
        opacity: .9;
    `,
    atmosphere2: css`
        ${sharedStyles.atmosphereBase}
        opacity: .4;
    `,
    atmosphere3: css`
        ${sharedStyles.absolute100}
        ${sharedStyles.atmosphereBase}
        opacity: .2;
    `,
    wrapper: css`
        position: relative;
    `
}

const getAbsolutePositionStyles = (size: number) => {
    const ret: CSS.Properties = {
        position: 'absolute',
        top: `${(100 - size) / 2}%`,
        left: `${(100 - size) / 2}%`,
        width: `${size}%`,
        height: `${size}%`,
    }
    return ret
}

const getAtmosphere1Styles = (hue: Hue) => {
    const ret: CSS.Properties = { background: `linear-gradient(125deg, hsl(${hue}deg, 25%, 80%), hsl(${hue}deg, 100%, 10%))` }
    return ret
}

const getAtmosphere2Styles = (hue: Hue) => {
    const ret: CSS.Properties = { background: `linear-gradient(125deg, hsl(${hue}deg, 100%, 60%), hsl(${hue}deg, 80%, 0%))` }
    return ret
}

const getAtmosphere3Styles = (hue: Hue) => {
    const ret: CSS.Properties = { background: `linear-gradient(125deg, hsl(${hue}deg, 100%, 60%), hsl(${hue}deg, 80%, 0%))` }
    return ret
}


/**
 * TODO: Fix any
 * Seems to not accept JSX.Element, unclear why
 */
const PatternComponents: Record<Pattern, any> = {
    patternOne: PatternOne,
    patternTwo: PatternTwo,
    patternThree: PatternThree,
    patternFour: PatternFour
}

export const Planet = ({ pattern, hue, light, medium, dark, variance1, variance2 }: PlanetProps) => {
    const PatternComponent = PatternComponents[pattern]
    const size = `${processRandom(variance1, 6, 9)}rem`
    return (
        <div css={planetStyles.wrapper} style={{ width: size, height: size }}>
            <div css={planetStyles.planet} style={getAbsolutePositionStyles(processRandom(variance1, 60, 80))}>
                <PatternComponent light={light} medium={medium} dark={dark} />
                <div css={planetStyles.atmosphere1} style={getAtmosphere1Styles(hue)} />
                <div css={planetStyles.air} />
            </div>
            <div css={planetStyles.atmosphere2} style={{ ...getAbsolutePositionStyles(processRandom(variance2, 87, 95)), ...getAtmosphere2Styles(hue) }} />
            <div css={planetStyles.atmosphere3} style={getAtmosphere3Styles(hue)} />
        </div>
    )
}
