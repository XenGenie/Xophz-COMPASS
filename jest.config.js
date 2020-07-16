module.exports = {
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!src/app.js'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'jsx'
  ],
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/*.spec.(js|jsx|ts|tsx)|**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
