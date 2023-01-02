/** @jsxImportSource @emotion/react */

import { ModalHookProps } from '../hooks/use-modal'
import { css } from '@emotion/react'

interface ModalProps extends ModalHookProps {
    children: React.ReactNode
    title: string
}

const open = css`
    display: block;
`

const closed = css`
    display: none;
`
export const Modal = ({ isOpen, toggle, title, children }: ModalProps) => {
    return (
        <div role='dialog' aria-modal='true' css={isOpen ? open : closed}>
            <h2>{title}</h2>
            {isOpen}
            {children}
        </div>
    )
}