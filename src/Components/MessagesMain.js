import React, {Component} from 'react'


export default class MessagesMain extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
        }
    }
    render() {
        const posts = this.state.messages.map((val) => {
            return (
                <div>

                </div>
            )
        })
        return (
            <main className="mainDiv messages">

            </main>
        )
    }
}