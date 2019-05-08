const messages = require('../../messages.json')
console.log(messages)
const controller = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update(req, res) {
        newPost = {
            
        }
    },
    create() {

    },
    delete() {

    }
}

module.exports = controller