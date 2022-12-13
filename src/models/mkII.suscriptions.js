const sdk = require('airtable')
const cfg = require('../config/config.js')
const promisify = require('util').promisify

const Suscriptions = ((sdk, cfg) => {
    // set up table values
    const base = cfg.get('BASE_MK')
    const tableName = 'suscripciones'
    const table = new sdk.base(base)(tableName)

    // default values select method
    const select = {
        // maxRecords: 1,
        // fields: [ ]
    }
    
    return {
        create: async (suscription) => {
            const obj = [{ fields: suscription }]
            const _call = promisify(table.create)

            try {
                const response = await _call(obj)
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

module.exports = Suscriptions
