// Doc: https://jestjs.io/docs/en/configuration.html
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/tests/utils/jest-dom.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/client/$1',
    '^~~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  watchPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__unit-tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost/',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/coverage/',
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.vue',
    '<rootDir>/client/modules/**/*.vue',
    '<rootDir>/client/pages/**/*.vue'
  ]
}
