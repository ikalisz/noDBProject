import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import MessagePost from './MessagePost'
import Search from '@material-ui/icons/Search'
import Refresh from '@material-ui/icons/Refresh'

export default class MessagesMain extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            editing: false,
            searchId: '',
            searchCaption: '',
            searching: false
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

    handleFilterId = (id) => {
        this.setState({searching: true})
        axios.get(`/api/message/${id}`)
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
    }

    handleFilterCaption = (text) => {
        this.setState({searching: true})
        console.log(text)
        axios.get(`api/messages/${text}`)
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
    }

    handleUpdateIdSearch = (e) => {
        this.setState({searchId: e.target.value})
        
    }

    handleUpdateCaptionSearch = (e) => {
        this.setState({searchCaption: e.target.value})
    }

    handleResetSearch = () => {
        axios.get('/api/messages')
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
        this.setState({searching: false})
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
                    username={val.username}
                    />
            )
        })
        return (
            <main className="mainDiv messages">
                <div className="searchDiv">
                    <div className="searchBars">
                        <div className="searchBar">
                            <input type="text" className="filterInput" placeholder={'Search for a post by Id here!'} onChange={(e) => this.handleUpdateIdSearch(e)} />
                            <Search className="editIcon"
                            onClick={() => this.handleFilterId(this.state.searchId)}
                            />
                        </div>
                        <div className="searchBar">
                            <input type="text" className="filterInput" placeholder={'Search for a post by caption here!'} onChange={(e) =>this.handleUpdateCaptionSearch(e)}/>
                            <Search className="editIcon" 
                            onClick={() => this.handleFilterCaption(this.state.searchCaption)}
                            />
                        </div>
                        </div>
                        {this.state.searching?
                        <div className="refreshDiv">
                        <Refresh className="editIcon refresh"
                        onClick={this.handleResetSearch}
                        />
                        <h5 className="resetText">Reset Messages!</h5>
                        </div>
                        :
                        <div></div>
                        }
                    
                </div>
                {posts}
            </main>
        )
    }
}