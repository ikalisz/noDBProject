import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'
import images from '../images'
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            allowPost: false,
            captionText: '',
            imageToDisplay: '',
        }
    }
    handleFindImage = () => {
        let imageIndex = images.modules.findIndex((val) => {
            return (
                val.gender === this.props.gender &&
                val.thickness === this.props.thickness &&
                val.hairColor === this.props.hairColor &&
                val.hairStyle === this.props.hairStyle
            )
        })
        if (imageIndex !== -1) {
            this.handleUpdateImage(images.modules[imageIndex].img)
            this.setState({allowPost: true})
        }
    }

    handleUpdateCaption = (e) => {
        this.setState({captionText: e.target.value})
    }

    handleUpdateImage = (val) => { 
        this.setState({imageToDisplay: val})
      }

    handleCreatePost = () => {
        axios.post('/api/messages', {
            image: this.state.imageToDisplay,
            captionText: this.state.captionText
        })
        .then(res => {
            this.props.handleUpdateMessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <main className="mainDiv">
                <Nav 
                gender={this.props.gender}
                thickness={this.props.thickness}
                hairStyle={this.props.hairStyle}
                hairColor={this.props.hairColor}
                handleUpdateGender={this.props.handleUpdateGender}
                handleUpdateThickness={this.props.handleUpdateThickness}
                handleUpdateHairStyle={this.props.handleUpdateHairStyle}
                handleUpdateHairColor={this.props.handleUpdateHairColor}
                />
                <div className="imageAndCaption">
                    <div className="imageToDisplay">
                        <img className="imageResize" src={this.state.imageToDisplay} alt="" />
                    </div>
                    <div className="buttonsAndCaption">
                        <button className="captionButtons" onClick={this.handleFindImage}>Generate</button>
                        { !this.state.allowPost ?
                        <h3 className="whiteText">Generate Something!</h3> 

                        : 
                        <div className="textAreaAndPostButton">
                        <h3 className="whiteText">Post Caption:</h3>
                        <textarea onChange={(e) =>this.handleUpdateCaption(e)} id="textArea" rows="4" cols="30"></textarea>
                        <button onClick={this.handleCreatePost} className="captionButtons" >Post</button>
                        </div>
                        }
                    </div>
                </div>
            </main>
        )
    }
}