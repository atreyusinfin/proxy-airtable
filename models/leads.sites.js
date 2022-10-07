import sdk from 'airtable'
import {env} from 'node:process'

const base = env.BASE_LEADS || ''

if (base === '') {
    throw new Error('BASE_LEADS env is required')
}

const site = ((sdk, base) => {
    // set up table values
    const tableName = 'sites'
    const table = new sdk().base(base)(tableName)

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
            select.filterByFormula= `IF(somos_code = "${code}", 1, 0)`
            
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
})(sdk, base);

export default site
