import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'
import images from '../images'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            imageToDisplay: '',
            allowPost: false,
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
            this.setState({imageToDisplay: images.modules[imageIndex].img})
            this.setState({allowPost: true})
        }
    }

    render() {
        // setTimeout(() => {
        // this.setState({imageToDisplay: this.props.stickFigure.img})
        // }, 3000)
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
                        <h3>Generate Something!</h3> 

                        : <div>
                        <input type="text" className="captionText" />
                        <button className="captionButtons" >Post</button>
                        </div>
                        }
                    </div>
                </div>
            </main>
        )
    }
}