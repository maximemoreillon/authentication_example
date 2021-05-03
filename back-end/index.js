const express = require('express')
const cors = require('cors')
const auth = require('@moreillon/express_identification_middleware')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port =  process.env.EXPRESS_PORT || 80

const auth_options = { url: process.env.IDENTIFICATION_URL || 'http://user-manager-api/users/self'}

app.use(cors())
app.use(auth(auth_options))

app.get('/data', (req, res) => res.send(`Sensitive data`) )

app.listen(port, () => console.log(`Express Listening on :${port}`) )
