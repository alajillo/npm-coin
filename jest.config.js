const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './',
});
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@Search(.*)$': '<rootDir>/components/Search/$1',
        '^lodash-es$': 'lodash',
    },
};
module.exports = createJestConfig(customJestConfig);
