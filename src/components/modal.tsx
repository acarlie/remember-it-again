/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { updateOpacity, theme, heading2 } from '../theme'

interface ModalProps {
    isOpen: boolean
    toggle: () => void
    children: React.ReactNode
    title: string
}

const open = css`
    display: flex;
    align-items: center;
    align-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${updateOpacity(theme.color.neutral0, .8)};
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`

const closed = css`
    display: none;
`

export const Modal = ({ isOpen, toggle, title, children }: ModalProps) => {
    return (
        <div role='dialog' aria-modal='true' css={isOpen ? open : closed}>
            <div>
                <h2 css={heading2}>{title}</h2>
                {children}
            </div>
        </div>
    )
}