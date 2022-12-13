const Suscription = (() => {
    const allFields = [
        "Name","unidad","routers_inventario (from instalaciones) (from unidad)",
        "nombre_sitio (from unidad)","torre","apt","periodo de prueba","cliente",
        "promotor","unidad_record_id","servicios","precio (from productos)",
        "precio Rollup (from productos)","suscription_airtable_id","Timekit integration",
        "timekit_url_redirect","instantaneo_tipo","instantaneo_book_url","enlace_google_maps",
        "nombre_cliente","suscripcion_status","instalaciones","codigo_area (from clientes)",
        "Phone","Created","tickets","soporte_editar_link (from cliente)","soporte_editar_servicio_link",
        "document_type (from cliente)","document_number (from cliente)","email (from cliente)",
        "instalaciones_tiempo","Router - Instalations",
        "tipo de equipo (from instalaciones) (from unidad)","editar_info_cliente_boton",
        "editar_servicio","editar_servicio_boton","soporte_editar_link (from cliente) 2",
        "estado_programacion (from instalaciones)","router_count","terminar_instalacion_count",
        "date_validation","sum_date_validation","sum_terminar_instalacion_count","sum_router_count",
        "instal_valid_reasons","instal_valid","old_airtable","tv_bookig","Router","router_status",
        "Programación TV","edit_suscription_state","edit_state",
        "Editar router (from instalaciones) (from unidad)","timekit_url_support (from cliente)",
        "Motivo_instalación_invalida","motivo_instalacion_no_exitosa (from instalaciones) (from unidad)",
        "source (from cliente)","tv_users (from cliente)","Discounts","Discounts 2","instalaciones 3",
        "router_from_units","tv_sticks_from_units","fecha_retiro",
        "instalacion_tipo (from instalaciones) (from unidad)","discounts_test",
        "Type (from discounts_test)","dias (from perioda de prueba)","dias_numero_test",
        "router_autom_lookup","trigger_dias","status_tv","visitas_soporte2","tickets 3","tickets 2",
        "customers copy","programar_cliente_pendiente","lista_de_espera_tv","timekit_suscripciones",
        "test_status","Field 93","valid_instal_date","somos_code","sales_valid","timekit_url_tv",
        "Ventas","apellidos (from Ventas)","primeros_nombres (from Ventas)",
        "nombre_completo (from Ventas)","billing_date","Number (from Discounts)",
        "calculation_disccount_in_months","Infobooths today",
        "instalaciontiempo (from instalaciones) (from unidad)","megas (from servicios)",
        "meses_periodo_prueba","instalacion_dia","instalacion_hora","Site Name from Unidad",
        "longitude","latitude","reminder_date","10_days_befor_billing","record_id","Ciudad",
        "topologia","Torre (from Torre [Sync]) (from unidad)",
        "tipo de equipo (from instalaciones) (from unidad) 2","Router Tipo (from routers) (from unidad)",
        "recordId (from Torre [Sync]) (from unidad)","responsable_traslado",
        "referidos_experimento_instalacion_shortlink",
        "estado_programacion (from instalaciones) (from unidad)","referidos_experimento_instalacion_QR",
        "status (from cliente)","Estrato","InstallationDate_Invoicing","precio_rollup_dev",
        "segundo_vilo_conex","referidos_experimento_instalacion_QR (from Referidos) (from cliente)",
        "estado_programacion (from instalaciones) (from unidad) 2",
        "motivo_instalacion_no_exitosa (from instalaciones) (from unidad) 2",
        "instalacion_tipo (from instalaciones) (from unidad) 2",
        "referidos_experimento_primerpago_link (from Referidos) (from cliente)",
        "router_instal_valid (from instalaciones) (from unidad)","total_router","somos_personas",
        "nombre_completo (from somos_personas)"
    ]

    const computedFields = [
        "Name","routers_inventario (from instalaciones) (from unidad)","nombre_sitio (from unidad)",
        "torre","apt","unidad_record_id","precio (from productos)","precio Rollup (from productos)",
        "suscription_airtable_id","Timekit integration","timekit_url_redirect","instantaneo_book_url",
        "enlace_google_maps","nombre_cliente","codigo_area (from clientes)","Phone","Created",
        "soporte_editar_link (from cliente)","soporte_editar_servicio_link",
        "document_type (from cliente)","document_number (from cliente)","email (from cliente)",
        "instalaciones_tiempo","Router - Instalations","tipo de equipo (from instalaciones) (from unidad)",
        "editar_info_cliente_boton","editar_servicio","editar_servicio_boton",
        "soporte_editar_link (from cliente) 2","estado_programacion (from instalaciones)","router_count",
        "terminar_instalacion_count","date_validation","sum_date_validation",
        "sum_terminar_instalacion_count","sum_router_count","instal_valid_reasons","instal_valid",
        "tv_bookig","Router","router_status","Programación TV","edit_suscription_state","edit_state",
        "Editar router (from instalaciones) (from unidad)","timekit_url_support (from cliente)",
        "motivo_instalacion_no_exitosa (from instalaciones) (from unidad)","source (from cliente)",
        "tv_users (from cliente)","instalacion_tipo (from instalaciones) (from unidad)",
        "Type (from discounts_test)","dias (from perioda de prueba)","dias_numero_test",
        "router_autom_lookup","trigger_dias","status_tv","programar_cliente_pendiente",
        "timekit_suscripciones","test_status","valid_instal_date","somos_code","sales_valid",
        "timekit_url_tv","apellidos (from Ventas)","primeros_nombres (from Ventas)",
        "nombre_completo (from Ventas)","billing_date","Number (from Discounts)",
        "calculation_disccount_in_months","instalaciontiempo (from instalaciones) (from unidad)",
        "megas (from servicios)","meses_periodo_prueba","instalacion_dia","instalacion_hora",
        "Site Name from Unidad","longitude","latitude","10_days_befor_billing","record_id",
        "Ciudad","topologia","Torre (from Torre [Sync]) (from unidad)",
        "tipo de equipo (from instalaciones) (from unidad) 2","Router Tipo (from routers) (from unidad)",
        "recordId (from Torre [Sync]) (from unidad)","referidos_experimento_instalacion_shortlink",
        "estado_programacion (from instalaciones) (from unidad)","referidos_experimento_instalacion_QR",
        "status (from cliente)","Estrato","InstallationDate_Invoicing","precio_rollup_dev",
        "segundo_vilo_conex","referidos_experimento_instalacion_QR (from Referidos) (from cliente)",
        "estado_programacion (from instalaciones) (from unidad) 2",
        "motivo_instalacion_no_exitosa (from instalaciones) (from unidad) 2",
        "instalacion_tipo (from instalaciones) (from unidad) 2",
        "referidos_experimento_primerpago_link (from Referidos) (from cliente)",
        "router_instal_valid (from instalaciones) (from unidad)","total_router",
        "nombre_completo (from somos_personas)"
    ]

    const equivalent = {
        'sservicios': 'servicios',
        'speriodo de prueba': 'periodo de prueba',
        'sinstantaneo_tipo': 'instantaneo_tipo',
    }

    const mustBeArray = [
        "unidad", "routers_inventario (from instalaciones) (from unidad)", "nombre_sitio (from unidad)",
        "torre", "apt", "periodo de prueba", "cliente", "promotor", "unidad_record_id", "servicios",
        "precio (from productos)", "timekit_url_redirect", "enlace_google_maps",
        "nombre_cliente", "suscripcion_status", "instalaciones", "codigo_area (from clientes)", "Phone",
        "soporte_editar_link (from cliente)", "document_type (from cliente)",
        "document_number (from cliente)", "email (from cliente)", "instalaciones_tiempo",
        "Router - Instalations", "tipo de equipo (from instalaciones) (from unidad)",
        "soporte_editar_link (from cliente) 2", "estado_programacion (from instalaciones)", "router_count",
        "terminar_instalacion_count", "date_validation", "sum_date_validation",
        "sum_terminar_instalacion_count", "sum_router_count", "Router", "router_status",
        "Editar router (from instalaciones) (from unidad)", "timekit_url_support (from cliente)",
        "Motivo_instalación_invalida", "motivo_instalacion_no_exitosa (from instalaciones) (from unidad)",
        "source (from cliente)", "tv_users (from cliente)", "Discounts", "Discounts 2", "instalaciones 3",
        "router_from_units", "tv_sticks_from_units", "instalacion_tipo (from instalaciones) (from unidad)",
        "discounts_test", "Type (from discounts_test)", "dias (from perioda de prueba)",
        "router_autom_lookup", "test_status", "valid_instal_date", "somos_code", "Ventas",
        "apellidos (from Ventas)", "primeros_nombres (from Ventas)", "nombre_completo (from Ventas)",
        "Number (from Discounts)", "instalaciontiempo (from instalaciones) (from unidad)",
        "megas (from servicios)", "Site Name from Unidad", "longitude", "latitude", "Ciudad", "topologia",
        "Torre (from Torre [Sync]) (from unidad)", "tipo de equipo (from instalaciones) (from unidad) 2",
        "Router Tipo (from routers) (from unidad)", "recordId (from Torre [Sync]) (from unidad)",
        "responsable_traslado", "referidos_experimento_instalacion_shortlink",
        "estado_programacion (from instalaciones) (from unidad)", "referidos_experimento_instalacion_QR",
        "status (from cliente)", "Estrato", "InstallationDate_Invoicing", "segundo_vilo_conex",
        "referidos_experimento_instalacion_QR (from Referidos) (from cliente)",
        "estado_programacion (from instalaciones) (from unidad) 2",
        "motivo_instalacion_no_exitosa (from instalaciones) (from unidad) 2",
        "instalacion_tipo (from instalaciones) (from unidad) 2",
        "referidos_experimento_primerpago_link (from Referidos) (from cliente)",
        "router_instal_valid (from instalaciones) (from unidad)", "somos_personas",
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

module.exports = Suscription
