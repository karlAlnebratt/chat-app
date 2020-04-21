const path = require('path')

module.exports = {
  includePaths: [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'server'),
  ],
  excludePatterns: [
    '**/*.test.*',
    /.*\/__mock__\/.*/,
  ],
  maxImportLineLength: 10,
  useSemicolons: false,
  multilineImportStyle: 'single',
}
