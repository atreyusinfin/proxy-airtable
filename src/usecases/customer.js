const repository = require('../repositories/mk.js')

const NewCustomer = ((repository) => {
     const {
        unitsAdapter,
        customerAdapter,
        suscriptionAdapter,
        towerAdapter,
        json,
        towerModel,
        unitModel,
        suscriptionModel,
        customerModel,
    } = repository

    const rollback = []

    const handleError = async (e) => {
        // json 
        // We are going to hide the Airtable error for security reasons
        const error = { ack: 'fail', code: 500, error: `Internal Server Error`, }
        if (json(e)) {
            const _error = JSON.parse(e)
            error.error = _error.error
            if (_error.code) { error.code = _error.code }
        } else {
            error.error = e
        }

        // await new Promise( _ => setTimeout(_ => {return true}, 1000))
        for (const i in rollback) {
            const m = rollback[i]
            try {
                await repository[m.model].delete(m.id)
            } catch(_e) {
                error.error = _e
                throw JSON.stringify(error)
            }
        }

        // Empty the rollback array (since node is stateful)
        rollback.length = 0
        throw JSON.stringify(error)
    }

    return {
        create: async (request) => {
            const error = { ack: 'fail', code: 400 }
            const _return = {}
            try {
                if (Object.keys(request).length === 0) {
                    error.error = `Invalid Empty Request.` 
                    throw (JSON.stringify(error))
                }

                // 1. Unit
                // 2. Suscription
                // 3. Customer
                
                // 1. Unit
                const unit = unitsAdapter.run(request)
                const exist =  await towerModel.findByCriteria(`RECORD_ID() = '${unit.tower[0]}'`)

                if (exist.length === 0) {
                    error.error = `Tower not found`
                    throw JSON.stringify(error)
                }

                const unitId = await unitModel.create(unit)
                // Add in case error (rollback transaction)
                rollback.push({id: unitId, model: 'unitModel'})
                _return.unitId = unitId

                // 2. Suscription
                request.unidad = unitId
                const suscription = suscriptionAdapter.run(request)
                const suscriptionId = await suscriptionModel.create(suscription)
                // Add in case error (rollback transaction)
                rollback.push({id: suscriptionId, model: 'suscriptionModel'})
                _return.suscriptionId = suscriptionId

                // 3. Customer
                request.suscripciones = suscriptionId
                const customer = customerAdapter.run(request)
                const customerId = await customerModel.create(customer)
                // Add in case error (rollback transaction)
                rollback.push({id: customerId, model: 'customerModel'})
                _return.customerId = customerId

                return _return
            } catch (e) {
                console.log(e)
                await handleError(e)
            }
        },
    }
})(repository)

module.exports = NewCustomer
