// Generated from src/assets/BorderedClose.svg
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
        <g fill="#000" stroke="#000" fillRule="evenodd">
          <path d="M258 495C129.318 495 25 390.682 25 262 25 133.318 129.318 29 258 29c128.682 0 233 104.318 233 233 0 128.682-104.318 233-233 233zm0-9c123.712 0 224-100.288 224-224S381.712 38 258 38 34 138.288 34 262s100.288 224 224 224z" />
          <path d="M380.78 152.399L148.142 385.037l-13.435-13.435 232.638-232.638z" />
          <path d="M148.142 138.964L380.78 371.602l-13.435 13.435-232.638-232.638z" />
        </g>
      </svg>
    )
  }
}
