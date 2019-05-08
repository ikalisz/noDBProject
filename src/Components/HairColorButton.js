import React, {Component} from 'react'
import '../App.css'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

export default class HairColorButton extends Component {
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
        this.props.handleUpdateHairColor(val)
        this.handleClose()
    }

    render() {
        const {anchorEl} = this.state
        return (
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
                    <MenuItem onClick={() => this.handleUpdate('red')}>Red</MenuItem>
                    <MenuItem onClick={() => this.handleUpdate('green')}>Green</MenuItem>
                    </Menu>
                    <span>Selected: {this.props.hairColor}</span>
                </div>
        )
    }
}