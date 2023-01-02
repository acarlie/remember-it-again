/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Color, theme } from '../theme'
import { GameContext } from './game-provider'
import * as React from 'react'
import { OptionData } from '../constants'



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

export const Tile = ({ label, color }: OptionData) => {
    const { checkAnswer } = React.useContext(GameContext)
    return (
        <button css={tileStyle(color)} aria-label={label} onClick={() => checkAnswer(label)}>
            {label}
        </button>
    )
}