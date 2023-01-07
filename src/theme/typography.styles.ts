import { css } from "@emotion/react";
import { theme } from './theme'

const headingColor = theme.color.neutral600
const headingLineHeight = 1.25
const textLineHeight = .5
const headingFontWeightBold = 600
const headingFontWeightLight = 300
const textFontWeight = 400

export const heading1 = css`
    color: ${headingColor};
    font-size: 3rem;
    font-weight: ${headingFontWeightLight};
    line-height: ${headingLineHeight};
`

export const heading2 = css`
    color: ${headingColor};
    font-size: 2.25rem;
    font-weight: ${headingFontWeightLight};
    line-height: ${headingLineHeight};
`

export const heading3 = css`
    color: ${headingColor};
    font-size: 28px;
    font-weight: ${headingFontWeightLight};
    line-height: ${headingLineHeight};
`

export const heading4 = css`
    color: ${headingColor};
    font-size: 1.375rem;
    font-weight: ${headingFontWeightBold};
    line-height: ${headingLineHeight};
`

export const heading5 = css`
    color: ${headingColor};
    font-size: 1rem;
    font-weight: ${headingFontWeightBold};
    line-height: ${headingLineHeight};
`

export const heading6 = css`
    color: ${headingColor};
    font-size: 12px;
    font-weight: ${headingFontWeightBold};
    line-height: ${headingLineHeight};
`

export const textLG = css`
    font-size: 1.25rem;
    font-weight: ${textFontWeight};
    line-height: ${textLineHeight};
`

export const textMD = css`
    font-size: 1rem;
    font-weight: ${textFontWeight};
    line-height: ${textLineHeight};
`

export const textSM = css`
    font-size: .875rem;
    font-weight: ${textFontWeight};
    line-height: ${textLineHeight};
`

export const textXS = css`
    font-size: .75rem;
    font-weight: ${textFontWeight};
    line-height: ${textLineHeight};
`
