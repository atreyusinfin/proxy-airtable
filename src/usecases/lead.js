const repository = require('../repositories/leads.js')

const NewLead = ((repository) => {
    const lead = {
        adapter,
        phoneFormat,
        json,
        leadModel
    } = repository

    const fieldsList =  [
        'Name', 'Created', 'site', 'somos_code (from site)', 'state_stepper (from Site)', 
        'site_name', 'first_name', 'last_name', 'country_code', 'phone', 'email', 'torre', 
        'apto', 'extra_speed', 'tv_package', 'document_type', 'document_number', 
        'site_state_at_submit', 'form_sectores', 'direccion', 'data_source', 'utm_source',
        'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_message', 'utm_page', 
        'utm_format', 'utm_channel', 'formulario', 'codigo_referidos', 'attributed_to', 
        'campaign', 'infobooth', 'Sectores (from building)', 'lead_status', 'reminders', 
        'lead_id', 'new_site', 'booking_installation', 'vendedor', 'notes', 'Tags', 
        'last_modified_time_lead_status', 'delayed_date', 'building_type', 
        'building_size', 'Hubspot', 'installation_date', 'extra_router', 'site_record_id', 
        'last_reminder', 'add_site_to_lead', 'zona_expansión (from site)', 'Zone', 
        'Target (from site)', 'State (from site)', 'count_leads (from site)'
    ]

    const computedFields = [
        "Name", "Created", "somos_code (from site)", "state_stepper (from Site)",
        "Sectores (from building)", "lead_id", "new_site", "booking_installation",
        "last_modified_time_lead_status", "last_reminder", "add_site_to_lead"
    ]

    const removeComputedFields = (lead) => {
        computedFields.forEach(f => {
            if (lead[f]) {
                console.log(
                    '[On create lead] position removed, key:'
                    , f
                    , ', value:'
                    , lead[f]
                )
            }
            delete lead[f]
        })
    }

    const validateLead = (lead) => {
        const error = { ack: 'fail', code: 400 }

        if (Object.keys(lead).length === 0) {
            error.error = `Invalid Empty Request.` 
            throw (JSON.stringify(error))
        }

        Object.keys(lead).forEach(k => {
            if (fieldsList.indexOf(k) < 0) {
                error.error = `Invalid Request ${k} is not recognized.` 
                throw (JSON.stringify(error))
            }
        })
    }

    const prevalidate = (lead) => {
        try {
            lead = adapter.run(lead) // Adjust contract
            removeComputedFields(lead) // Just ignore computed fields
            validateLead(lead) // Only known fields
            return lead
        } catch(e) { 
            throw (e) 
        }
    }

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
        create: async (lead) => {
            try {
                lead = prevalidate(lead)
                const error = { ack: 'fail', code: 409 }

                if (lead.site === undefined || lead.site.length === 0 ) {
                    error.error= `Site is mandatory`
                    throw JSON.stringify(error)
                }

                const criteria = `OR(phone = "${lead.phone}", phone = "${phoneFormat(lead.phone)}")`
                const searchResult = await leadModel.find(criteria)
                const sites = searchResult
                    .map(lead => lead.site)
                    .filter(site => site !== undefined)
                    .reduce((acc, sites) => {acc.push(...sites); return acc}, [])

                if (sites.indexOf(lead.site[0]) > -1) {
                    error.error= `A lead for that phone in that site already exists`
                    throw JSON.stringify(error)
                }

                const id = await leadModel.create(lead)
                return id
            } catch (e) {
                handleError(e)
            }
        },
        update: (id, lead) => {
            try {
                lead = prevalidate(lead)
                leadModel.update(id, lead)
                return
            } catch (e) {
                handleError(e)
            }
        }
    }
})(repository)

module.exports = NewLead
