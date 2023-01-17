/** @jsxImportSource @emotion/react */

import CSS from 'csstype';

import { css, keyframes } from "@emotion/react"
import { GlowAnimationProps, SideProps, CornerProps, CardProps } from "./card.definitions"

const cornerSize = '22px'

const animations = {
    glow: keyframes`
        0%, 100% {
            filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
        }
        50% {
            filter: drop-shadow(0px 0px 5px rgba(0, 255, 255, .75));
        }
    `
}

const cardStyles = {
    content: css`
        background: aqua;
        opacity: 0.2;
    `,
    grid: css`
        display: grid;
        grid-template-columns: ${cornerSize} minmax(0px, auto) ${cornerSize};
        grid-template-rows: ${cornerSize} minmax(0px, auto) ${cornerSize};
        height: 100%;
        width: 100%;

        .container {
            overflow: visible;
        }

        .fill {
            opacity: 0.2;
            fill: aqua;
        }

        [class^="stroke"] {
            fill: none;
            stroke-miterlimit: 10;
            filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
            animation-name: ${animations.glow};
        }

        .stroke-top {
            stroke: #c5fffd;
            stroke-width: 2px;
        }

        .stroke-bottom {
            stroke: aqua;
            stroke-width: 3px;
        }
    `
}

const animate = ({ length, delay }: GlowAnimationProps) => {
    const ret: CSS.Properties = {
        animationDuration: `${length}ms`,
        animationDelay: `${delay}ms`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    }
    return ret
}

const Corner = ({ rotation, animation, isClipped }: CornerProps) => {
    const path = isClipped ? "M22,2H18l-16,16v4" : "M22,2H2,2v20"

    return (
        <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
            <path className="fill" d={`${path}H22Z`} />
            <path className="stroke-bottom" d={path} style={animation && animate(animation)} />
            <path className="stroke-top" d={path} style={animation && animate(animation)} />
        </svg>
    )
}

const SideHorizontal = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 22" preserveAspectRatio="none">
        <rect className="fill" y="2" width="60" height="20" />
        <line className="stroke-bottom" x1="60" y1="2" y2="2" style={animation && animate(animation)} />
        <line className="stroke-top" x1="60" y1="2" y2="2" style={animation && animate(animation)} />
    </svg>
)

const SideVertical = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 60" preserveAspectRatio="none">
        <rect className="fill" x="2" width="20" height="60" />
        <line className="stroke-bottom" x1="2" x2="2" y2="60" style={animation && animate(animation)} />
        <line className="stroke-top" x1="2" x2="2" y2="60" style={animation && animate(animation)} />
    </svg>
)

// NOTE: Only using emotion on top level component to reduce repeated <style> tags rendering
// TODO: Explore other ways to use Emotion in sub-components
export const Card = ({ tl, tr, bl, br, children, animation }: CardProps) => (
    <div css={cardStyles.grid}>

        {/* Top */}
        <Corner rotation={0} isClipped={tl} animation={animation} />
        <SideHorizontal rotation={0} animation={animation} />
        <Corner rotation={90} isClipped={tr} animation={animation} />

        {/* Center */}
        <SideVertical rotation={0} animation={animation} />
        <div css={cardStyles.content}>
            {children}
        </div>
        <SideVertical rotation={180} animation={animation} />

        {/* Bottom */}
        <Corner rotation={270} isClipped={bl} animation={animation} />
        <SideHorizontal rotation={180} animation={animation} />
        <Corner rotation={180} isClipped={br} animation={animation} />

    </div >
)


