import clx from 'classnames'
import * as Icons from 'or-icons'
import React, { PureComponent } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles.scss'

export default class Example extends PureComponent<{}, {}> {
  timeoutId: NodeJS.Timer

  state = {
    copied: false
  }

  render() {
    const { copied } = this.state
    return (
      <div>
        <div
          className={clx('specification', {
            copied
          })}
        >
          {copied ? <span>✅Copied! 🤪</span> : <span>😜 </span>}
          <span>
            When you click on the icon, the name of the icon component will be
            copied to your clipboard.
          </span>
        </div>
        <div className="icon-example">
          {Object.keys(Icons)
            .filter(n => n !== 'default')
            .map(componentName => {
              const component = Icons[componentName]
              return (
                <CopyToClipboard text={componentName} onCopy={this.handleCopy}>
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

  handleCopy = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    this.setState(
      {
        copied: true
      },
      () => {
        this.timeoutId = setTimeout(() => {
          this.setState({ copied: false })
        }, 2000)
      }
    )
  }
}
