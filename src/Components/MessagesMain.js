import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import DeleteFilled from '@material-ui/icons/Delete'
import EditFilled from '@material-ui/icons/Edit'

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

    handleEditSubmit = (e, text) => {
        axios.put(`/api/messages/${e}`, {text})
        .then(res => {
            this.props.handleUpdateMessages(res.data)
            this.setState({editing: false})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const {messages} = this.props
        const {text} = this.state
        const posts = messages.map((val) => {
            return (
                <div key={val.id} className="messageDiv">
                    <img className="fakeImage" alt="" src={val.image} />
                    <div className="captionAndIdComments">
                        <div className="captionAndId">
                        { !this.state.editing ?
                        <p className="captionText"><span className="boldText">Caption:</span> {val.caption}</p>
                        :
                        <div>
                        <p className="captionText"><span className="boldText">Caption:</span><input type="text" placeholder={'New text here!'} value={text} onChange={(e) => this.handleUpdateText(e)} /></p>
                        <button className="submitButton" onClick={() => this.handleEditSubmit(val.id, this.state.text)}>Submit!</button>
                        </div>
                        }
                            <h3 className="idText">Id: {val.id}</h3>

                        </div>
                    </div>
                    <div className="utilityIcons">
                        <DeleteFilled  className="trashIcon grow" onClick={() => this.handleDeletePost(val.id)}/>
                        <EditFilled className="editIcon grow" onClick={() => this.handleEdit()} />

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