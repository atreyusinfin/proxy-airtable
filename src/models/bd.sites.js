const sdk = require('airtable')
const cfg = require('../config/config.js')

const site = ((sdk, cfg) => {
    // set up table values
    
    const base = cfg.get('BASE_BUILDING')
    const tableName = 'Site'
    const table = sdk.base(base)(tableName)

    // default values select method
    const select = {
        maxRecords: 1,
        fields: [
            'somos_code',
            'Name',
            'recordId',
            'State',
            'state_stepper',
        ]
    }
    
    return {
        getBySiteId: async (id) => {
            const _default = { id: id }

            // set the filter formula
            select.filterByFormula= `IF(recordId = "${id}", 1, 0)`
            
            try {
                const records = []
                const query = table.select(select)
                const pages = await query.eachPage((record, next) => {
                    records.push(...record)
                    next()
                })
                
                if (records.length === 0) records.push(_default)

                return records.map(r => { return {id: r.id, ...r.fields} })
            } catch(e) {
                console.log(e, 'error?')
                return [_default]
            }
        }
    }
})(sdk, cfg);

module.exports = site
