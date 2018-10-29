// Generated from src/assets/Heart.svg
import React, { PureComponent, SVGProps } from 'react'
interface Props extends SVGProps<SVGSVGElement> {
  size?: string | number;
  fill?: string;
}

const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}

export class SvgHeart extends PureComponent<Props, {}> {
  render() {
    const props = this.props
    const { size, fill } = props
    return (
      <svg
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#D8D8D8" d="M-2 0h512v512H-2z" />
          <path
            stroke="#FFF"
            strokeLinecap="square"
            strokeOpacity={0.5}
            strokeWidth={2}
            d="M-2 0l512 512m0-512L-2 512M31 0v512M157 0v512M254 0v512M351 0v512M477 0v512M-2 479h512M-2 353h512M-2 256h512M-2 159h512M-2 33h512M254 479c123.16 0 223-99.84 223-223S377.16 33 254 33 31 132.84 31 256s99.84 223 223 223zm0-86c75.663 0 137-61.337 137-137s-61.337-137-137-137-137 61.337-137 137 61.337 137 137 137zm0-40c53.572 0 97-43.428 97-97s-43.428-97-97-97-97 43.428-97 97 43.428 97 97 97z"
          />
          <path
            stroke="#000"
            strokeWidth={30}
            d="M431.42 296.5L254.644 473.277 77.867 296.5c-48.815-48.816-48.815-127.961 0-176.777 48.816-48.815 127.961-48.815 176.777 0 48.815-48.815 127.961-48.815 176.776 0 48.816 48.816 48.816 127.961 0 176.777z"
          />
        </g>
      </svg>
    )
  }
}
