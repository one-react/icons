// Generated from src/assets/FilledClose.svg
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

export class SvgFilledClose extends PureComponent<Props, {}> {
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
        <path
          fillRule="evenodd"
          d="M258 489C129.318 489 25 384.682 25 256 25 127.318 129.318 23 258 23c128.682 0 233 104.318 233 233 0 128.682-104.318 233-233 233zm20.957-233l106.066-106.066-21.213-21.213-106.066 106.066L151.678 128.72l-21.214 21.213L236.53 256 130.464 362.066l21.214 21.213 106.066-106.066L363.81 383.28l21.213-21.213L278.957 256z"
        />
      </svg>
    )
  }
}
