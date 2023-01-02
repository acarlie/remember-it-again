import { Color } from './theme'

export type TileData = {
    label: string
    color: Color
}

export const tiles: TileData[] = [
    {
        label: 'Planet 1',
        color: 'fuschia'
    },
    {
        label: 'Planet 2',
        color: 'primary'
    },
    {
        label: 'Planet 3',
        color: 'lime'
    },
    {
        label: 'Rocket 1',
        color: 'green'
    },
    {
        label: 'Rocket 2',
        color: 'fuschia'
    },
    {
        label: 'Rocket 3',
        color: 'lime'
    },
    {
        label: 'Solar System',
        color: 'primary'
    },
    {
        label: 'Satelite',
        color: 'green'
    },
    {
        label: 'Observatory',
        color: 'fuschia'
    },
]