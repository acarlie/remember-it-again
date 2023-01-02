/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Color, theme } from '../theme'
import { GameContext } from './game'
import * as React from 'react'
import { TileData } from '../constants'



const tileStyle = (color: Color) => css`
    background: ${theme.color.neutral200};
    border: 2px solid ${theme.color[color]};
    border-radius: ${theme.radius.medium};
    padding: 2rem;
    opacity: .8;
    transition: opacity 300ms;

    :hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const Tile = ({ label, color }: TileData) => {
    const { checkAnswer } = React.useContext(GameContext)
    return (
        <button css={tileStyle(color)} aria-label={label} onClick={() => checkAnswer(label)}>
            {label}
        </button>
    )
}