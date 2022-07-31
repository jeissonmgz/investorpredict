import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  roots: [
    "src"
  ],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
  coverageThreshold: {
    global: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100
    }

  }

};
export default config;