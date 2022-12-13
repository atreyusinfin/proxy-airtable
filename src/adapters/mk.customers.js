const Customer = (() => {
    const allFields = [
        'nombre_del_cliente', 'name', 'surname', 'document_type', 'document_number', 'email', 
        'phone_code', 'phone_number', 'suscripciones', 'tv_bookig (from suscripciones)', 
        'instantaneo_tipo (from suscripciones)', 
        'precio Rollup (from productos) Rollup (from servicos)', 'unidad_info_for_timekit', 
        'timekit_redirect_url', 'dynamic_redirect_instant_book_type', 
        'instantaneo_book_url (from unidades)', 'instantaneo_book_conditional_redirect', 'status', 
        'source', 'created', 'airtable_customer_id', 'soporte_editar_link', 'añadir_suscripcion', 
        'Añadir suscripcion', 'updated_at', 'timekit_url_support', 'first_surname', 
        'servicios (from suscripciones)', 'tv_users', 'tv _redirect', 'add_suscription', 
        'instalaciones_tiempo', 'Created By', 'referidor', 'typeform_link_referido', 
        'promotor_sync', 'trigger_customer', 'customer_code', 
        'nombre_sitio (from unidad) (from suscripciones)', 'instal_valid (from suscripciones)', 
        'timekit_url_tv (from suscripciones)', 'torre (from suscripciones)', 'lead_id', 
        'Name (from suscripciones)', 'customer_phone', 'Site Name from Unidad (from suscripciones)', 
        'perioda de prueba (from suscripciones)', 
        'instalaciones_tiempo (from suscripciones) 2', 'Ciudad (from suscripciones)', 
        'Router (from instalaciones) (from unidad) (from suscripciones)', 
        'tipo de equipo (from instalaciones) (from unidad) (from suscripciones)', 
        'servicios_kustomer', 'periodo_prueba_kustomer', 'instalaciones_tiempo_kustomer', 
        'mac_kustomer', 'router_kustomer', 'accepted_terms', 'accepted_terms_metadata', 
        'accepted_terms_date', 'Customer Type', 'old_airtable (from suscripciones)', 'kustomer_id', 
        'B2B Dia de corte', 'B2B Payment Link', 'unidad_per_costumer (from suscripciones)', 
        'actualizar_cliente', 'referidos_experimento_instalacion_shortlink (from Referidos)', 
        'referidos_experimento_instalacion_QR (from Referidos)', 'unidad (from suscripciones) 2', 
        'Grouping_customer_variable', 'Crear usuario de Tv', 'somos_code (from suscripciones)', 
        'Torre (from Torre [Sync]) (from unidad) (from suscripciones)', 
        'record_id (from suscripciones)', 'Symmetric Column', 'Referidos', 
        'status suscripcion - se puede borrar', 'apt (from suscripciones)', 
        'referidos_experimento_primerpago_link (from Referidos)', 'somos_personas', 
        'nombre_completo (from somos_personas)'
    ]

    const computedFields = [
        'nombre_del_cliente', 'tv_bookig (from suscripciones)', 'instantaneo_tipo (from suscripciones)',
        'precio Rollup (from productos) Rollup (from servicos)', 'unidad_info_for_timekit', 
        'timekit_redirect_url', 'dynamic_redirect_instant_book_type', 
        'instantaneo_book_url (from unidades)', 'instantaneo_book_conditional_redirect', 'created', 
        'airtable_customer_id', 'soporte_editar_link', 'añadir_suscripcion', 'Añadir suscripcion', 
        'updated_at', 'timekit_url_support', 'first_surname', 'servicios (from suscripciones)', 
        'tv _redirect', 'add_suscription', 'instalaciones_tiempo', 'Created By', 
        'typeform_link_referido', 'trigger_customer', 'nombre_sitio (from unidad) (from suscripciones)', 
        'instal_valid (from suscripciones)', 'timekit_url_tv (from suscripciones)', 
        'torre (from suscripciones)', 'Name (from suscripciones)', 'customer_phone', 
        'Site Name from Unidad (from suscripciones)', 'perioda de prueba (from suscripciones)', 
        'instalaciones_tiempo (from suscripciones) 2', 'Ciudad (from suscripciones)', 
        'Router (from instalaciones) (from unidad) (from suscripciones)', 
        'tipo de equipo (from instalaciones) (from unidad) (from suscripciones)', 
        'servicios_kustomer', 'periodo_prueba_kustomer', 'instalaciones_tiempo_kustomer', 'mac_kustomer', 
        'router_kustomer', 'old_airtable (from suscripciones)', 'unidad_per_costumer (from suscripciones)', 
        'referidos_experimento_instalacion_shortlink (from Referidos)', 
        'referidos_experimento_instalacion_QR (from Referidos)', 'unidad (from suscripciones) 2', 
        'Grouping_customer_variable', 'Crear usuario de Tv', 'somos_code (from suscripciones)', 
        'Torre (from Torre [Sync]) (from unidad) (from suscripciones)', 'record_id (from suscripciones)', 
        'status suscripcion - se puede borrar', 'apt (from suscripciones)', 
        'referidos_experimento_primerpago_link (from Referidos)', 'nombre_completo (from somos_personas)'
    ]

    const equivalent = {
        "cname": "name",
        "csurname": "surname",
        "cphone_code": "phone_code",
        "cdocument_type": "document_type",
        "cdocument_number": "document_number",
        "cemail": "email",
        "csource": "source",
        "csuscripciones": "suscripciones",
        "clead_id": "lead_id",
        "caccepted_terms": "accepted_terms",
        "caccepted_terms_date": "accepted_terms_date",
        "caccepted_terms_metada": "accepted_terms_metada"
    }

    const mustBeArray = 
        [
            "suscripciones", "tv_bookig (from suscripciones)", "instantaneo_tipo (from suscripciones)",
            "unidad_info_for_timekit", "dynamic_redirect_instant_book_type",
            "instantaneo_book_url (from unidades)", "instantaneo_book_conditional_redirect",
            "servicios (from suscripciones)", "tv_users", "instalaciones_tiempo", "promotor_sync",
            "nombre_sitio (from unidad) (from suscripciones)", "instal_valid (from suscripciones)",
            "timekit_url_tv (from suscripciones)", "torre (from suscripciones)",
            "Name (from suscripciones)", "Site Name from Unidad (from suscripciones)",
            "perioda de prueba (from suscripciones)", "instalaciones_tiempo (from suscripciones) 2",
            "Ciudad (from suscripciones)", "Router (from instalaciones) (from unidad) (from suscripciones)",
            "tipo de equipo (from instalaciones) (from unidad) (from suscripciones)",
            "old_airtable (from suscripciones)", "unidad_per_costumer (from suscripciones)",
            "actualizar_cliente", "referidos_experimento_instalacion_shortlink (from Referidos)",
            "referidos_experimento_instalacion_QR (from Referidos)", "unidad (from suscripciones) 2",
            "somos_code (from suscripciones)",
            "Torre (from Torre [Sync]) (from unidad) (from suscripciones)",
            "record_id (from suscripciones)", "Symmetric Column", "Referidos",
            "status suscripcion - se puede borrar", "apt (from suscripciones)",
            "referidos_experimento_primerpago_link (from Referidos)", "somos_personas",
            "nombre_completo (from somos_personas)"
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

module.exports = Customer
