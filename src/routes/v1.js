const Router = require('express')
const addresses = require('../usecases/addresses.js')
const lead = require('../usecases/lead.js')
const promotors = require('../usecases/promotors.js')
const campaigns = require('../usecases/campaigns.js')
const customer = require('../usecases/customer.js')

const v1 = Router()

v1.get('/sites/address/:recordId', async (req, res, next) => {
    const site = await addresses.getById(req.params.recordId)
    res.json(site)
})

v1.get('/leads/promotors/:promotorId?', async (req, res, next) => {
    try {
        const promotorId = req.params.promotorId || ''
        let list = []
        list = await promotors.getById(promotorId)
        res.json(list)
    } catch (e) {
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

v1.get('/leads/campaigns/:campaignId?', async (req, res, next) => {
    try {
        const campaignId = req.params.campaignId || ''
        let list = []
        list = await campaigns.getById(campaignId)
        res.json(list)
    } catch (e) {
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

v1.post('/leads', async (req, res, next) => {
    try {
        const id =  await lead.create(req.body)
        res.json({ack: 'ok', id: id})
    } catch (e) {
        console.log('Error', e)
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

v1.patch('/leads/:leadId', async (req, res, next) => {
    try {
        const leadId = req.params.leadId
        const resonse =  await lead.update(leadId, req.body)
        res.status(204).send()
    } catch (e) {
        console.log('Error', e)
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

v1.post('/mark/customers', async (req, res, next) => {
    try {
        const id =  await customer.create(req.body)
        res.json({ack: 'ok', idList: id})
    } catch (e) {
        let error = {}
        let code = 500
        try {
            error = JSON.parse(e)
            code = error.code || 500
            delete error.code
        } catch(j) {
            console.error(j, 'Error catched in router')
            error = {ack: 'fail', error: 'Internar Server Error'}
        }
        res.status(code).json(error)
    }
})

module.exports = v1
