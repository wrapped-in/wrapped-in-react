'use strict'

module.exports = require(`./build/index.${process.env.NODE_ENV === 'production' ? 'production.min' : 'development'}.js`)