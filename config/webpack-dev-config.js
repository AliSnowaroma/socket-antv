const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode:'development',
  entry:path.resolve(__dirname,'../index.js'),
  output:{
    path:path.resolve(__dirname,'../build')
  },
  resolve:{
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  target: "web",
  devtool:"source-map",
  module:{
    rules: [
      {
        test: /\.(jsx)|(js)$/,
        exclude: /node_modules/,
        use:'babel-loader',
      },
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname,'../index.html')
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    }),
  ]
}
