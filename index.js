const pick = require('lodash.pick')

module.exports = (object, ...keys) => pick(object, keys)