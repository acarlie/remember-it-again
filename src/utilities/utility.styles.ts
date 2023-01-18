import { css } from "@emotion/react";
import { RemValue } from '../theme/theme'

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