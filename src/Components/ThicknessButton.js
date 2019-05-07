import React, {Component} from 'react'
import '../App.css'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

export default class ThicknessButton extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
        }
    }

    handleClick = (e) => {
        this.setState({anchorEl: e.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    }

    handleUpdate = (val) => {
        this.props.handleUpdateThickness(val)
        this.handleClose()
    }

    render() {
        const {anchorEl} = this.state
        return (
            <div className="selector Hair">
                <h3>Thickness</h3>
                <Button 
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                >
                Select Thickness
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
                <MenuItem onClick={() => this.handleUpdate('stick')}>Stick</MenuItem>
                <MenuItem onClick={() => this.handleUpdate('round')}>Round</MenuItem>
                <MenuItem onClick={() => this.handleUpdate('rounder')}>Rounder</MenuItem>
                </Menu>
                <span>Selected: {this.props.thickness}</span>
                
            </div>
        )
    }
}