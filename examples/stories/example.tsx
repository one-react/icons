import * as Icons from 'or-icons'
import React, { PureComponent } from 'react'

import './styles.scss'

export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div className="icon-example">
        {Object.keys(Icons)
          .filter(n => n !== 'default')
          .map(componentName => {
            const component = Icons[componentName]
            return (
              <div className="icon-item" key={componentName}>
                {React.createElement(component)}
                <div className="icon-label">{component.displayName}</div>
              </div>
            )
          })}
      </div>
    )
  }
}
