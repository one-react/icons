const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const readdirAsync = promisify(fs.readdir)
const writeFileAsync = promisify(fs.writeFile)

const sourceDir = path.resolve(__dirname, 'src/icons')
const targetFile = path.resolve(__dirname, 'src/index.ts')

async function readConfig() {
  const filenames = await readdirAsync(sourceDir)
  const result = []

  for (const filename of filenames) {
    const basename = path.basename(filename, '.tsx')
    result.push(`export { Svg${basename} } from \'./icons/${basename}\'`)
  }

  return result
}

async function boot() {
  const config = await readConfig()
  const text = config.join('\n')
  // read prettier options from local config `.prettierrc`
  const options = await prettier.resolveConfig(path.resolve(__dirname, '.prettierrc'))
  const formatted = prettier.format(text, options)
  await writeFileAsync(targetFile, formatted, 'utf-8')
  console.log('export svg content -->', config)
}

boot()
