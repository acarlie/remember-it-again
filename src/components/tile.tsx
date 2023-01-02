/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { theme } from '../theme'
import { GameContext } from './game'
import * as React from 'react'

type TileProps = {
    label: string
}

const tileStyle = css`
    background: lightblue;
    border-radius: ${theme.radius.medium};
    padding: 2rem;
    opacity: .8;
    transition: opacity 300ms;

    :hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const Tile = ({ label }: TileProps) => {
    const { checkAnswer } = React.useContext(GameContext)
    return (
        <button css={tileStyle} aria-label={label} onClick={() => checkAnswer(label)}>
            {label}
        </button>
    )
}