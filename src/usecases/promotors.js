const model = require('../models/leads.promotors.js')

const NewPromotor = ((model) => {
    const handleError = (e) => {
        console.log('Error:', e)
        // json 
        // We are going to hide the Airtable error for security reasons
        const error = { ack: 'fail', code: 500, error: `Internal Server Error`, }
        if (json(e)) {
            const _error = JSON.parse(e)
            error.error = _error.error
            if (_error.code) { error.code = _error.code }
        }
        throw JSON.stringify(error)
    }

    return {
        getById: async (id) => {
            try {
                let criteria = ''
                if (id !== '') { criteria =  `RECORD_ID() = '${id}'` }
                const res = await model.find(criteria)
                if (res.length === 0) {
                    throw JSON.stringify({ack: 'fail', code: 404, error: 'Not Found'})
                }
                return res
            } catch (e) {
                handleError(e)
            }
        },
        getAll: async () => {
            try {
                return await model.find('')
            } catch (e) {
                handleError(e)
            }
        }
    }
})(model)

module.exports = NewPromotor
