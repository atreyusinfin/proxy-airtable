const adapter = require('../adapters/lead.js')
const phoneFormat = require('../helpers/formatting.js').phone
const json = require('../helpers/validator.js').json
const leadModel = require('../models/leads.leads.js')

const lead = {
    adapter,
    phoneFormat,
    json,
    leadModel
}

module.exports = lead
