const express = require('express')
const cors = require('cors')
const app = express()
const images = require()
const port = 3255

app.use(cors())
app.use(express.json())




app.listen(port, () => {
    console.log('Working!')
})