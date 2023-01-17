import * as React from 'react'

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

export const defaultCornerSize = 16;

type CornerSizeProp = {
    cornerSize?: number
}

export type CornerProps = CornerSizeProp & SideProps & {
    isClipped?: boolean
}

export type Corners = CornerSizeProp & {
    tl?: boolean
    tr?: boolean
    bl?: boolean
    br?: boolean
}

export type CardProps = Corners & {
    customClassName?: string
    children?: React.ReactNode
}

export type OutlineCardProps = Corners & CardAnimationProp & {
    children: React.ReactNode
}
