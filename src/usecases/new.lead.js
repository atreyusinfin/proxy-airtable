const adapter = require('../adapters/lead.js')
const phoneFormat = require('../helpers/formatting.js').phone
const leadModel = require('../models/leads.leads.js')

// test id recMRhaZCRAsX3cO4

const NewLead = (() => {
    const fieldsList =  [
        "Name", "Created", "site", "somos_code (from site)",
        "state_stepper (from Site)", "site_name", "first_name", "last_name",
        "country_code", "phone", "email", "torre",
        "apto", "extra_speed", "extra_router", "document_type",
        "document_number", "site_state_at_submit", "form_sectores", "direccion",
        "data_source", "utm_source", "utm_medium", "utm_campaign",
        "utm_term", "utm_content", "utm_message", "utm_page",
        "utm_format", "utm_channel", "formulario", "codigo_referidos",
        "attributed_to", "infobooth", "Sectores (from building)", "lead_status",
        "reminders", "lead_id", "new_site", "booking_installation",
        "vendedor", "notes", "Tags", "last_modified_time_lead_status",
        "delayed_date", "building_type", "building_size", "installation_date",
        "site_record_id", "last_reminder", "add_site_to_lead", "Hubspot"
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
        Object.keys(lead).forEach(k => {
            if (fieldsList.indexOf(k) < 0) {
                const error = {
                    ack: 'fail', 
                    error: `Invalid Request ${k} is not recognized.`,
                    code: 400
                }
                throw (JSON.stringify(error))
            }
        })
    }

    return {
        create: async (lead) => {
            lead = adapter.run(lead) // Adjust contract
            removeComputedFields(lead) // Just ignore computed fields
            try {
                validateLead(lead) // Only known fields
            } catch(e) { 
                throw (e) 
            }

            const criteria = `OR(phone = "${lead.phone}", phone = "${phoneFormat(lead.phone)}")`
            const searchResult = await leadModel.find(criteria)
            const sites = searchResult
                .map(lead => lead.site)
                .filter(site => site !== undefined)
                .reduce((acc, sites) => {acc.push(...sites); return acc}, [])

            if (sites.indexOf(lead.site[0]) > -1) {
                const error = {
                    ack: 'fail', 
                    error: `A lead for that phone in that site already exists`,
                    code: 409
                }
                throw JSON.stringify(error)
            }

            try {
                const id = await leadModel.create(lead)
                return id
            } catch (e) {
                // We are going to hide the Airtable error for security reasons
                const error = {
                    ack: 'fail', 
                    error: `Internal Server Error`,
                    code: 500
                }
                throw JSON.stringify(error)
            }
        }
    }
})()

module.exports = NewLead
