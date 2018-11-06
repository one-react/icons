import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { previewCode } from './util'

import Example from './example'
import SingleExample from './singleExample'

storiesOf('or-icons', module)
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
  .add('all icons', () => <Example />, {
    info: {
      source: false,
      text: null
    }
  })
  .add('single icon', () => <SingleExample />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./singleExample.tsx'))
    }
  })
