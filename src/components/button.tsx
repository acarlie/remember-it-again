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
    padding: .5rem .75rem;
    cursor: pointer;
    border-radius: ${theme.radius.small};
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