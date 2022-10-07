import express from 'express'
import v1 from './routes/v1.js'
import {env} from 'node:process'

const cfg = {
    port: env.PORT || 4321
}

const app = express()
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use('/api/v1/sites/', v1)

// 404 error
app.use((req, res) => { res.json({error: 'not found'}) })

// start server
app.listen(cfg.port, () => { console.log('alive') })

// eport defaults
export default app
