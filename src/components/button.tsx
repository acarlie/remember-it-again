/** @jsxImportSource @emotion/react */

import * as React from 'react'
import { css } from '@emotion/react'
import { theme } from '../theme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
    children: React.ReactNode
}

type ButtonVariant = 'primary' | 'secondary'

const base = css`
    padding: .5rem 1.25rem;
    cursor: pointer;
    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
    overflow: hidden;
`

const primary = css`
    background: ${theme.color.primary};
`

const secondary = css`
    background:  ${theme.color.neutral100};
`

export const Button = ({ variant, children, ...props }: ButtonProps) => {
    return (
        <button css={[base, variant === 'primary' ? primary : secondary]} {...props}>{children}</button>
    )
}