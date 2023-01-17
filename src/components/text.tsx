/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from "@emotion/react";
import { theme, Color } from '../theme/theme'
import * as React from 'react'
import { JSX } from "@emotion/react/jsx-runtime";

const headingColor = 'neutral800'
const textColor = 'neutral700'
const headingLineHeight = 1.25
const textLineHeight = 1.5

const headingFontWeightBold = 600
const textFontWeight = 500

const headingFont = `'${theme.font.heading}', sans-serif`
const textFont = `'${theme.font.text}', sans-serif`

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
type HeadingTag = typeof headingTags[number]

const textTags = ['span', 'p', 'div']
type TextTag = typeof textTags[number]

const textVariants = ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'textLG', 'textMD', 'textSM', 'textXS']
type TextVariant = typeof textVariants[number]

const textStyles: Record<TextVariant, SerializedStyles> = {
    heading1: css`
        font-family: ${headingFont};
        font-size: 3rem;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    heading2: css`
        font-family: ${headingFont};
        font-size: 2.25rem;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    heading3: css`
        font-family: ${headingFont};
        font-size: 28px;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    heading4: css`
        font-family: ${headingFont};
        font-size: 1.375rem;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    heading5: css`
        font-family: ${headingFont};
        font-size: 1rem;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    heading6: css`
        font-family: ${headingFont};
        font-size: 12px;
        font-weight: ${headingFontWeightBold};
        line-height: ${headingLineHeight};
    `,
    textLG: css`
        font-family: ${textFont};
        font-size: 1.25rem;
        font-weight: ${textFontWeight};
        line-height: ${textLineHeight};
    `,
    textMD: css`
        font-family: ${textFont};
        font-size: 1rem;
        font-weight: ${textFontWeight};
        line-height: ${textLineHeight};
    `,
    textSM: css`
        font-family: ${textFont};
        font-size: .875rem;
        font-weight: ${textFontWeight};
        line-height: ${textLineHeight};
    `,
    textXS: css`
        font-family: ${textFont};
        font-size: .75rem;
        font-weight: ${textFontWeight};
        line-height: ${textLineHeight};
    `
}


type TextProps = {
    tag?: HeadingTag | TextTag,
    variant?: TextVariant
    color?: Color
    children: React.ReactNode
}

export const Text = ({ tag = 'span', variant = 'textMD', color = headingTags.includes(tag) ? headingColor : textColor, children }: TextProps) => {
    /**
     * TODO: Fix type coersion
     */
    const Tag = tag as keyof JSX.IntrinsicElements
    return (
        <Tag css={textStyles[variant]} style={{ color: theme.color[color] }}>
            {children}
        </Tag>
    )
}
