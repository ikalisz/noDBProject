const express = require('express')
const cors = require('cors')
const app = express()
const port = 3255
const mc = require('./controllers/messages_controller')

app.use(express.json())
app.use(cors())
app.use(express.static('../src/imageFigures'))
app.use(express.static('../src/helpImages'))
app.use(express.static('../public/index.html'))
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.post('/api/messages', mc.create)
app.get('/api/message/:id', mc.filterId)
app.get(`/api/messages/:caption`, mc.filterCaption)
app.delete('/api/messages/:id', mc.delete)



app.listen(port, () => {
    console.log('Working!')
})