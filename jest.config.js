const path = require('path');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: './reports/coverage',
  coverageReporters: ['lcov', 'cobertura'],
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(__dirname, 'tsconfig.test.json'),
    },
  },
  testPathIgnorePatterns: ['node_modules'],
};
