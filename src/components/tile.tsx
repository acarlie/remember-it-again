
type TileProps = {
    label: string
}

export const Tile = ({ label }: TileProps) => {
    return (
        <button aria-label={label}>

        </button>
    )
}