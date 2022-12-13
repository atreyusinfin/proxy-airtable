const unitsAdapter = require('../adapters/mk.units.js')
const customerAdapter = require('../adapters/mk.customers.js')
const suscriptionAdapter = require('../adapters/mk.suscriptions.js')
const towerAdapter = require('../adapters/mk.tower.js')
const json = require('../helpers/validator.js').json
const towerModel = require('../models/mkII.towers.js')
const unitModel = require('../models/mkII.units.js')
const suscriptionModel = require('../models/mkII.suscriptions.js')
const customerModel = require('../models/mkII.customers.js')

const mk = {
    unitsAdapter,
    customerAdapter,
    suscriptionAdapter,
    towerAdapter,
    json,
    towerModel,
    unitModel,
    suscriptionModel,
    customerModel,
}

module.exports = mk
