const sdk = require('airtable')
const cfg = require('../config/config.js')

const site = ((sdk, cfg) => {
    // set up table values
    const base = cfg.get('BASE_LEADS')
    const tableName = 'sites'
    const table = new sdk.base(base)(tableName)

    // default values select method
    const select = {
        // maxRecords: 1,
        fields: [
            'recordId',
            'State',
            'somos_code',
            'leads',
            'recordId_leadsdb',
        ]
    }
    
    return {
        getBySiteCode: async (code) => {
            const _default = { code: code }

            // set the filter formula
            select.filterByFormula = `IF(somos_code = "${code}", 1, 0)`
            
            try {
                const records = []
                const query = table.select(select)
                const pages = await query.eachPage((record, next) => {
                    records.push(...record)
                    next()
                })
                
                if (records.length === 0) records.push(_default)

                return records.map(r => { return {...r.fields} })
            } catch(e) {
                console.log(e, 'error?')
                return [_default]
            }
        }
    }
})(sdk, cfg);

module.exports = site
