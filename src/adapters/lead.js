const lead = (() => {
    const equivalent = {
        "firstName": "first_name",
        "lastName": "last_name",
        "countryCode": "country_code",
        "apartment": "apto",
        "tower": "torre",
        "buildingName": "site_name",
        "address": "direccion",
        "sector": "form_sectores",
        "buildingType": "building_type",
        "buildingSize": "building_size",
        "docType": "document_type",
        "docNumber": "document_number",
    }

    const mustBeArray = [
        'site',
        'attributed_to',
        'infobooth',
        'reminders',
        'vendedor',
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

            return _return
        }
    }
})()

module.exports = lead
