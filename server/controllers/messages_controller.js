let messages = require('../../messages.js')
let messageId = 0
messageId += messages.length

const controller = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update(req, res) {
        let {text} = req.body
        let {id} = req.params
        let messIndex = messages.findIndex(val => {
            return val.id === +id
        })
        let updateMessage = messages[messIndex]
        let newPost = {
            id: updateMessage.id,
            image: updateMessage.image,
            caption: text || updateMessage.caption,
            comments: updateMessage.comments
        }
        messages.splice(messIndex, 1, newPost)
        res.status(200).send(messages)
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