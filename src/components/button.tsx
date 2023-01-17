/** @jsxImportSource @emotion/react */

import * as React from 'react'
import { css } from '@emotion/react'
import { theme } from '../theme'
import { Card } from './cards'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
    children: React.ReactNode
}

type ButtonVariant = 'primary' | 'secondary'

const buttonStyles = {
    base: css`
        cursor: pointer;
        font-weight: 700;
        color: ${theme.color.neutral100};
        text-transform: uppercase;
        font-size: 1.125rem;

        .card {
            padding: .5rem 1.25rem;
            background-color: aqua;
        }
    `
}


export const Button = ({ variant, children, ...props }: ButtonProps) => {
    return (
        <button css={buttonStyles.base} {...props}>
            <Card tr bl customClassName='card' cornerSize={8}>
                {children}
            </Card>
        </button>
    )
}