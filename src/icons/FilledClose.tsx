// Generated from src/assets/FilledClose.svg
import React, { PureComponent, SVGProps } from 'react'
interface Props extends SVGProps<SVGSVGElement> {
  size?: string | number
  fill?: string
}

const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}

export class SvgFilledClose extends PureComponent<Props, {}> {
  render() {
    const props = this.props
    const { size, fill } = props
    return (
      <svg
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 516 516"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          d="M258 489C129.318 489 25 384.682 25 256 25 127.318 129.318 23 258 23c128.682 0 233 104.318 233 233 0 128.682-104.318 233-233 233zm15.886-225l109.601-109.602-14.142-14.142-109.601 109.602-109.602-109.602L136 154.398 245.602 264 136 373.602l14.142 14.142 109.602-109.602 109.601 109.602 14.142-14.142L273.886 264z"
          fill="#000"
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
