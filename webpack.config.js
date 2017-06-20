const path = require('path')

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module : {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
}

module.exports = config