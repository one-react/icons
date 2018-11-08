// Generated from src/assets/Heart.svg
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

export class SvgHeart extends PureComponent<Props, {}> {
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
        <path d="M254.644 452.063l166.17-166.17c42.958-42.957 42.958-112.606 0-155.563-42.958-42.958-112.606-42.958-155.564 0l-10.606 10.606-10.607-10.606c-42.957-42.958-112.606-42.958-155.563 0-42.958 42.957-42.958 112.606 0 155.563l166.17 166.17zm187.383-342.946c54.673 54.673 54.673 143.316 0 197.99L254.644 494.49 67.26 307.107c-54.673-54.674-54.673-143.317 0-197.99 51.265-51.265 132.395-54.461 187.384-9.59 54.989-44.871 136.119-41.675 187.383 9.59z" />
      </svg>
    )
  }
}
