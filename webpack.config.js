const path = require('path')
const dev = require(__dirname + '/config/development.js')
const production = require(__dirname + '/config/production.js')
module.exports = function(env, args) {
  env = env || 'development'
  return {
    mode: env,
    ...(env == 'development' ? dev : production)
  }
}
