/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react"
const style = css`
            overflow: visible;
            .cls-2 {
              opacity: 0.2;
              fill: aqua;

              
            }

            .cls-5,
            .cls-8 {
              fill: none;
              stroke-miterlimit: 10;
              filter: drop-shadow(0px 0px 3px rgba(0, 255, 255, .5));
            }
      
            .cls-5 {
              stroke: aqua;
              stroke-width: 3px;
            }
    
      
            .cls-8 {
              stroke: #c5fffd;
              stroke-width: 2px;
            }

`

export const SVGClipped = ({ }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104"
            viewBox="0 0 104 104" css={style}>
            <g className="cls-1">
                <g id="Layer_1" data-name="Layer 1">
                    <g>
                        {/* Fill */}
                        <rect className="cls-2" x="22" y="22" width="60" height="60" />
                        <rect className="cls-2" x="2" y="22" width="20" height="60" />
                        <rect className="cls-2" x="82" y="22" width="20" height="60" />
                        <rect className="cls-2" x="22" y="2" width="60" height="20" />
                        <path className="cls-2" d="M22,2H18l-16,16V22H22Z" />
                        <path className="cls-2" d="M86,2H82V22h20V18Z" />
                        <rect className="cls-2" x="22" y="82" width="60" height="20" />
                        <path className="cls-2" d="M2,82v4L18,102H22V82Z" />
                        <path className="cls-2" d="M82,102h4L102,86V82H82Z" />
                        {/* Lines 1 */}
                        <g>
                            <line className="cls-5" x1="2" y1="22" x2="2" y2="82" />
                            <line className="cls-5" x1="102" y1="82" x2="102" y2="22" />
                            <line className="cls-5" x1="82" y1="2" x2="22" y2="2" />
                            <path className="cls-5" d="M22,2H18l-16,16V22" />
                            <path className="cls-5" d="M102,22V18L86,2H82" />
                            <line className="cls-5" x1="22" y1="102" x2="82" y2="102" />
                            <path className="cls-5" d="M2,82v4L17,102H22" />
                            <path className="cls-5" d="M82,102h4L102,86V82" />
                        </g>
                        {/* Lines 2 */}
                        <g>
                            <line className="cls-8" x1="2" y1="22" x2="2" y2="82" />
                            <line className="cls-8" x1="102" y1="82" x2="102" y2="22" />
                            <line className="cls-8" x1="82" y1="2" x2="22" y2="2" />
                            <path className="cls-8" d="M22,2H18l-16,16V22" />
                            <path className="cls-8" d="M102,22V18L86,2H82" />
                            <line className="cls-8" x1="22" y1="102" x2="82" y2="102" />
                            <path className="cls-8" d="M2,82v4L18,102H22" />
                            <path className="cls-8" d="M82,102h4L102,86V82" />
                        </g>

                    </g>
                </g>
            </g>
        </svg>
    )
}