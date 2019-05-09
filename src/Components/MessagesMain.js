import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import MessagePost from './MessagePost'

export default class MessagesMain extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            editing: false,
        }
    }
    //I want to grab the message Api and store the response in state under messages
    //I need to grab the generated img when post is clicked.
    componentDidMount = () => {
        axios.get('http://localhost:3255/api/messages')
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleDeletePost = (e) => {
        axios.delete(`/api/messages/${e}`)
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleUpdateText = (e) => {
        this.setState({text: e.target.value})
    }

    handleEdit = () => {
        this.setState({editing: true})
    }

    handleEditSubmit = (id, text) => {
        axios.put(`/api/messages/${id}`, {text})
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const {messages} = this.props
        const posts = messages.map((val) => {
            return (
                    <MessagePost 
                    handleEditSubmit={this.handleEditSubmit}
                    handleDeletePost={this.handleDeletePost}
                    handleUpdateMessages={this.props.handleUpdateMessages}
                    id={val.id}
                    key={val.id}
                    image={val.image}
                    caption={val.caption}
                    />
            )
        })
        return (
            <main className="mainDiv messages">
                {posts}
            </main>
        )
    }
}