const sdk = require('airtable')
const cfg = require('../config/config.js')
const promisify = require('util').promisify
const http = require('https')

const Units = ((sdk, cfg) => {
    // set up table values
    const base = cfg.get('BASE_MK')
    const tableName = 'units'
    const table = new sdk.base(base)(tableName)

    // default values select method
    const select = {
        // maxRecords: 1,
        // fields: [ ]
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
        },
        create: async (unit) => {
            const obj = [{ fields: unit }]
            const _call = promisify(table.create)

            try {
                const response = await _call(obj)
                return response.map(r => r.getId()).pop()
            } catch(e) {
                console.log(e, 'error')
                throw `Airtable error`
            }
        },
        update: async (id, lead) => {
            const obj = [{ id: id, fields: lead }]
            const _call = promisify(table.update)

            try {
                const response = await _call(obj)
                console.log(response, 'air table response')
                return response.map(r => r.getId()).pop()
            } catch(e) {
                console.log(e, 'error')
                throw `Airtable error`
            }
        },
        delete: async (id) => {
            const _call = promisify(table.destroy)

            try {
                const res = await _call(id)
                console.log('Deleted: record', res.id , 'in', res._table.name)
                return true
            } catch(e) {
                console.log(e, 'error')
                throw `Airtable error`
            }
        }
    }
})(sdk, cfg);

module.exports = Units
