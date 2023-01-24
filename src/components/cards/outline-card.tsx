/** @jsxImportSource @emotion/react */

import { Card } from './card';
import { css, keyframes, Keyframes, SerializedStyles } from "@emotion/react"
import { defaultCornerSize, CardVariant, GlowAnimationProps, SideProps, CornerProps, OutlineCardProps } from "./card.definitions"
import { StyleRecord } from '../../utilities';
import { theme, updateOpacity, ColorValue } from '../../theme';
import CSS from 'csstype';

const svgPadding = 2
const svgCornerSize = 22
const svgInnerCornerSize = svgCornerSize - svgPadding

const variants: Record<CardVariant, { medium: ColorValue, dark: ColorValue }> = {
    primary: {
        medium: theme.color.primary200,
        dark: updateOpacity(theme.color.primary200, .5),
    },
    secondary: {
        medium: theme.color.neutral600,
        dark: updateOpacity(theme.color.neutral600, .75),
    }
}

const animations: Record<CardVariant, Keyframes> = {
    primary: keyframes`
        0%, 100% {
            filter: drop-shadow(0px 0px 2px ${variants.primary.dark});
        }
        50% {
            filter: drop-shadow(0px 0px 4px ${variants.primary.medium});
        }
    `,
    secondary: keyframes`
        0%, 100% {
            filter: drop-shadow(0px 0px 2px ${variants.secondary.dark});
        }
        50% {
            filter: drop-shadow(0px 0px 4px ${variants.secondary.medium});
        }
    `,
}

const sharedStyles: StyleRecord = {
    grid: css`
        display: grid;
        grid-template-columns: ${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px;
        grid-template-rows: ${svgCornerSize}px minmax(0px, auto) ${svgCornerSize}px;
        height: 100%;
        position: relative;
        width: 100%;
        z-index: 10;

        .container {
            overflow: visible;
        }

        [class^="stroke"] {
            fill: none;
            stroke-miterlimit: 10;
        }

        .stroke-top {
            stroke-width: .75px;
            stroke: rgba(255, 255, 255, .75);
        }

        .stroke-bottom {
            stroke-width: 1px;
        }
    `,
    background: css`
        height: 100%;
        left: 0;
        padding: ${svgPadding}px;
        position: absolute;
        top: 0;
        width: 100%;

        .card {
            -webkit-backdrop-filter: blur( .5px );
            backdrop-filter: blur( .5px );
            height: 100%;
            width: 100%;
        }
    `
}

const outlineCardStyles: StyleRecord = {
    container: css`
      position: relative;
    `,
}

const variantStyles: Record<CardVariant, { grid: SerializedStyles, background: SerializedStyles }> = {
    primary: {
        grid: css`
            ${sharedStyles.grid}

            [class^="stroke"] {
                filter: drop-shadow(0px 0px 3px ${variants.primary.dark});
                animation-name: ${animations.primary};
            }

            .stroke-bottom {
                stroke: ${variants.primary.medium};
            }
        `,
        background: css`
            ${sharedStyles.background}
            
            .card {
                background: linear-gradient(130deg, ${updateOpacity(theme.color.primary200, .2)}, ${updateOpacity(theme.color.neutral100, 0)}) ;
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            }
        `
    },
    secondary: {
        grid: css`
            ${sharedStyles.grid}

            [class^="stroke"] {
                filter: drop-shadow(0px 0px 3px ${variants.secondary.dark});
                animation-name: ${animations.secondary};
            }

            .stroke-bottom {
                stroke: ${variants.secondary.medium};
            }
        `,
        background: css`
            ${sharedStyles.background}
            
            .card {
                background: linear-gradient(130deg, ${updateOpacity(theme.color.neutral700, .2)}, ${updateOpacity(theme.color.neutral100, 0)}) ;
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            }
        `
    }
}

const getAnimationStyles = ({ length, delay }: GlowAnimationProps) => {
    const ret: CSS.Properties = {
        animationDuration: `${length}ms`,
        animationDelay: `${delay}ms`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    }
    return ret
}

const Corner = ({ rotation, animation, isClipped, cornerSize = defaultCornerSize }: CornerProps) => {
    const path = isClipped ? `M22,2h-${svgInnerCornerSize - cornerSize}l-${cornerSize},${cornerSize}v${svgInnerCornerSize - cornerSize}` : "M22,2H2,2V22"

    return (
        <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
            <path className="stroke-bottom" d={path} style={animation && getAnimationStyles(animation)} />
            <path className="stroke-top" d={path} style={animation && getAnimationStyles(animation)} />
        </svg>
    )
}

const SideHorizontal = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 22" preserveAspectRatio="none">
        <line className="stroke-bottom" x1="60" y1="2" y2="2" style={animation && getAnimationStyles(animation)} />
        <line className="stroke-top" x1="60" y1="2" y2="2" style={animation && getAnimationStyles(animation)} />
    </svg>
)

const SideVertical = ({ rotation, animation }: SideProps) => (
    <svg className="container" style={{ transform: `rotate(${rotation}deg)` }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" preserveAspectRatio="none">
        <line className="stroke-bottom" x1="2" x2="2" y2="16" style={animation && getAnimationStyles(animation)} />
        <line className="stroke-top" x1="2" x2="2" y2="16" style={animation && getAnimationStyles(animation)} />
    </svg>
)

/**
 * @Note Only using emotion on top level component to reduce repeated <style> tags rendering
 */
export const OutlineCard = ({ tl, tr, bl, br, children, animation, cornerSize, variant = 'primary' }: OutlineCardProps) => (
    <div css={outlineCardStyles.container}>
        <div css={variantStyles[variant].background}>
            <Card customClassName="card" tl={tl} tr={tr} bl={bl} cornerSize={cornerSize} />
        </div>
        <div css={variantStyles[variant].grid}>
            {/* Top */}
            <Corner cornerSize={cornerSize} rotation={0} isClipped={tl} animation={animation} />
            <SideHorizontal rotation={0} animation={animation} />
            <Corner cornerSize={cornerSize} rotation={90} isClipped={tr} animation={animation} />

            {/* Center */}
            <SideVertical rotation={0} animation={animation} />
            <div>
                {children}
            </div>
            <SideVertical rotation={180} animation={animation} />

            {/* Bottom */}
            <Corner cornerSize={cornerSize} rotation={270} isClipped={bl} animation={animation} />
            <SideHorizontal rotation={180} animation={animation} />
            <Corner cornerSize={cornerSize} rotation={180} isClipped={br} animation={animation} />
        </div>
    </div>
)


