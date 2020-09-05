module.exports = {
  verbose: true,
  collectCoverage: true, //覆盖率跟随
  roots: [ '<rootDir>/components' ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components$': '<rootDir>/components/index.tsx',
    '^components(.*)$': '<rootDir>/components/$1',
  },
  coverageDirectory: "coverage-client",
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
  testPathIgnorePatterns: [ '/node_modules/', '/lib/', '/esm/', '/dist/' ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageThreshold: {
    "global": {
      "statements": 60,
      "branches": 60,
      "functions": 60,
      "lines": 60
    }
  },
  coverageReporters: [
    "json",
    "lcov",
    "text"
  ],
  globals: {
    "CONFIG_ENV": true
  }
};