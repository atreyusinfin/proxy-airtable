const Unit = (() => {
    const allFields = [
        'Name', 'sites', 'tower', 'recordId (from Torre [Sync])', 'Torre (from Torre [Sync])', 
        'site_name (from Site) (from Torre [Sync]) 2', 'Ciudad (from Site) (from Torre [Sync])', 
        'Ciudad de site (from Torre [Sync])', 'somos_code (from Site) 2 (from Torre [Sync])', 
        'latitude (from Site) (from Torre [Sync])', 'longitude (from Site) (from Torre [Sync])', 
        'unit_number', 'servicios', 'suscripciones', 'record_id', 'edifico_map_url', 
        'instalaciones', 'routers_inventario (from instalaciones)', 'nombre_cliente', 
        'timekit_url_redirect', 'clientes', 'phone', 'codigo_area', 'Created', 'router_count', 
        'sum_router_count', 'terminar_instalacion_count', 'sum_terminar_instalacion_count', 
        'date_validation', 'sum_date_validation', 'Router (from instalaciones)',
        'tipo de equipo (from instalaciones)', 'promotor (from suscripciones)', 
        'instalaciones_count', 'router_status', 'Editar router (from instalaciones)', 
        'Count (suscripciones)', 'tv_sticks', 
        'timekit_url_tv (from cliente) (from suscripciones)', 'routers', 
        'instalacion_tipo (from instalaciones)', 'suscripciones 2', 'router_trigger', 
        'motivo_instalacion_no_exitosa (from instalaciones)', 'tickets', 
        'valid_instal_date (from instalaciones)', 'Ventas', 'primeros_nombres (from Ventas)', 
        'nombre_completo (from Ventas)', 'valid_date_clean', 'promotor (from suscripciones) 2', 
        'instalaciontiempo (from instalaciones)', 'site_name (from Site) (from Torre [Sync])', 
        'programar_cliente_pendiente (from suscripciones)', 'Infobooths today (from suscripciones)', 
        'topologia (from Site) (from Torre [Sync])', 'Name (from Torre [Sync])', 
        'Router Tipo (from routers)', 'email (from cliente) (from suscripciones)', 
        'Phone (from suscripciones)', 'count_routers_inventario (from instalaciones)', 
        'unidad_per_costumer (from suscripciones)', 'instalaciontiempo (from instalaciones) 2', 
        'source (from cliente) (from suscripciones)', 
        'referidos_experimento_instalacion_shortlink (from Referidos) (from cliente) (from suscripciones)', 
        'estado_programacion (from instalaciones)', 'Estrato', 
        'valid_instal_date copy (from instalaciones)', 'invoicing_date (from instalaciones)', 
        'Torre [Sync] (from unidad) (from suscripciones)', 'segundo_vilo_conex (from instalaciones)', 
        'suscripcion_status (from suscripciones)', 
        'referidos_experimento_primerpago_link (from Referidos) (from cliente) (from suscripciones)', 
        'router_instal_valid (from instalaciones)', 'somos_personas', 
        'nombre_completo (from somos_personas)'
    ]

    const computedFields = [
        'Name', 'sites', 'recordId (from Torre [Sync])', 'Torre (from Torre [Sync])', 
        'site_name (from Site) (from Torre [Sync]) 2', 'Ciudad (from Site) (from Torre [Sync])', 
        'Ciudad de site (from Torre [Sync])', 'somos_code (from Site) 2 (from Torre [Sync])', 
        'latitude (from Site) (from Torre [Sync])', 'longitude (from Site) (from Torre [Sync])', 
        'servicios', 'record_id', 'edifico_map_url', 'routers_inventario (from instalaciones)', 
        'nombre_cliente', 'timekit_url_redirect', 'phone', 'codigo_area', 'Created', 'router_count', 
        'sum_router_count', 'terminar_instalacion_count', 'sum_terminar_instalacion_count', 
        'date_validation', 'sum_date_validation', 'Router (from instalaciones)', 
        'tipo de equipo (from instalaciones)', 'promotor (from suscripciones)', 'instalaciones_count', 
        'router_status', 'Editar router (from instalaciones)', 'Count (suscripciones)', 
        'timekit_url_tv (from cliente) (from suscripciones)', 
        'instalacion_tipo (from instalaciones)', 'router_trigger', 
        'motivo_instalacion_no_exitosa (from instalaciones)', 'valid_instal_date (from instalaciones)', 
        'primeros_nombres (from Ventas)', 'nombre_completo (from Ventas)', 'valid_date_clean', 
        'promotor (from suscripciones) 2', 'instalaciontiempo (from instalaciones)', 
        'site_name (from Site) (from Torre [Sync])', 
        'programar_cliente_pendiente (from suscripciones)', 'Infobooths today (from suscripciones)', 
        'topologia (from Site) (from Torre [Sync])', 'Name (from Torre [Sync])', 
        'Router Tipo (from routers)', 'email (from cliente) (from suscripciones)', 
        'Phone (from suscripciones)', 'count_routers_inventario (from instalaciones)', 
        'unidad_per_costumer (from suscripciones)', 'instalaciontiempo (from instalaciones) 2', 
        'source (from cliente) (from suscripciones)', 
        'referidos_experimento_instalacion_shortlink (from Referidos) (from cliente) (from suscripciones)', 
        'estado_programacion (from instalaciones)', 'Estrato', 
        'valid_instal_date copy (from instalaciones)', 'invoicing_date (from instalaciones)', 
        'Torre [Sync] (from unidad) (from suscripciones)', 'segundo_vilo_conex (from instalaciones)', 
        'suscripcion_status (from suscripciones)', 
        'referidos_experimento_primerpago_link (from Referidos) (from cliente) (from suscripciones)', 
        'router_instal_valid (from instalaciones)', 'nombre_completo (from somos_personas)'
    ]

    const equivalent = {
        'uTorre [Sync]': 'tower',
        'u#_de _unidad': 'unit_number',
    }

    const mustBeArray = [
        'sites', 'tower', 'recordId (from Torre [Sync])', 'Torre (from Torre [Sync])',
        'site_name (from Site) (from Torre [Sync]) 2', 'Ciudad (from Site) (from Torre [Sync])',
        'Ciudad de site (from Torre [Sync])', 'somos_code (from Site) 2 (from Torre [Sync])',
        'latitude (from Site) (from Torre [Sync])', 'longitude (from Site) (from Torre [Sync])',
        'servicios', 'suscripciones', 'edifico_map_url', 'instalaciones',
        'routers_inventario (from instalaciones)', 'nombre_cliente', 'timekit_url_redirect',
        'phone', 'codigo_area', 'router_count', 'terminar_instalacion_count', 'date_validation',
        'Router (from instalaciones)', 'tipo de equipo (from instalaciones)',
        'promotor (from suscripciones)', 'router_status', 'Editar router (from instalaciones)',
        'tv_sticks', 'timekit_url_tv (from cliente) (from suscripciones)', 'routers',
        'instalacion_tipo (from instalaciones)', 'motivo_instalacion_no_exitosa (from instalaciones)',
        'valid_instal_date (from instalaciones)', 'Ventas', 'primeros_nombres (from Ventas)',
        'nombre_completo (from Ventas)', 'promotor (from suscripciones) 2',
        'instalaciontiempo (from instalaciones)', 'site_name (from Site) (from Torre [Sync])',
        'programar_cliente_pendiente (from suscripciones)', 'Infobooths today (from suscripciones)',
        'topologia (from Site) (from Torre [Sync])', 'Name (from Torre [Sync])',
        'Router Tipo (from routers)', 'email (from cliente) (from suscripciones)',
        'Phone (from suscripciones)', 'count_routers_inventario (from instalaciones)',
        'instalaciontiempo (from instalaciones) 2', 'source (from cliente) (from suscripciones)',
        'referidos_experimento_instalacion_shortlink (from Referidos) (from cliente) (from suscripciones)',
        'estado_programacion (from instalaciones)', 'Estrato',
        'valid_instal_date copy (from instalaciones)', 'invoicing_date (from instalaciones)',
        'Torre [Sync] (from unidad) (from suscripciones)', 'segundo_vilo_conex (from instalaciones)',
        'suscripcion_status (from suscripciones)',
        'referidos_experimento_primerpago_link (from Referidos) (from cliente) (from suscripciones)',
        'router_instal_valid (from instalaciones)', 'somos_personas', 'nombre_completo (from somos_personas)',
    ]


    return {
        run: (input) => {
            const _return = {}
            // change keys
            Object.keys(input).forEach(k => {
                const newKey = Object.keys(equivalent).indexOf(k) > -1 ? equivalent[k] : k
                if (
                    allFields.indexOf(newKey) > -1
                    && 
                    Object.keys(_return).indexOf(newKey) === -1
                ) {
                    _return[newKey] = input[k]
                }
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

module.exports = Unit
