/** @jsxImportSource @emotion/react */

import { Card } from './cards'
import { css } from '@emotion/react'
import { theme } from '../theme'
import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    children: React.ReactNode
}



const buttonStyles = {
    base: css`
        cursor: pointer;
        font-weight: 600;
        color: ${theme.color.neutral100};
        text-transform: uppercase;
        font-size: 1.125rem;

        .card {
            padding: .5rem 1.25rem .4rem 1.125rem;
            background: linear-gradient(to left, ${theme.color.primary100}, ${theme.color.primary300});
        }
    `
}


export const Button = ({ fullWidth = false, children, ...props }: ButtonProps) => {
    return (
        <button css={buttonStyles.base} style={{ width: fullWidth ? '100%' : 'min-content' }} {...props}>
            <Card tr bl customClassName='card' cornerSize={8}>
                {children}
            </Card>
        </button>
    )
}