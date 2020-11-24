module.exports = {
  moduleFileExtensions: ['js', 'vue', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
  },
  collectCoverage: false,
  globals: {},
}
