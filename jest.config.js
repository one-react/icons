module.exports = {
  moduleFileExtensions: [
    'js', 'jsx', 'json',
    'ts', 'tsx'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/*\\.scss',
    '!src/index.ts'
  ],
  setupFiles: [
    '<rootDir>/tests/setup.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/*\\.scss'
  ],
  testRegex: '/tests/.+\\.test\\.tsx?$',
  testURL: 'http://localhost/',
}
