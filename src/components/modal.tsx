/** @jsxImportSource @emotion/react */

import { ModalHookProps } from '../hooks/use-modal'
import { css } from '@emotion/react'
import { updateOpacity, theme } from '../theme/theme'
import { heading2 } from '../theme/typography.styles'

interface ModalProps extends ModalHookProps {
    children: React.ReactNode
    title: string
}

const open = css`
    display: block;
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
            <button aria-label="Close Dialog" onClick={toggle}>X</button>
            <h2 css={heading2}>{title}</h2>
            {children}
        </div>
    )
}