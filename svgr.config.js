// https://gist.github.com/TrySound/d91557ff70e9a11318930a15a4394ea4

const template = (code, options, state) => {
  return `
// Generated from ${state.filePath}
import React, { PureComponent, SVGProps } from 'react'

interface Props {
  /**
  * additional classname
  */
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
 onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}

export class ${state.componentName} extends PureComponent<Props, {}> {
  render() {
    const props = this.props
    const { size, fill } = props
    return ${code}
  }
}
  `
}

module.exports = {
  icon: true,
  expandProps: 'start',
  template,
  svgProps: {
    preserveAspectRatio: `xMidYMid meet`,
    fontSize: `{size || 32}`,
    fill: `{fill || 'currentColor'}`,
    style: '{style}'
  },
  svgoConfig: require('./svgo.json')
}
