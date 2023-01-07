import { Color } from '../theme/theme'

export const topScoreKey = 'remember_it_again_top_score';


export type OptionData = {
    label: string
    color: Color
}

export const options: OptionData[] = [
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