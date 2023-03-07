module.exports = {
  preset: './node_modules/@stratsys/mfe-cli/presets/jest.js',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
}
