const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [

    { "name": "top", "phoneNumber": "0896509714" }
]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
 
สวัสดีท็อป

/// TODO: Develop POST /contacts



app.listen(3000, () => {
    console.log('API Server started at port 3000')
})