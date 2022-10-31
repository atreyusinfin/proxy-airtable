const env = require('node:process').env

const config = ((env) => {
    const cfg = {
        BASE_BUILDING: env.BASE_BUILDING || '',
        BASE_LEADS: env.BASE_LEADS || '',
        BASE_MK: env.BASE_MK || '',
    }

    return {
        get: key => {
            if (key.toLowerCase() === 'all') {
                return cfg
            }

            if (cfg[key] !== undefined) {
                return cfg[key]
            }

            if (cfg[key] === '') {
                throw new Error(`${key} is required`)
            }

            throw new Error(`${key} is not defined`)
        },
        set: (key, value) => {
            if (key && value) {
                cfg[key] = value
            }
        }
    }
})(env)

module.exports = config
