module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/git',
      {
        assets: [
          'src/**/*.{ts,tsx}'
        ],
        message: 'feat(release): release ${nextRelease.version} with updated icons'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}
