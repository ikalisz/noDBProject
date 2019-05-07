const express = require('express')
const cors = require('cors')
const app = express()
const port = 3255
const images = 'lllll'
app.use(cors())
app.use(express.json())

app.get('/api/images', (req, res) => {
    res.status(200).send(images)
})





app.listen(port, () => {
    console.log('Working!')
})