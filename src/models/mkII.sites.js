const sdk = require('airtable')
const cfg = require('../config/config.js')

const site = ((sdk, cfg) => {
    // set up table values
    console.log(cfg.get('all'))
    
    const base = cfg.get('BASE_MK')
    const tableName = 'Site [Sync]'
    const table = new sdk.base(base)(tableName)

    // default values select method
    const select = {
        // maxRecords: 1,
        fields: [
            'Name',
            'site_name',
            'somos_code',
            'Estrato',
            'Ciudad',
            'Barrio',
            'status',
            'address',
            'ciudad_barrio',
            'record_BuildingDeployment',
            'recordId (from torres)',
            'record_id_tower_markII',
        ]
    }
    
    return {
        getBySiteId: async (id) => {
            const _default = { id: id }

            // set the filter formula
            select.filterByFormula= `IF({record_BuildingDeployment} = "${id}", 1, 0)`
            
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
