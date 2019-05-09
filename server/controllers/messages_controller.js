let messages = require('../../messages.js')
console.log(messages)
let messageId = 0
messageId += messages.length

const controller = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update(req, res) {
        
    },
    create(req, res) {
        let 
        newPost = {
            id: messageId,
            image: req.body.image,
            caption: req.body.captionText,
            comments: [],
        }
        messageId++
        messages = [...messages, newPost]
        res.status(200).send(messages)
    },
    delete(req, res) {
        let {id} = req.params
        let messIndex = messages.findIndex(val => {
            return val.id === +id
        })
        messages.splice(messIndex, 1)
        res.status(200).send(messages)
    }
}

module.exports = controller