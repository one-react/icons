const template = (code, options, state) => {
  return `
// Generated from ${state.filePath}
import React, { PureComponent, SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  size?: string | number;
  fill?: string;
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

// https://gist.github.com/TrySound/d91557ff70e9a11318930a15a4394ea4

module.exports = {
  icon: true,
  expandProps: 'end',
  outDir: 'src/icons',
  template,
  svgProps: {
    preserveAspectRatio: `xMidYMid meet`,
    fontSize: `{size || 32}`,
    fill: `{fill || 'currentColor'}`,
    style: '{style}'
  }
}
