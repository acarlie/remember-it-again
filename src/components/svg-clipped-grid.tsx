/** @jsxImportSource @emotion/react */


import { css, keyframes } from "@emotion/react"

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
    animation: ${glow} 5s linear infinite;
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

type CornerProps = {
    rotation: number
}

const Corner = ({ rotation }: CornerProps) => (
    <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
        <path css={fill} d="M22,2H18l-16,16v4H22Z" />
        <path css={[stroke, bottomStroke]} d="M22,2H18l-16,16v4" />
        <path css={[stroke, topStroke]} d="M22,2H18l-16,16v4" />
    </svg>
)


const SideHorizontal = ({ rotation }: CornerProps) => (
    <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 22" preserveAspectRatio="none">
        <rect css={fill} y="2" width="60" height="20" />
        <line css={[stroke, bottomStroke]} x1="60" y1="2" y2="2" />
        <line css={[stroke, topStroke]} x1="60" y1="2" y2="2" />
    </svg>
)

const SideVertical = ({ rotation }: CornerProps) => (
    <svg css={container} style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 60" preserveAspectRatio="none">
        <rect css={fill} x="2" width="20" height="60" />
        <line css={[stroke, bottomStroke]} x1="2" x2="2" y2="60" />
        <line css={[stroke, topStroke]} x1="2" x2="2" y2="60" />
    </svg>
)

export const SVGClippedGrid = ({ }) => {

    return (
        <div css={grid}>

            {/* Top */}
            <Corner rotation={0} />
            <SideHorizontal rotation={0} />
            <Corner rotation={90} />

            {/* Center */}
            <SideVertical rotation={0} />
            <div css={content}>

            </div>
            <SideVertical rotation={180} />

            {/* Bottom */}
            <Corner rotation={270} />
            <SideHorizontal rotation={180} />
            <Corner rotation={180} />

        </div >
    )
}

