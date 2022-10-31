let records = []
let tableName = ''
let baseName = ''

const getFake = _ => {
    console.log(tableName, 'tableName')
    console.log(baseName, 'baseName')
    return []
}

const query = {
    eachPage: async (callback) => {
        console.log(callback)
        records = [ ]
        callback(records, _ => {console.log('this is the end')})
    },
}

const select = {
    select: _ => {
        if ( _.filterByFormula === 'IF(recordId = "empty", 1, 0)') { records  = [] }
        if ( _.filterByFormula === 'IF(recordId = "empty", 1, 0)') { records  = getFake() }
        console.log(_, '_______')
        return query
    }
}

const table = _ => { 
    tableName = _.toLowerCase()
    return select 
}

const base = _ => { 
    console.log(_, '')
    baseName = _.toLowerCase()
    return table 
}

const airtable = {
    base:  base, 
}

module.exports = airtable
