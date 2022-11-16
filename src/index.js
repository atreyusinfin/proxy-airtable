const express = require('express')
const v1 = require('./routes/v1.js')
const env = require('node:process').env

const cfg = {
    port: env.PORT || 4321,
    auth: env.BEARE_AUTH || ''
}

const app = express()
app.use((req, res, next) => {
    console.log(req.method, ' ', req.url)

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PATCH,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Content-Type', 'application/json');
    next()
})

app.use(express.json())
app.use('/api/v1/', v1)

// 404 error
app.use((req, res) => { res.status(404).json({error: 'not found'}) })

// start server
app.listen(cfg.port, () => { console.log('alive on port', cfg.port) })

// eport defaults
module.exports = app
