import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import DeleteFilled from '@material-ui/icons/Delete'

export default class MessagesMain extends Component {
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

    render() {
        const {messages} = this.props
        const posts = messages.map((val) => {
            return (
                <div key={val.id} className="messageDiv">
                    <img className="fakeImage" alt="" src={val.image} />
                    <div className="captionAndIdComments">
                        <div className="captionAndId">
                            <h3 className="captionText">Caption: {val.caption}</h3>
                            <h3 className="idText">Id: {val.id}</h3>

                        </div>
                    </div>
                    <div className="utilityIcons">
                        <DeleteFilled onClick={() => this.handleDeletePost(val.id)}/>

                    </div>
                </div>
            )
        })
        return (
            <main className="mainDiv messages">
                {posts}
            </main>
        )
    }
}