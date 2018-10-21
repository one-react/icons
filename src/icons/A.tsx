// Generated from src/assets/a.svg
import React, { PureComponent, SVGProps } from 'react'
interface Props extends SVGProps<SVGSVGElement> {
  size?: string | number;
  fill?: string;
}

const style = {
  display: 'block',
  flex: '0 0 auto'
}

export class SvgA extends PureComponent<Props, {}> {
  render() {
    const props = this.props
    const { size, fill } = props
    return (
      <svg
        {...props}
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 48 1"
        width="1em"
        height="1em"
      >
        <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
      </svg>
    )
  }
}
