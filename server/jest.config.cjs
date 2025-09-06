module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/routes/**/*.js',
    '<rootDir>/models/**/*.js',
  ],
  collectCoverageFrom: [
    'routes/**/*.js',
    'models/**/*.js',
    'middleware/**/*.js',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
