/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type TileProps = {
    label: string
}

const tileStyle = css`
    background: lightblue;
`

export const Tile = ({ label }: TileProps) => {
    return (
        <button css={tileStyle} aria-label={label}>
            {label}
        </button>
    )
}