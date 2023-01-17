import { css } from "@emotion/react";
import { RemValue, updateOpacity, theme } from '../theme/theme'

type CenterContentProps = {
    g: RemValue
    h: boolean
    v: boolean
}

export const centerContent = ({ h, v, g }: CenterContentProps) => css`
    align-items: ${v ? 'center' : 'stretch'} ;
    display: flex;
    flex-direction: column;
    gap: ${g};
    height: ${v ? '100%' : 'auto'} ;
    justify-content: ${h ? 'center' : 'stretch'};
    width: 100%;
`

export const backgroundBlur = css`
    backdrop-filter: blur( .5px );
    -webkit-backdrop-filter: blur( .5px );
    background: linear-gradient(130deg,   ${updateOpacity(theme.color.primary200, .2)}, ${updateOpacity(theme.color.neutral100, 0)}) ;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`