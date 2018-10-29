// Generated from src/assets/Close.svg
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

export class SvgClose extends PureComponent<Props, {}> {
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
        <g fillRule="evenodd" stroke="#000">
          <path d="M428.938 112.294L112.86 428.371l-20.506-20.506L408.432 91.788z" />
          <path d="M112.856 91.787l316.077 316.076-20.506 20.506L92.35 112.293z" />
        </g>
      </svg>
    )
  }
}
