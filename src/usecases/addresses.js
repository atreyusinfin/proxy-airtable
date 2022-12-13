const repository = require('../repositories/addresses.js')
const view = require('../views/addresses.js')

const addresses = ((repository) => {
    // Expand models
    const {
        bdSites, 
        leadsSites, 
        mkIISites,
        mkIITowers,
        mkIIUnits,
    } = repository

    return {
        getById: async (id) => {
            let leadsSite = [{}]
            const promises = []
            try {
                promises.push(bdSites.getBySiteId(id))
                promises.push(mkIISites.getBySiteId(id))
                promises.push(mkIITowers.getBySiteId(id))
            
                const ready = await Promise.all(promises)
                if ( ready[0][0].length > 0 
                    && ready[0][0].somos_code
                ) {
                    leadsSite = await leadsSites.getBySiteCode(ready[0][0].somos_code)
                }

                const consolidate = {
                    bdSite : ready[0],
                    leadsSite,
                    mkSite : ready[1],
                    mkTower : ready[2],
                }

                return view(consolidate)
            } catch(e){
                console.log('..............')
                console.log(e, 'error')
                return {error: 'Internal Server Error'}
            }


        }
    }
})(repository)

module.exports = addresses
