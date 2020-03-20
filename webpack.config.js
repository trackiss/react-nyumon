import Path from 'path'
import HtmlPlugin from 'html-webpack-plugin'

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname + '/dist')
  },

  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    })
  ],

  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  }
}
