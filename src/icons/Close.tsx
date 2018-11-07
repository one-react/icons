// Generated from src/assets/Close.svg
import React, { PureComponent, SVGProps } from 'react'

interface Props {
  /**
   * additional classname
   */
  className?: string
  /**
   * size of the svg icon
   */
  // prettier-ignore
  size?: string | number;
  /**
   * color of the svg icon
   */
  // prettier-ignore
  fill?: string;
  /**
   * onClick event
   */
  onClick?: React.MouseEventHandler<SVGSVGElement>
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
        {...props}
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path d="M424.935 108.296L108.858 424.373l-20.506-20.507L404.43 87.79z" />
        <path d="M108.858 87.79l316.077 316.076-20.507 20.506L88.352 108.296z" />
      </svg>
    )
  }
}
