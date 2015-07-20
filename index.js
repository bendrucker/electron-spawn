var spawn = require('npm-execspawn')
var path = require('path')

module.exports = function () {
  var scripts = Array.prototype.slice.call(arguments)
  var opts = {}
  if (typeof scripts[scripts.length - 1] !== 'string') {
    opts = scripts.slice(-1)[0]
    scripts = scripts.slice(0, -1)
  }
  var cmd = ['electron', path.resolve(__dirname, 'cli.js')].concat(scripts)
  return spawn(cmd.join(' '), opts)
}
