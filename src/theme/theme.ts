const neutralValues = [0, 50, 100, 200, 300, 400, 500, 600]
type Neutral = `neutral${typeof neutralValues[number]}`
export type Color = 'primary' | 'fuschia' | 'green' | 'lime' | Neutral;
type ColorValue = `hsla(${string})`
type RemValue = `${number}rem`
type Radius = 'small' | 'medium' | 'large'

type Theme = {
    color: Record<Color, ColorValue>
    radius: Record<Radius, RemValue>
}

export const theme: Theme = {
    color: {
        fuschia: 'hsla(335, 90%, 61%, 1)',
        green: 'hsla(173, 100%, 36%, 1)',
        lime: 'hsla(73, 87%, 62%, 1)',
        primary: 'hsla(224, 71%, 53%, 1)',
        neutral0: 'hsla(224, 50%, 12%, 1)',
        neutral50: 'hsla(242, 39%, 17%, 1)',
        neutral100: 'hsla(240, 34%, 26%, 1)',
        neutral200: 'hsla(240, 32%, 35%, 1)',
        neutral300: 'hsla(241, 30%, 40%, 1)',
        neutral400: 'hsla(241, 30%, 60%, 1)',
        neutral500: 'hsla(240, 29%, 80%, 1)',
        neutral600: 'hsla(240, 30%, 96%, 1)',
    },
    radius: {
        small: '.25rem',
        medium: '1rem',
        large: '2rem'
    }
}

export const updateOpacity = (color: ColorValue, opacity: number) => opacity <= 1 && opacity >= 0 ? color.replace('1)', `${opacity})`) : color