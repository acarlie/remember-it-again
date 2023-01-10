/** @jsxImportSource @emotion/react */

import * as React from 'react'
import { css } from '@emotion/react'
import { OptionData } from '../game/game.definitions'
import { ClippedCard } from './clipped-card'
import { Planet } from './planets/planet'
import { PlanetColor, PlanetAttributes } from './planets/planets.definitions'

const tileStyle = css`
    opacity: .75;
    transition: opacity 300ms;

    :hover {
        cursor: pointer;
        opacity: .9;
    }
`

export type TileAttributes = PlanetAttributes & OptionData & React.ButtonHTMLAttributes<HTMLButtonElement>

export interface TileProps extends TileAttributes {
    planetColor: PlanetColor
}

export const Tile = ({ label, planetColor, pattern, variance, color, ...props }: TileProps) => {
    return (
        <button css={tileStyle} {...props}>
            <ClippedCard tl tr blur>
                <Planet {...planetColor} variance={variance} pattern={pattern} />
                {label}
            </ClippedCard>
        </button>
    )
}