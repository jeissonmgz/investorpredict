import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
  coverageThreshold: {
    global: {
    branches: 2,
    functions: 10,
    lines: 10,
    statements: 10
    }

  }

};
export default config;