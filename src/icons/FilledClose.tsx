// Generated from src/assets/FilledClose.svg
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

export class SvgFilledClose extends PureComponent<Props, {}> {
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
        <path d="M257.806 486.822c-127.578 0-231-103.423-231-231 0-127.578 103.422-231 231-231s231 103.422 231 231c0 127.577-103.422 231-231 231zm20.988-230.806l105.244-105.244-21.049-21.05-105.243 105.245-105.244-105.244-21.049 21.049 105.244 105.244-105.244 105.243 21.049 21.05 105.244-105.245 105.243 105.244 21.05-21.049-105.245-105.243z" />
      </svg>
    )
  }
}
