const sdk = require('airtable')
const cfg = require('../config/config.js')
const promisify = require('util').promisify

const site = ((sdk, cfg) => {
    // set up table values
    const base = cfg.get('BASE_LEADS')
    const tableName = 'promotores'
    const table = new sdk.base(base)(tableName)

    // default values select method
    const select = {
        fields : [
            'nombre_completo',
            'recordId_leadsdb'
        ]
        // maxRecords: 1,
    }

    return {
        find: async (criteria = '') => {
            select.filterByFormula = criteria

            try {
                const records = []
                const query = table.select(select)
                const pages = await query.eachPage((record, next) => {
                    records.push(...record)
                    next()
                })

                return records.map(r => { return {...r.fields} })
            } catch(e) {
                console.log(e, 'error')
                throw `Airtable error`
            }
        }
    }
})(sdk, cfg);

module.exports = site
