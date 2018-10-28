import Button from 'or-button'
import React, { PureComponent } from 'react'

import { SvgClose } from 'or-icons'

export default class SingleExample extends PureComponent {
  state = {
    isOpen: true
  }

  render() {
    return (
      <div>
        <h1>default props:</h1>
        <SvgClose />
        <h1>prop #size:</h1>
        <div>
          <SvgClose size="25" />
          <SvgClose />
          <SvgClose size="38" />
        </div>
        <h1>prop #fill:</h1>
        <div>
          <SvgClose fill="#4FC3F7" />
          <SvgClose fill="#03A9F4" />
          <SvgClose fill="#0288D1" />
        </div>
        <div>
          <h1>prop #onClick:</h1>
          {this.state.isOpen && <SvgClose onClick={this.handleClick} />}
          {!this.state.isOpen && (
            <Button onClick={this.handleButtonClick}>show svg icon</Button>
          )}
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: false
    })
  }

  handleButtonClick = () => {
    this.setState({
      isOpen: true
    })
  }
}
