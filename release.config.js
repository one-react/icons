module.exports = {
  plugins: [
    [
      '@semantic-release/git',
      {
        assets: [
          'src/**/*.{ts,tsx}'
        ],
        message: 'feat(release): release ${nextRelease.version} with updated icons'
      }
    ]
  ]
}
