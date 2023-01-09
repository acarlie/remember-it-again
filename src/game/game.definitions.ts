export const topScoreKey = 'remember_it_again_top_score'

export type Status = 'start' | 'win' | 'lose' | 'playing'

export type OptionData = {
    label: string
}

export const options: OptionData[] = [
    {
        label: 'Planet 1',
    },
    {
        label: 'Planet 2',
    },
    {
        label: 'Planet 3',
    },
    {
        label: 'Rocket 1',
    },
    {
        label: 'Rocket 2',
    },
    {
        label: 'Rocket 3',
    },
    {
        label: 'Solar System',
    },
    {
        label: 'Satelite',
    },
    {
        label: 'Observatory',
    },
]