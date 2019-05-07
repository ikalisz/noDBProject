import React, {Component} from 'react'
import '../App.css'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import GenderButton from './GenderButton'
import ThicknessButton from './ThicknessButton'
import HairStyleButton from './HairStyleButton'

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
            hairColor: ''
        }
    }

    handleClick = (e) => {
        this.setState({anchorEl: e.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    }

    handleUpdateHairColor = (val) => {
        this.setState({hairColor: val})
    }

    handleonClickUpdate = (val) => {
        this.handleClose()
        this.handleUpdateHairColor(val)
    }

    render() {
        const {anchorEl} = this.state
        return (
            <div className="navBar">
                <GenderButton 
                handleUpdateGender={this.props.handleUpdateGender} 
                gender={this.props.gender}
                 />
                <ThicknessButton 
                handleUpdateThickness={this.props.handleUpdateThickness}
                thickness={this.props.thickness}
                />
                <HairStyleButton 
                hairStyle={this.props.hairStyle} 
                handleUpdateHairStyle={this.props.handleUpdateHairStyle}
                />
                <div className="selector">
                <h3>Hair Color</h3>
                    <Button 
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    >
                    Select Hair Color
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        >
                    <MenuItem onClick={() => this.handleonClickUpdate('red')}>Red</MenuItem>
                    <MenuItem onClick={() => this.handleonClickUpdate('green')}>Green</MenuItem>
                    </Menu>
                    <span>Selected: {this.state.hairColor}</span>
                </div>
            </div>
        )
    }
}