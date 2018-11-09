import clx from 'classnames'
import * as Icons from 'or-icons'
import React, { PureComponent } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles.scss'

export default class Example extends PureComponent<{}, {}> {
  timeoutId: NodeJS.Timer

  state = {
    copied: false,
    name: ''
  }

  render() {
    const { copied, name } = this.state
    return (
      <div>
        <div
          className={clx('specification', {
            copied
          })}
        >
          <div>
            When you click on the icon, the name of the icon component will be
            copied to your clipboard.
          </div>
          <div>
            {copied ? (
              <span>✅ {name} Copied! 🤪</span>
            ) : (
              <span>Try to click and copy 😜 </span>
            )}
          </div>
        </div>
        <div className="icon-example">
          {Object.keys(Icons)
            .filter(n => n !== 'default')
            .map(componentName => {
              const component = Icons[componentName]
              return (
                <CopyToClipboard
                  text={componentName}
                  onCopy={this.handleCopy(componentName)}
                >
                  <div className="icon-item" key={componentName}>
                    {React.createElement(component)}
                    <div className="icon-label">{component.displayName}</div>
                  </div>
                </CopyToClipboard>
              )
            })}
        </div>
      </div>
    )
  }

  handleCopy = componentName => {
    return () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }

      this.setState(
        {
          copied: true,
          name: componentName
        },
        () => {
          this.timeoutId = setTimeout(() => {
            this.setState({ copied: false, name: '' })
          }, 2000)
        }
      )
    }
  }
}
