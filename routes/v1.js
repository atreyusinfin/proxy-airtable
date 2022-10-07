import {Router} from 'express'
import addresses from '../usecases/addresses.js'

const v1 = Router()

v1.get('/address/:recordId', async (req, res, next) => {
    const site = await addresses.getById(req.params.recordId)
    res.json(site)
})

export default v1
