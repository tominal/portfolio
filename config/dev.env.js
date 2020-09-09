'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  API_URL: '"http://localhost:8001"',
  NODE_ENV: '"development"'
})
