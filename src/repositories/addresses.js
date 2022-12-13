const bdSites = require('../models/bd.sites.js')
const leadsSites = require('../models/leads.sites.js')
const mkIISites = require('../models/mkII.sites.js')
const mkIITowers = require('../models/mkII.towers.js')
const mkIIUnits = require('../models/mkII.units.js')

const addresses = {
    bdSites,
    leadsSites,
    mkIISites,
    mkIITowers,
    mkIIUnits,
}

module.exports = addresses
