export default {
  preset: 'ts-jest',
  displayName: 'Server unit tests',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@ts/(.*)': '<rootDir>/src/ts/$1',
  },
};
