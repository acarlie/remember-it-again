/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

const wrapper = css`
    width: 10rem;
    height: 10rem;
    position: relative;
`

const planet = css`
    position: absolute;
    top: 15%;
    left: 15%;
    border-radius: 100%;
    overflow: hidden;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const atmosphere1 = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 25px 15px rgba(255, 255, 255, 1);
    background: linear-gradient(125deg, hsl(173deg, 25%, 96%), hsl(187deg, 80%, 20%));
    mix-blend-mode: hard-light;
    opacity: .9;
`

const atmosphere2 = css`
    position: absolute;
    top: 4%;
    left: 4%;
    width: 92%;
    height: 92%;
    background: linear-gradient(125deg, hsl(173deg, 50%, 96%), hsl(187deg, 90%, 15%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .5;
`
const atmosphere3 = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(125deg, hsl(173deg, 50%, 96%), hsl(187deg, 90%, 25%));
    mix-blend-mode: hard-light;
    border-radius: 100%;
    opacity: .5;
`

const color1 = '#4d5e66';
const color2 = '#82bfa8';
const color3 = '#f6f6f6';




export const PlanetOne = () => {
    return (
        <div css={wrapper}>
            <div css={planet}>
                <PatternOne light={color1} medium={color2} dark={color3} />
                {/* <PatternTwo light={color1} medium={color2} dark={color3} /> */}
                {/* <PatternThree light={color1} medium={color2} dark={color3} /> */}
                {/* <PatternFour light={color1} medium={color2} dark={color3} /> */}
                <div css={atmosphere1} />
            </div>
            <div css={atmosphere2} />
            <div css={atmosphere3} />
        </div>
    )
}

type PatternProps = {
    light: string
    medium: string
    dark: string
}

const PatternOne = ({ light, medium, dark }: PatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.17 149.17">
        <polygon css={{ fill: light }} points="149.17 14.84 0 14.84 0 16.67 149.17 23.61 149.17 14.84" />
        <polygon css={{ fill: light }} points="149.17 0 0 0 0 10.77 149.17 9.64 149.17 0" />
        <polygon css={{ fill: light }} points="0 149.17 149.17 149.17 149.17 127.3 0 137.77 0 149.17" />
        <polygon css={{ fill: light }} points="0 127.63 149.17 122.74 149.17 115.85 0 106.07 0 127.63" />

        <polygon css={{ fill: medium }} points="0 106.07 149.17 115.85 149.17 101.42 0 92.72 0 106.07" />
        <polygon css={{ fill: medium }} points="149.17 41.24 0 51.33 0 62.44 149.17 52.26 149.17 41.24" />
        <polygon css={{ fill: medium }} points="0 137.77 149.17 127.3 149.17 122.74 0 127.63 0 137.77" />
        <polygon css={{ fill: medium }} points="149.17 23.61 0 16.67 0 24.93 149.17 28.09 149.17 23.61" />
        <polygon css={{ fill: medium }} points="149.17 9.64 0 10.77 0 14.84 149.17 14.84 149.17 9.64" />

        <polygon css={{ fill: dark }} points="149.17 28.09 0 24.93 0 51.33 149.17 41.24 149.17 28.09" />
        <polygon css={{ fill: dark }} points="0 62.44 0 92.72 149.17 101.42 149.17 52.26 0 62.44" />
    </svg>
)

const PatternTwo = ({ light, medium, dark }: PatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.17 149.17">
        <polygon css={{ fill: light }} points="84.04 120.48 59.05 112.11 29.46 113.08 0 101.41 0 116.13 19.52 131.4 57.12 122.56 84.98 130.32 111.85 120.81 138.65 124.05 149.17 114.41 149.17 102.85 119.76 100.34 84.04 120.48" />
        <polygon css={{ fill: light }} points="82.58 7.39 117.44 2.36 117.44 2.36 119.77 0 0 0 0 0.2 82.58 7.39" />
        <polygon css={{ fill: light }} points="64.87 50.14 69.51 49.12 91.06 44.39 104.58 45.57 89.59 39.2 64.87 50.14" />
        <polygon css={{ fill: light }} points="117.07 81.78 97.66 72.84 71.41 84.58 62.97 81.5 48.82 89.17 23.41 78.58 0 86.29 0 99.6 18.47 94.46 39.29 102.93 59.77 93.37 70.25 96.12 94.48 86.02 113.19 94.78 139.3 87.78 149.17 91.14 149.17 73.79 140.36 73.66 117.07 81.78" />
        <polygon css={{ fill: light }} points="38.94 15.52 53.76 24.7 74.94 17.99 55.52 15.17 40.38 5.54 0 10.26 0 22.6 20.23 17.64 38.94 15.52" />
        <polygon css={{ fill: light }} points="117.44 2.36 104.94 11.52 83.41 12.93 107.41 18.93 126.11 11.17 149.17 1.11 149.17 0 119.77 0 117.44 2.36 117.44 2.36" />

        <path css={{ fill: medium }} d="M113.18,94.78,94.48,86,70.25,96.12,59.77,93.37l-20.48,9.56L18.47,94.46,0,99.6v1.81l29.46,11.67,29.59-1,25,8.37,35.72-20.14,29.41,2.51V91.14l-9.87-3.36ZM83.41,110.7l-15.89-4.59L92.58,95.87l11.58,4.45Z" />
        <polygon css={{ fill: medium }} points="107.41 18.93 83.41 12.93 104.94 11.52 117.44 2.36 82.58 7.39 0 0.2 0 10.26 40.38 5.54 55.52 15.17 74.94 17.99 53.76 24.7 38.94 15.52 20.23 17.64 0 22.6 0 36.07 1.88 30.23 32.94 24.81 57.99 37.28 90.47 22.46 108.11 26.7 149.17 5.49 149.17 1.11 126.11 11.17 107.41 18.93" />
        <polygon css={{ fill: medium }} points="111.85 120.81 84.98 130.32 57.12 122.56 19.52 131.4 0 116.13 0 143.06 32.35 136.25 62.35 130.25 80 135.19 104.7 130.6 130.47 133.07 149.17 135.73 149.17 114.41 138.65 124.05 111.85 120.81" />
        <path css={{ fill: medium }} d="M91.33,33.23,55.88,45.4,29.41,39.64,0,48.62V55.1l27.29-5.46L55.52,61.28l31.3-8.77,18.47,14.77L83.76,63.76,48.4,77l-25-7.94L0,75.67V86.29l23.41-7.71L48.82,89.17,63,81.5l8.44,3.08L97.66,72.84l19.41,8.94,23.29-8.12,8.81.13V63.23l-29.76,5.11L92.23,50l24.71,6.35,32.23-10.53V33.33l-31.62,8.72Zm-.27,11.16L69.51,49.12l-4.64,1L89.59,39.21l15,6.36Z" />

        <polygon css={{ fill: dark }} points="90.47 22.46 57.99 37.28 32.94 24.81 1.88 30.23 0 36.07 0 48.62 29.41 39.64 55.88 45.4 91.33 33.23 117.55 42.05 149.17 33.33 149.17 5.49 108.11 26.7 90.47 22.46" />
        <polygon css={{ fill: dark }} points="92.23 49.99 119.41 68.34 149.17 63.23 149.17 45.81 116.94 56.34 92.23 49.99" />
        <polygon css={{ fill: dark }} points="48.4 76.99 83.76 63.76 105.29 67.28 86.82 52.51 55.52 61.28 27.29 49.64 0 55.09 0 75.67 23.41 69.05 48.4 76.99" />
        <polygon css={{ fill: dark }} points="67.53 106.11 83.41 110.7 104.16 100.32 92.58 95.87 67.53 106.11" />
        <polygon css={{ fill: dark }} points="104.7 130.6 80 135.19 62.35 130.25 32.35 136.25 0 143.06 0 149.17 149.17 149.17 149.17 135.73 130.47 133.07 104.7 130.6" />
    </svg>
)

const PatternThree = ({ light, medium, dark }: PatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.17 149.17">
        <path css={{ fill: light }} d="M34.65,34.9H62.34a6.24,6.24,0,0,1,6.24-6.24h45.79a6.23,6.23,0,0,1,6.23,6.24h28.57V9.27L138,9.36a1.93,1.93,0,0,0-1.93,1.94v2.83a1.94,1.94,0,0,1-1.94,1.94H56.56a7.71,7.71,0,0,1-7.71,7.71H0V48.6H20.94A13.7,13.7,0,0,1,34.65,34.9Z" />
        <path css={{ fill: light }} d="M36.22,110.66a.47.47,0,0,0,.47.47H53A6.83,6.83,0,0,1,59.77,118h55.75a6.47,6.47,0,0,1,6.48,6.47h27.17V111.84h-9.06a6.82,6.82,0,0,1-6.82-6.83H81.88A5.05,5.05,0,0,1,76.82,100H63.05a16,16,0,0,1-16-16H36.76a8,8,0,1,1,0-16H64.51a6.24,6.24,0,0,1,6.24-6.24h78.42V50.9H55.48a5.7,5.7,0,0,1-5.7,5.7H0V98.31H23.87A12.35,12.35,0,0,1,36.22,110.66Z" />
        <path css={{ fill: light }} d="M42.23,144.54h-.16a4,4,0,0,1-4.07-4h0a6.35,6.35,0,0,1,6.35-6.35h9a4.12,4.12,0,1,0,0-8.23H4.64a2.41,2.41,0,0,1-2.41-2.42v-2A2.39,2.39,0,0,0,0,119.15v30H43A14.15,14.15,0,0,1,42.23,144.54Z" />
        <path css={{ fill: light }} d="M122.94,75.4h-6.71a17.38,17.38,0,0,0,17.38,17.38h15.56V70.31H128A5.09,5.09,0,0,1,122.94,75.4Z" />

        <path css={{ fill: medium }} d="M56.56,16.07h77.58a1.94,1.94,0,0,0,1.94-1.94V11.3A1.93,1.93,0,0,1,138,9.36l11.16-.09V0H0V23.78H48.85A7.71,7.71,0,0,0,56.56,16.07Z" />
        <path css={{ fill: medium }} d="M2.23,121.54v2A2.41,2.41,0,0,0,4.64,126H53.31a4.12,4.12,0,1,1,0,8.23h-9A6.35,6.35,0,0,0,38,140.54h0a4,4,0,0,0,4.07,4h.16a14.15,14.15,0,0,0,.79,4.63H149.17V124.43H122a6.47,6.47,0,0,0-6.48-6.47H59.77A6.83,6.83,0,0,0,53,111.13H36.69a.47.47,0,0,1-.47-.47A12.35,12.35,0,0,0,23.87,98.31H0v20.84A2.39,2.39,0,0,1,2.23,121.54Z" />

        <path css={{ fill: dark }} d="M64.51,68H36.76a8,8,0,1,0,0,16H47.05a16,16,0,0,0,16,16H76.82A5.05,5.05,0,0,0,81.88,105h51.41a6.82,6.82,0,0,0,6.82,6.83h9.06V92.78H133.61A17.38,17.38,0,0,1,116.23,75.4h6.71a5.09,5.09,0,0,0,5.1-5.09h21.13V61.72H70.75A6.24,6.24,0,0,0,64.51,68Z" />
        <path css={{ fill: dark }} d="M55.48,50.9h93.69v-16H120.6a6.23,6.23,0,0,0-6.23-6.24H68.58a6.24,6.24,0,0,0-6.24,6.24H34.65A13.7,13.7,0,0,0,20.94,48.6H0v8H49.78A5.7,5.7,0,0,0,55.48,50.9Z" />
    </svg>
)

const PatternFour = ({ light, medium, dark }: PatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.17 149.17">
        <rect css={{ fill: light }} y="12.96" width="149.17" height="1.76" />
        <rect css={{ fill: light }} y="141.76" width="149.17" height="7.41" />
        <rect css={{ fill: light }} y="19.02" width="149.17" height="12" />

        <rect css={{ fill: medium }} width="149.17" height="12.96" />
        <rect css={{ fill: medium }} y="14.73" width="149.17" height="4.29" />
        <rect css={{ fill: medium }} y="114.58" width="149.17" height="27.18" />
        <rect css={{ fill: medium }} y="103.64" width="149.17" height="4.83" />
        <rect css={{ fill: medium }} y="31.02" width="149.17" height="43.56" />

        <rect css={{ fill: dark }} y="74.58" width="149.17" height="29.05" />
        <rect css={{ fill: dark }} y="108.47" width="149.17" height="6.11" />
    </svg>
)