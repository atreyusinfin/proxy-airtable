const formattingAddress = (site) => {
    let string = ""
    if (site.address && site.Ciudad) {
        string = `${site.address}, ${site.Ciudad}`
    } else if (site.address) {
        string = site.address
    } else if (site.Barrio && site.Ciudad) {
        string = `${site.Barrio}, ${site.Ciudad}`
    } else if (site.Ciudad) {
        string = site.Ciudad
    }
    return string
}

const orderByTower = (p, n) => {
    if (p.Torre < n.Torre) return -1 
    if (p.Torre > n.Torre) return 1 
    return 0
}

const formattingTower = (tower) => {
    return {
        status: tower.Estado,
        towerNumber: tower.Torre,
        recordId: tower.recordId,
        name: tower.Name,
        recordIdMarkDb: tower.record_id_tower_mark,
    }
}

const addresses = (parts) => {

    console.log(parts, 'parts')
    const {
        bdSite,
        leadsSite,
        mkSite,
        mkTower,
    } = parts

    const all = mkSite.map(mk => {
        return {
            address: mk.address,
            addressFormatted: formattingAddress(mk),
            barrio: mk.Barrio,
            ciudad: mk.Ciudad,
            name: mk.site_name,
            recordId: bdSite[0].recordId,
            recordIdLeadsDb: leadsSite[0].recordId_leadsdb,
            somosCode: mk.somos_code,
            status: mk.Status,
            torres: mkTower.sort(orderByTower).map(formattingTower)
        }
    })
    return all.pop()
}

export default addresses
