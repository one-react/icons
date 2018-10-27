import React from 'react'

import CodePreviewer from 'or-code-previewer'

export function previewCode(code: string) {
  return <CodePreviewer title="Story Source" lang="tsx" code={code} />
}
