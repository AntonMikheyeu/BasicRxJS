const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    port: 4200
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html'
    })
  ]
}
