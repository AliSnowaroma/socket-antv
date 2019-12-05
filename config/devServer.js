const path = require('path')
const fs = require('fs')

const engrc = fs.readFileSync(path.resolve(__dirname,'../engrc.json'),'utf8');

const webpackDevServer = {
    port:'9000',
    host:'0.0.0.0',
    overlay: {
        errors:true
    },
    proxy:engrc.proxy ? engrc.proxy : {}
}

module.exports = webpackDevServer