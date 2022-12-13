const Tower = (() => {
    const allFields = [
        'Name', 'unidades', 'first_instal_date_torre', 'Site', 'Name (from Site)', 
        'google_maps_link (from Site)', 'topologia (from Site)', 'latitude (from Site)', 
        'longitude (from Site)', 'Estado', 'suscriptions_per_tower', 'viability_supervisor', 
        'topologia (from Site) 2', 'site_name (from Site)', 'site_name (from Site)', 'Site From sync', 
        'Torre', 'tower_total_units', 'tower_etapa', 'Appointment', 
        'enlace_google_maps (from sitio) SCYNC', 'nombre_sitio (from sitio)', 'tower_airtable_id', 
        'ops_flow', 'longitude (from sitio)', 'latitude (from sitio)', 'latitude (from sitio) copy', 
        'Ciudad de site', '#_floors', 'start_floor', 'end_floor', 'apts_per_floor', 'no_viable_reason', 
        'instalaciones', 'instalaciones 2', 'units', 'somos_code (from Site) 2', 'record_id_tower_mark', 
        'recordId', 'Ciudad (from Site)', 'Torre_id_from_site_mark_2', 
        'record_BuildingDeployment (from Site)', 'Estrato (from Site)', 'address (from Site)'
    ]

    const computedFields = [
        'first_instal_date_torre', 'google_maps_link (from Site)', 'topologia (from Site)',
        'latitude (from Site)', 'longitude (from Site)', 'suscriptions_per_tower',
        'topologia (from Site) 2', 'site_name (from Site)', 'site_name (from Site)',
        'somos_code (from Site) 2', 'record_id_tower_mark', 'Ciudad (from Site)',
        'record_BuildingDeployment (from Site)', 'Estrato (from Site)', 'address (from Site)',
    ]

    const equivalent = {
        '': '',
    }

    const mustBeArray = [
        'unidades', 'Site', 'google_maps_link (from Site)', 'topologia (from Site)',
        'latitude (from Site)', 'longitude (from Site)', 'topologia (from Site) 2',
        'site_name (from Site)', 'site_name (from Site)', 'Ciudad de site', 'no_viable_reason',
        'somos_code (from Site) 2', 'Ciudad (from Site)', 'record_BuildingDeployment (from Site)',
        'Estrato (from Site)', 'address (from Site)',
    ]


    return {
        run: (input) => {
            const _return = {}
            // change keys
            Object.keys(input).forEach(k => {
                const newKey = Object.keys(equivalent).indexOf(k) > -1 ? equivalent[k] : k
                _return[newKey] = input[k]
            })

            // transform in array
            mustBeArray.forEach(k => {
                const isArray = Object.keys(_return).indexOf(k) > -1
                if (isArray && typeof _return[k] !== 'object') {
                    _return[k] = [_return[k]]
                }
            })

            computedFields.forEach(f => {
                if (_return[f]) {
                    console.log(
                        '[On create customer] position removed, key:'
                        , f
                        , ', value:'
                        , _return[f]
                    )
                }
                delete _return[f]
            })

            return _return
        }
    }
})()

module.exports = Tower
