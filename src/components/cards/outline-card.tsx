/** @jsxImportSource @emotion/react */

import CSS from 'csstype';

import { css, keyframes } from "@emotion/react"
import { defaultCornerSize, GlowAnimationProps, SideProps, CornerProps, OutlineCardProps } from "./card.definitions"
import { Card } from './card';

const svgPadding = 2
const svgCornerSize = 22
const svgInnerCornerSize = svgCornerSize - svgPadding

const animations = {
    glow: keyframes`
        0%, 100% {
            filter: drop-shadow(0px 0px 2px rgba(0, 255, 255, .5));
        }
        50% {
            filter: drop-shadow(0px 0px 4px rgba(0, 255, 255, 1));
        }
    `
}

const outlineCardStyles = {
    background: css`
        padding: ${svgPadding}px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        > * {
            width: 100%;
            height: 100%;
        }
    `,
    container: css`
      position: relative;
    `,
    getAnimationStyles: ({ length, delay }: GlowAnimationProps) => {
        const ret: CSS.Properties = {
            animationDuration: `${length}ms`,
            animationDelay: `${delay}ms`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        }
        return ret
    },
    grid: css`
        position: relative;
        z-index: 10;
        display: grid;
        grid-template-columns: ${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px;
        grid-template-rows: ${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px;
        height: 100%;
        width: 100%;

        .container {
            overflow: visible;
        }

        [class^="stroke"] {
            fill: none;
            stroke-miterlimit: 10;
            filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
            animation-name: ${animations.glow};
        }

        .stroke-top {
            stroke: #c5fffd;
            stroke-width: .75px;
        }

        .stroke-bottom {
            stroke: aqua;
            stroke-width: 1px;
        }
    `
}

const Corner = ({ rotation, animation, isClipped, cornerSize = defaultCornerSize }: CornerProps) => {
    const path = isClipped ? `M22,2h-${svgInnerCornerSize - cornerSize}l-${cornerSize},${cornerSize}v${svgInnerCornerSize - cornerSize}` : "M22,2H2,2V22"

    return (
        <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
            {/* <path className="fill" d={`${path}H22Z`} /> */}
            <path className="stroke-bottom" d={path} style={animation && outlineCardStyles.getAnimationStyles(animation)} />
            <path className="stroke-top" d={path} style={animation && outlineCardStyles.getAnimationStyles(animation)} />
        </svg>
    )
}

const SideHorizontal = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 22" preserveAspectRatio="none">
        {/* <rect className="fill" y="2" width="60" height="20" /> */}
        <line className="stroke-bottom" x1="60" y1="2" y2="2" style={animation && outlineCardStyles.getAnimationStyles(animation)} />
        <line className="stroke-top" x1="60" y1="2" y2="2" style={animation && outlineCardStyles.getAnimationStyles(animation)} />
    </svg>
)

const SideVertical = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 60" preserveAspectRatio="none">
        {/* <rect className="fill" x="2" width="20" height="60" /> */}
        <line className="stroke-bottom" x1="2" x2="2" y2="60" style={animation && outlineCardStyles.getAnimationStyles(animation)} />
        <line className="stroke-top" x1="2" x2="2" y2="60" style={animation && outlineCardStyles.getAnimationStyles(animation)} />
    </svg>
)

// NOTE: Only using emotion on top level component to reduce repeated <style> tags rendering
// TODO: Explore other ways to use Emotion in sub-components
export const OutlineCard = ({ tl, tr, bl, br, children, animation, cornerSize }: OutlineCardProps) => (
    <div css={outlineCardStyles.container}>
        <div css={outlineCardStyles.background}>
            <Card tl={tl} tr={tr} bl={bl} cornerSize={cornerSize} />
        </div>
        <div css={outlineCardStyles.grid}>
            {/* Top */}
            <Corner cornerSize={cornerSize} rotation={0} isClipped={tl} animation={animation} />
            <SideHorizontal rotation={0} animation={animation} />
            <Corner cornerSize={cornerSize} rotation={90} isClipped={tr} animation={animation} />

            {/* Center */}
            <SideVertical rotation={0} animation={animation} />
            <div>
                {children}
            </div>
            <SideVertical rotation={180} animation={animation} />

            {/* Bottom */}
            <Corner cornerSize={cornerSize} rotation={270} isClipped={bl} animation={animation} />
            <SideHorizontal rotation={180} animation={animation} />
            <Corner cornerSize={cornerSize} rotation={180} isClipped={br} animation={animation} />
        </div>
    </div>
)


