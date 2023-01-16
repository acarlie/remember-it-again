export type GlowAnimationProps = {
    length: number
    delay: number
}

export type CardAnimationProp = {
    animation?: GlowAnimationProps | undefined
}

export type SideProps = CardAnimationProp & {
    rotation: number
}

export type CornerProps = SideProps & {
    isClipped?: boolean
}

export type Corners = {
    tl?: boolean
    tr?: boolean
    bl?: boolean
    br?: boolean
}

export type CardProps = Corners & CardAnimationProp & {
    children: React.ReactNode
}
