/** @jsxImportSource @emotion/react */

import CSS from 'csstype';

import { css } from '@emotion/react'
import { updateOpacity, theme } from '../../theme'

type Corners = {
    tl?: boolean
    tr?: boolean
    bl?: boolean
    br?: boolean
    cornerSize?: `${number}px`
}

interface CardProps extends Corners {
    children: React.ReactNode
}

const cardStyles = {
    card: css`
        backdrop-filter: blur( 6.5px );
        -webkit-backdrop-filter: blur( 6.5px );
        background: linear-gradient(130deg,  hsla(173deg, 100%, 80%, .1), ${updateOpacity(theme.color.neutral100, 0)}) ;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        padding: 1rem 2rem;
    `,
    getClipPathStyles: ({ tl, tr, bl, br, cornerSize = '16px' }: Corners) => {
        const ret: CSS.Properties = {
            clipPath: `polygon(${tl ? `0 ${cornerSize}, ${cornerSize} 0,` : '0 0,'} ${tr ? `calc(100% - ${cornerSize}) 0, 100% ${cornerSize},` : '100% 0,'} ${br ? `100% calc(100% - ${cornerSize}), calc(100% - ${cornerSize}) 100%,` : '100% 100%,'}  ${bl ? `${cornerSize} 100%, 0 calc(100% - ${cornerSize})` : '0 100%'})`
        }
        return ret
    }
}


export const Card = ({ tl, tr, bl, br, cornerSize, children }: CardProps) => {
    return (
        <div css={cardStyles.card} style={cardStyles.getClipPathStyles({ tl, tr, bl, br, cornerSize })}>
            {children}
        </div>
    )
}