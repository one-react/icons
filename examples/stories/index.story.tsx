import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { SvgClose } from 'or-icons'
import Example from './example'

storiesOf('or-icons', module)
  .add('all icons', () => <Example />)
  .addDecorator(
    withInfo({
      inline: true,
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )

  .add('sigle icon', () => <SvgClose size="25" fill="#555" />, {
    info: {
      source: true
    }
  })
