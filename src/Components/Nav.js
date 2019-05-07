import React, {Component} from 'react'
import '../App.css'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

export default class Nav extends Component {
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

    render() {
        const {anchorEl} = this.state
        return (
            <nav className="navBar">
                <div>
                    <h3>Gender</h3>
                    <Button 
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    >
                    Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        >
                    <MenuItem>Working!</MenuItem>
                    </Menu>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </nav>
        )
    }
}