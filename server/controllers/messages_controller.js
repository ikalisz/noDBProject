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
            username: req.body.username,
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
    },
    filterId(req, res) {
        let {id} = req.params
        let filteredById = messages.filter(val => {
            return val.id === +id
        })
        res.status(200).send(filteredById)
    },
    filterCaption(req, res) {
        let {caption} = req.params
        let filteredByCaption = messages.filter(val => {
            console.log(req.params.caption)
            console.log(val.caption)
            return val.caption.toLowerCase().includes(caption.toLowerCase())
        })
        res.status(200).send(filteredByCaption)
    }
}

module.exports = controller