/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme, updateOpacity } from '../theme'

type Corners = {
    tl?: boolean
    tr?: boolean
    bl?: boolean
    br?: boolean
}

interface ClippedCardProps extends Corners {
    blur?: boolean
    children: React.ReactNode
}

const blurEffect = css`
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    background: linear-gradient(130deg,  hsla(173deg, 100%, 80%, .1), ${updateOpacity(theme.color.neutral100, 0)}) ;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`
// const wrap = css`
//     filter: drop-shadow(0px -2px 0 rgba(255, 0, 0, 0.5)) drop-shadow(0px 2px 0 rgba(255, 0, 0, 0.5)) drop-shadow(2px 0px 0 rgba(255, 0, 0, 1))  drop-shadow(-2px 0px 0 rgba(255, 0, 0, 1));
// `

const clipped = ({ tl, tr, bl, br }: Corners) => css`
     padding: 1rem 2rem;
     clip-path: polygon(${tl ? '0 8px, 8px 0,' : '0 0,'} ${tr ? 'calc(100% - 8px) 0, 100% 8px,' : '100% 0,'} ${br ? '100% calc(100% - 8px), calc(100% - 8px) 100%,' : '100% 100%,'}  ${bl ? '8px 100%, 0 calc(100% - 8px)' : '0 100%'});
`

export const ClippedCard = ({ tl, tr, bl, br, blur, children }: ClippedCardProps) => {
    return (
        <div css={[clipped({ tl, tr, bl, br }), blur && blurEffect]}>
            {children}
        </div>
    )
}