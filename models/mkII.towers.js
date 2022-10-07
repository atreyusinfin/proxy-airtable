import sdk from 'airtable'
import {env} from 'node:process'

const base = env.BASE_MK || ''

if (base === '') {
    throw new Error('BASE_MK env is required')
}

const site = ((sdk, base) => {
    // set up table values
    const tableName = 'Torre [Sync]'
    const table = new sdk().base(base)(tableName)

    // default values select method
    const select = {
        // maxRecords: 1,
        fields: [
            'Name',
            'Torre',
            'Estado',
            'recordId',
            'record_id_tower_mark',
        ]
    }
    
    return {
        getBySiteId: async (id) => {
            const _default = { id: id }

            // set the filter formula
            select.filterByFormula= `IF({Torre_id_from_site_mark_2} = "${id}", 1, 0)`
            
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
})(sdk, base);

export default site
