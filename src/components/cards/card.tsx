/** @jsxImportSource @emotion/react */

import CSS from 'csstype';

import { css } from '@emotion/react'
import { updateOpacity, theme } from '../../theme'
import { CardProps, Corners, defaultCornerSize } from './card.definitions';

const cardStyles = {
    card: css`
        backdrop-filter: blur( .5px );
        -webkit-backdrop-filter: blur( .5px );
        background: linear-gradient(130deg,   ${updateOpacity(theme.color.primary200, .2)}, ${updateOpacity(theme.color.neutral100, 0)}) ;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        padding: 1rem 2rem;
    `,
    getClipPathStyles: ({ tl, tr, bl, br, cornerSize }: Corners) => {
        const ret: CSS.Properties = {
            clipPath: `polygon(${tl ? `0 ${cornerSize}px, ${cornerSize}px 0,` : '0 0,'} ${tr ? `calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px,` : '100% 0,'} ${br ? `100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%,` : '100% 100%,'}  ${bl ? `${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px)` : '0 100%'})`
        }
        return ret
    }
}

export const Card = ({ tl, tr, bl, br, cornerSize = defaultCornerSize, children }: CardProps) => {
    return (
        <div css={cardStyles.card} style={cardStyles.getClipPathStyles({ tl, tr, bl, br, cornerSize })}>
            {children}
        </div>
    )
}