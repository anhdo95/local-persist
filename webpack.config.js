const { join } = require('path')

const context = join(__dirname, 'src')

module.exports = {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    // filename: 'local-persist.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'localPersist',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
