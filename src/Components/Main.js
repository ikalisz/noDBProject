import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'
import images from '../images'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            imageToDisplay: ''
        }
    }
    render() {
        // setTimeout(() => {
        // this.setState({imageToDisplay: this.props.stickFigure.img})
        // }, 3000)
        console.log(images)
        return (
            <main className="mainDiv">
                <Nav />
                <div className="imageToDisplay">
                    <img src={images.modules[0].img} alt="" />
                </div>
            </main>
        )
    }
}