import { action } from '@storybook/addon-actions'
import Sample from 'or-icons'
import React, { PureComponent } from 'react'

const handleClick = action('sample-click')

export default class Example extends PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <h1>button type:</h1>
        <div>
          <Sample type="primary" onClick={handleClick}>
            ADD TO CART
          </Sample>
          <Sample onClick={handleClick}>SIGN UP</Sample>
          <Sample type="warning" onClick={handleClick}>
            DELETE
          </Sample>
          <Sample onClick={handleClick}>TOO LOOOOOOOOOOOOOOOOOOG</Sample>
        </div>
      </div>
    )
  }
}
