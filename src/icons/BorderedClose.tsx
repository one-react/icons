// Generated from src/assets/BorderedClose.svg
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

export class SvgBorderedClose extends PureComponent<Props, {}> {
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
        <g fill="none" fillRule="evenodd" stroke="#000">
          <circle
            cx={233}
            cy={233}
            r={223}
            strokeWidth={30}
            transform="translate(23 22)"
          />
          <g fill="#000">
            <path d="M382.318 149.931L149.68 382.57l-20.506-20.507 232.638-232.638z" />
            <path d="M149.675 129.425l232.638 232.638-20.506 20.507L129.17 149.93z" />
          </g>
        </g>
      </svg>
    )
  }
}
