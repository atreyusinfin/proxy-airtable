const bdSites = require('../models/bd.sites.js')
const leadsSites = require('../models/leads.sites.js')
const mkIISites = require('../models/mkII.sites.js')
const mkIITowers = require('../models/mkII.towers.js')

const addresses = {
    bdSites,
    leadsSites,
    mkIISites,
    mkIITowers,
}

module.exports = addresses
