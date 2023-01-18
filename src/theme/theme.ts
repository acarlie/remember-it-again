export type RemValue = `${number}rem`

const neutralSteps = [100, 200, 300, 400, 500, 600, 700, 800]
type Neutral = `neutral${typeof neutralSteps[number]}`

const nonNeutralSteps = [100, 200, 300]
type NonNeutralStep = typeof nonNeutralSteps[number]


export type ColorValue = `hsla(${string})`
export type Color = `primary${NonNeutralStep}` | `fuschia${NonNeutralStep}` | `lime${NonNeutralStep}` | `green${NonNeutralStep}` | Neutral

type Font = 'heading' | 'text'
type Radius = 'small' | 'medium' | 'large'

type Theme = {
    color: Record<Color, ColorValue>
    font: Record<Font, string>
    radius: Record<Radius, RemValue>
}

export const theme: Theme = {
    color: {
        fuschia100: 'hsla(335, 90%, 25%, 1)',
        fuschia200: 'hsla(335, 90%, 50%, 1)',
        fuschia300: 'hsla(335, 90%, 75%, 1)',
        green100: 'hsla(173, 100%, 25%, 1)',
        green200: 'hsla(173, 100%, 50%, 1)',
        green300: 'hsla(173, 100%, 75%, 1)',
        lime100: 'hsla(73, 87%, 25%, 1)',
        lime200: 'hsla(73, 87%, 50%, 1)',
        lime300: 'hsla(73, 87%, 75%, 1)',
        primary100: 'hsla(183, 100%, 25%, 1)',
        primary200: 'hsla(183, 100%, 50%, 1)',
        primary300: 'hsla(183, 100%, 75%, 1)',
        neutral100: 'hsla(240, 100%, 7%, 1)',
        neutral200: 'hsla(240, 32%, 17%, 1)',
        neutral300: 'hsla(240, 32%, 26%, 1)',
        neutral400: 'hsla(240, 32%, 35%, 1)',
        neutral500: 'hsla(240, 32%, 40%, 1)',
        neutral600: 'hsla(240, 32%, 60%, 1)',
        neutral700: 'hsla(240, 32%, 80%, 1)',
        neutral800: 'hsla(240, 32%, 96%, 1)',
    },
    radius: {
        small: '.25rem',
        medium: '1rem',
        large: '2rem'
    },
    font: {
        heading: 'Rajdhani',
        text: 'Rajdhani'
    }
}

export const updateOpacity = (color: ColorValue, opacity: number) => opacity <= 1 && opacity >= 0 ? color.replace('1)', `${opacity})`) as ColorValue : color
