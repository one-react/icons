// Generated from src/assets/Check.svg
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

export class SvgCheck extends PureComponent<Props, {}> {
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
        <path d="M222.399 344.222l197.43-197.43 21.213 21.213L222.46 386.589l-21.11-21.109L88.214 252.344l21.153-21.153L222.4 344.222z" />
      </svg>
    )
  }
}
