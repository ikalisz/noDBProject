import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'
import images from '../images'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            imageToDisplay: '',
        }
    }
    render() {
        // setTimeout(() => {
        // this.setState({imageToDisplay: this.props.stickFigure.img})
        // }, 3000)
        console.log(images)
        return (
            <main className="mainDiv">
                <Nav 
                gender={this.props.gender}
                thickness={this.props.thickness}
                hairStyle={this.props.hairStyle}
                hairColor={this.props.hairColor}
                handleUpdateGender={this.props.handleUpdateGender}
                />
                <div className="imageToDisplay">
                    <img src={images.modules[2].img} alt="" />
                </div>
            </main>
        )
    }
}