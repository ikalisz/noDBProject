import React, {Component} from 'react'
import DeleteFilled from '@material-ui/icons/Delete'
import EditFilled from '@material-ui/icons/Edit'
import '../App.css'
import axios from 'axios'

export default class MessagePost extends Component {
    constructor() {
        super()
        this.state ={
            editing: false,
            input: ''
        }
    }

    handleUpdateEditing = () => {
        if (this.state.editing) {
            this.setState({editing: false})
        } else {
            this.setState({editing: true})
        }
    }

    handleUpdateText = (e) => {
        this.setState({input: e.target.value})
    }

    handleEditAxios = () => {
        this.handleEditSubmit(this.props.id, this.state.input)
        this.handleUpdateEditing()
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
        return (
            <div key={this.props.id} className="messageDiv">
                <img className="fakeImage" alt="" src={this.props.image} />
                <div className="captionAndIdComments">
                <div className="captionAndId">
                {!this.state.editing ?
                <div className="captionText"><span className="boldText">Caption:</span><p className="captionSmallText">{this.props.caption}</p>
                </div>
                :
                <div>
                    <p className="captionText"><span className="boldText">Caption:</span><input type="text" placeholder={"New text here!"} value={this.state.text} onChange={(e) => this.handleUpdateText(e)} />
                    <button className="submitButton" onClick={() => this.handleEditAxios()}>Submit!</button>
                    </p>
                </div>
                

                }
                    <h3 className="idText">Id: {this.props.id}</h3>
                </div>
                </div>
                <div className="utilityIcons">
                        <DeleteFilled  className="trashIcon grow" onClick={() => this.props.handleDeletePost(this.props.id)}/>
                        <EditFilled className="editIcon grow" onClick={() => this.handleUpdateEditing()} />

                    

                </div>
            </div>
        )
    }
}