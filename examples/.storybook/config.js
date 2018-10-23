import { configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'

withOptions({
  name: 'One React',
  url: 'https://github.com/one-react/icons',
  goFullScreen: false,
  showAddonPanel: true,
  addonPanelInRight: true,
})

// automatically import all files ending with *.story.tsx
const req = require.context('../stories', true, /.story.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
