// Generated from src/assets/BorderedClose.svg
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional classname
   */
  // prettier-ignore
  className?: string;
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
  // prettier-ignore
  onClick?: React.MouseEventHandler<SVGSVGElement>;
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
        {...props}
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path d="M256 448c106.591 0 193-86.409 193-193S362.591 62 256 62 63 148.409 63 255s86.409 193 193 193zm0 31c-123.16 0-223-99.84-223-223S132.84 33 256 33s223 99.84 223 223-99.84 223-223 223z" />
        <path d="M382.316 149.934L149.677 382.572l-20.506-20.506L361.81 129.428z" />
        <path d="M149.678 129.428l232.638 232.638-20.506 20.506-232.638-232.638z" />
      </svg>
    )
  }
}
