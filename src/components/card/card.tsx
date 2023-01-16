/** @jsxImportSource @emotion/react */


import { css, keyframes } from "@emotion/react"

import { GlowAnimationProps, SideProps, CornerProps, CardProps } from "./card.definitions"

const glow = keyframes`
    0%, 100% {
        filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
    }
    50% {
        filter: drop-shadow(0px 0px 5px rgba(0, 255, 255, .75));
    }
`

const fill = css`
    opacity: 0.2;
    fill: aqua;
`

const content = css`
    background: aqua;
    opacity: 0.2;
`

const topStroke = css`
    stroke: #c5fffd;
    stroke-width: 2px;
`

const bottomStroke = css`
    stroke: aqua;
    stroke-width: 3px;
`

const stroke = css`
    fill: none;
    stroke-miterlimit: 10;
    filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
`

const animate = ({ length, delay }: GlowAnimationProps) => css`
    animation: ${glow} ${length}ms linear ${delay}ms infinite;
`

const container = css`
    overflow: visible;
`

const cornerSize = '22px'

const grid = css`
    display: grid;
    grid-template-columns: ${cornerSize} minmax(0px, auto) ${cornerSize};
    grid-template-rows: ${cornerSize} minmax(0px, auto) ${cornerSize};
    height: 100%;
    width: 100%;
`


const Corner = ({ rotation, animation, isClipped }: CornerProps) => {
    const path = isClipped ? "M22,2H18l-16,16v4" : "M22,2H2,2v20"

    return (
        <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
            <path css={fill} d={`${path}H22Z`} />
            <path css={[stroke, animation && animate(animation), bottomStroke]} d={path} />
            <path css={[stroke, animation && animate(animation), topStroke]} d={path} />
        </svg>
    )
}


const SideHorizontal = ({ rotation, animation }: SideProps) => (
    <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 22" preserveAspectRatio="none">
        <rect css={fill} y="2" width="60" height="20" />
        <line css={[stroke, animation && animate(animation), bottomStroke]} x1="60" y1="2" y2="2" />
        <line css={[stroke, animation && animate(animation), topStroke]} x1="60" y1="2" y2="2" />
    </svg>
)

const SideVertical = ({ rotation, animation }: SideProps) => (
    <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 60" preserveAspectRatio="none">
        <rect css={fill} x="2" width="20" height="60" />
        <line css={[stroke, animation && animate(animation), bottomStroke]} x1="2" x2="2" y2="60" />
        <line css={[stroke, animation && animate(animation), topStroke]} x1="2" x2="2" y2="60" />
    </svg>
)


export const Card = ({ tl, tr, bl, br, children, animation }: CardProps) => {

    return (
        <div css={grid}>

            {/* Top */}
            <Corner rotation={0} isClipped={tl} animation={animation} />
            <SideHorizontal rotation={0} animation={animation} />
            <Corner rotation={90} isClipped={tr} animation={animation} />

            {/* Center */}
            <SideVertical rotation={0} animation={animation} />
            <div css={content}>
                {children}
            </div>
            <SideVertical rotation={180} animation={animation} />

            {/* Bottom */}
            <Corner rotation={270} isClipped={bl} animation={animation} />
            <SideHorizontal rotation={180} animation={animation} />
            <Corner rotation={180} isClipped={br} animation={animation} />

        </div >
    )
}

