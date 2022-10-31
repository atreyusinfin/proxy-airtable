const cfg = require('./config.js')
const mockery = require('mockery')
const mAirtable = require('./mocks/models.js')
const sites = require('../../models/bd.sites.js')
const assert = require('assert')

describe('Testing Models', _ => {
    mockery.registerAllowable(sites) // Register the SUT
    mockery.registerMock('airtable', mAirtable) //Register the Mock
    mockery.enable({ useCleanCache: true, }) // Allow clearing cache when reload the SUT

    // Reload the SUT with dependences already mocked
    const intermediary = require('../../models/bd.sites.js') 

    it('#base: building, table: sites', _ => {
        intermediary.getBySiteId('empty').then(response => {
            console.log(response, 'response')
        })
        _() // Done
    })
})
