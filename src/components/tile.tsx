/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { OptionData } from '../game/game.definitions'
import { OutlineCard } from './cards'
import { Planet } from './planets/planet'
import { PlanetColor, PlanetAttributes } from './planets/planets.definitions'
import * as React from 'react'

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

export const Tile = ({ label, planetColor, pattern, variance1, variance2, color, ...props }: TileProps) => {
    return (
        <button css={tileStyle} {...props}>
            <OutlineCard cornerSize={16} tl tr animation={{ length: 3000, delay: 300 }}>
                <div style={{ width: '9rem', height: '9rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Planet {...planetColor} variance1={variance1} variance2={variance2} pattern={pattern} />
                </div>
                {label}
            </OutlineCard>
        </button>
    )
}