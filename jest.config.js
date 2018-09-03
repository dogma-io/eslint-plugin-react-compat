/* eslint-disable comma-dangle, prettier/prettier */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testRegex: '/__tests__/.*-test\\.js$'
}
