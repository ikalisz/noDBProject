const express = require('express')
const cors = require('cors')
const app = express()
const port = 3255
const mc = require('./controllers/messages_controller')

app.use(express.json())
app.use(cors())
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.post('/api/messages', mc.create)

app.delete('/api/messages/:id', mc.delete)



app.listen(port, () => {
    console.log('Working!')
})