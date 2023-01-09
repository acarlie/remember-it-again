/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { theme } from '../theme'

type ClippedCardProps = {
    tl?: boolean
    tr?: boolean
    bl?: boolean
    br?: boolean
}

const clipped = ({ tl, tr, bl, br }: ClippedCardProps) => css`
     background: ${theme.color.primary};
     padding: 1rem 2rem;
     clip-path: polygon(${tl ? '8px' : 0} 0, ${tr ? 'calc(100% - 8px) 0' : '100% 0'}, ${tr && '100% 8px,'} 100% ${br ? 'calc(100% - 8px)' : '100%'} ${br && ', calc(100% - 8px) 100%'}, ${bl ? '8px' : 0} 100% ${bl && ', 0 calc(100% - 8px)'} ${tl && ', 0 8px'});
`

export const ClippedCard = ({ tl, tr, bl, br }: ClippedCardProps) => {
    return (
        <div css={clipped({ tl, tr, bl, br })}>
            hi
        </div>
    )
}