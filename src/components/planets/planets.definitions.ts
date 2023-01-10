export const patterns = ['patternOne', 'patternTwo', 'patternThree', 'patternFour']
export type Pattern = typeof patterns[number]

export type Hue = number
export type Hex = `#${string}`

export type PatternProps = {
    light: Hex
    medium: Hex
    dark: string
}

export interface PlanetColor extends PatternProps {
    hue: Hue
}

export type PlanetAttributes = {
    pattern: Pattern
    variance: number
}

export type PlanetProps = PlanetAttributes & PlanetColor

export const planetColors: PlanetColor[] = [
    {
        hue: 173,
        light: '#f6f6f6',
        medium: '#82bfa8',
        dark: '#4d5e66',
    },
    {
        hue: 270,
        light: '#f6f6f6',
        medium: '#D6A3E2',
        dark: '#8682DB',
    },
    {
        hue: 50,
        light: '#F6F6F6',
        medium: '#FDB605',
        dark: '#DB6F26',
    },
    {
        hue: 90,
        light: '#F6F6F6',
        medium: '#A0D860',
        dark: '#358929',
    }
]
