import express from 'express'
import v1 from './routes/v1.js'
import {env} from 'node:process'

const cfg = {
    port: env.PORT || 4321,
    auth: env.BEARE_AUTH || ''
}

const app = express()
app.use((req, res, next) => {
    console.log(req.url)
    // Check Authorization header
    const headers = JSON.parse(JSON.stringify(req.headers))
    if (headers.Authorization !== cfg.auth) {
        console.log('Access denied')
        res.json({error: 'not found'})
    }

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Content-Type', 'application/json');
    next()
})

app.use('/api/v1/sites/', v1)

// 404 error
app.use((req, res) => { res.json({error: 'not found'}) })

// start server
app.listen(cfg.port, () => { console.log('alive on port', cfg.port) })

// eport defaults
export default app
