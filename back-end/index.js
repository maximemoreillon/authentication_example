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

app.get('/', (req, res) => res.send(`This message comes from the back-end and if you can see it, it means you are logged in`) )

app.listen(port, () => console.log(`Express Listening on :${port}`) )
