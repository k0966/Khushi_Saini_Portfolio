export default {
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/routes/**/*.test.js',
    '<rootDir>/models/**/*.test.js',
  ],
  collectCoverageFrom: [
    'routes/**/*.js',
    'models/**/*.js',
    'middleware/**/*.js',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testTimeout: 15000
};

