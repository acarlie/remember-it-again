/** @jsxImportSource @emotion/react */


import { CardProps, Corners, defaultCornerSize } from './card.definitions';
import CSS from 'csstype';

const cardStyles = {
    getClipPathStyles: ({ tl, tr, bl, br, cornerSize }: Corners) => {
        const ret: CSS.Properties = {
            clipPath: `polygon(${tl ? `0 ${cornerSize}px, ${cornerSize}px 0,` : '0 0,'} ${tr ? `calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px,` : '100% 0,'} ${br ? `100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%,` : '100% 100%,'}  ${bl ? `${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px)` : '0 100%'})`
        }
        return ret
    }
}

export const Card = ({ tl, tr, bl, br, cornerSize = defaultCornerSize, customClassName, children }: CardProps) => {
    return (
        <div className={customClassName} style={cardStyles.getClipPathStyles({ tl, tr, bl, br, cornerSize })}>
            {children}
        </div>
    )
}