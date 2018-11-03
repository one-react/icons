// Generated from src/assets/FilledCheck.svg
import React, { PureComponent, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  // prettier-ignore
  size?: string | number;
  // prettier-ignore
  fill?: string;
}

const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}

export class SvgFilledCheck extends PureComponent<Props, {}> {
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
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path d="M256 487.955c-128.682 0-233-104.094-233-232.5s104.318-232.5 233-232.5c128.682 0 233 104.094 233 232.5s-104.318 232.5-233 232.5zm-38.554-154.8l-98.89-98.889-21.212 21.213 98.995 98.995 21.107 21.108L422.507 170.52l-21.213-21.213-183.848 183.847z" />
      </svg>
    )
  }
}
