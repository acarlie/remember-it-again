/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { css } from '@emotion/react'
import { Color, theme } from '../theme/theme'
import { OptionData } from '../game/game-constants'

const tileStyle = (color: Color) => css`
    background: ${theme.color.neutral200};
    border-radius: ${theme.radius.medium};
    border: 2px solid ${theme.color[color]};
    opacity: .8;
    padding: 2rem 1rem;
    transition: opacity 300ms;

    :hover {
        cursor: pointer;
        opacity: 1;
    }
`

type TileProps = OptionData & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Tile = ({ label, color, ...props }: TileProps) => {
    return (
        <button css={tileStyle(color)} {...props}>
            {label}
        </button>
    )
}