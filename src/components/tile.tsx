/** @jsxImportSource @emotion/react */

import * as React from 'react'
import { css } from '@emotion/react'
import { OptionData } from '../game/game.definitions'
import { ClippedCard } from './clipped-card'
import { Planet } from './planets/planet'
import { PlanetColor, Pattern } from './planets/planets.definitions'

const tileStyle = css`
    opacity: .75;
    transition: opacity 300ms;

    :hover {
        cursor: pointer;
        opacity: .9;
    }
`


type TileAttributes = OptionData & React.ButtonHTMLAttributes<HTMLButtonElement>

interface TileProps extends TileAttributes {
    planetColor: PlanetColor
    pattern: Pattern
}

export const Tile = ({ label, planetColor, pattern, color, ...props }: TileProps) => {
    return (
        <button css={tileStyle} {...props}>
            <ClippedCard tl tr blur>
                <Planet {...planetColor} pattern={pattern} />
                {label}
            </ClippedCard>
        </button>
    )
}