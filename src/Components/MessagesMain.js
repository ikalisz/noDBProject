import React, {Component} from 'react'
import axios from 'axios'

export default class MessagesMain extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
        }
    }
    //I want to grab the message Api and store the response in state under messages
    //I need to grab the generated img when post is clicked.
    componentDidMount = () => {
        axios.get('http://localhost:3255/api/messages')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const {messages} = this.state
        const posts = messages.map((val) => {
            return (
                <div className="messageDiv">

                </div>
            )
        })
        return (
            <main className="mainDiv messages">

            </main>
        )
    }
}