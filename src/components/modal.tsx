/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { updateOpacity, theme, heading2 } from '../theme'

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    title: string
    toggle: () => void
}

const modalWrapper = css`
    align-items: center;
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    background: ${updateOpacity(theme.color.neutral0, .8)};
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
`

const open = css`
    display: flex;
`

const closed = css`
    display: none;
`

const modalBody = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Modal = ({ isOpen, toggle, title, children }: ModalProps) => {
    return (
        <div role='dialog' aria-modal='true' css={[modalWrapper, isOpen ? open : closed]}>
            <div css={modalBody}>
                <h2 css={heading2}>{title}</h2>
                {children}
            </div>
        </div>
    )
}