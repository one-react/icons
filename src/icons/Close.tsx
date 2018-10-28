// Generated from src/assets/Close.svg
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
        <g fill="#000" stroke="#000" fillRule="evenodd">
          <path d="M424.4 108.76L108.322 424.837l-13.435-13.435L410.964 95.325z" />
          <path d="M108.322 95.325L424.4 411.402l-13.435 13.435L94.887 108.76z" />
        </g>
      </svg>
    )
  }
}
