const Router = require('express')
const addresses = require('../usecases/addresses.js')
const newLead = require('../usecases/new.lead.js')

const v1 = Router()

v1.get('/sites/address/:recordId', async (req, res, next) => {
    const site = await addresses.getById(req.params.recordId)
    res.json(site)
})

v1.post('/leads', async (req, res, next) => {
    try {
        const id =  await newLead.create(req.body)
        res.json({ack: 'ok', id: id})
    } catch (e) {
        let error = {}
        let code = 500
        try {
            error = JSON.parse(e)
            code = error.code || 500
            delete error.code
        } catch(j) {
            error = {ack: 'fail', error: 'Internar Server Error'}
        }
        res.status(code).json(error)
    }
})

module.exports = v1
