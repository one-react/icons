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
        <path
          fill="none"
          stroke="#000"
          strokeWidth={30}
          d="M431.42 296.5L254.644 473.277 77.867 296.5c-48.815-48.816-48.815-127.961 0-176.777 48.816-48.815 127.961-48.815 176.777 0 48.815-48.815 127.961-48.815 176.776 0 48.816 48.816 48.816 127.961 0 176.777z"
        />
      </svg>
    )
  }
}
