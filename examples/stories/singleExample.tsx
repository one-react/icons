import Button from 'or-button'
import React, { PureComponent } from 'react'

import { SvgFilledHeart } from 'or-icons'

export default class SingleExample extends PureComponent<
  {},
  {
    isVisible: boolean
  }
> {
  state = {
    isVisible: true
  }

  render() {
    return (
      <div>
        <h1>default props:</h1>
        <SvgFilledHeart />
        <h1>prop #className:</h1>
        <div>
          <SvgFilledHeart className="additional-classname" />
          <SvgFilledHeart />
        </div>
        <h1>prop #size:</h1>
        <div>
          <SvgFilledHeart size="28" />
          <SvgFilledHeart />
          <SvgFilledHeart size="35" />
        </div>
        <h1>prop #fill:</h1>
        <div>
          <SvgFilledHeart fill="#4FC3F7" />
          <SvgFilledHeart fill="#03A9F4" />
          <SvgFilledHeart fill="#0288D1" />
        </div>
        <div>
          <h1>prop #onClick:</h1>
          {this.state.isVisible ? (
            <SvgFilledHeart onClick={this.handleClick} />
          ) : (
            <Button onClick={this.handleButtonClick}>show svg icon</Button>
          )}
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isVisible: false
    })
  }

  handleButtonClick = () => {
    this.setState({
      isVisible: true
    })
  }
}
