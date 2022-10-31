// We load this as a node pure script (no import required, becouse other wise 
// it runs npm dependences which we don't want in order to fake environment variables)
const cfg = (process => {
    process.env.BASE_BUILDING = 'FAKE_BASE_BUILDING'
    process.env.AIRTABLE_API_KEY = 'FAKE'
})(process)

module.exports = cfg
