import React, {Component} from 'react'
import '../App.css'
import Nav from './Nav'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            imageToDisplay: ''
        }
    }
    render() {
        setTimeout(() => {
        this.setState({imageToDisplay: this.props.stickFigure.img})
        }, 3000)
        return (
            <main className="mainDiv">
                <Nav />
                <div className="imageToDisplay">
                    <img src={this.state.imageToDisplay} alt="" />
                </div>
            </main>
        )
    }
}