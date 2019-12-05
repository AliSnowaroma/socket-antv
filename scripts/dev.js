const config = require('../config/webpack-dev-config')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const PrettyError = require('pretty-error');
const devServer = require('../config/devServer.js')
const opn = require('opn')

const compiler = webpack(config)

try {
  new WebpackDevServer(compiler, devServer).listen(devServer.port);
  let url = 'http://localhost:9000'

  console.log('web is running at 9000')
  opn(url)
} catch (err) {
  console.log(err);
}
