let records = []
let tableName = ''
let baseName = ''

const mAirtable = ( _ => {
    const self = this
    const events = []

    const query = {
        eachPage: async (callback) => {
            records = []
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
        baseName = _.toLowerCase()
        return table 
    }


    return {
        base: (input) => {
            events.push({method: 'base', input})
            return mAirtable 
        },
        base: (input) => {
            events.push({method: 'base', input})
            return mAirtable 
        },
        getEvents: (filter = {}) => {
            if (typeof filter === 'function') {
                return events.filter(filter)
            }
        }
    }
})()

// Mock all calls

const spy = [ 'one', 'two', 'three', ]

spy.forEach(m => {
    Object.assign(mAirtable , {
        [m]: (input) => {
            events.push({method: 'base', input})
            return mAirtable 
        }
    })
})

console.log('mAirtable', Object.keys(mAirtable))


const getFake = _ => {
    // console.log(tableName, 'tableName')
    // console.log(baseName, 'baseName')
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
    baseName = _.toLowerCase()
    return table 
}

const airtable = {
    base:  base, 
}

module.exports = airtable
