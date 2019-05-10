import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Main from './Components/Main'
import MessagesMain from './Components/MessagesMain'
import Add from '@material-ui/icons/Add'
import swal from '@sweetalert/with-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      gender: '',
      thickness: '',
      hairStyle: '',
      hairColor: '',
      messages: [],
      postGenerated: false,
      username: '',
    }
  }

  handleUsername = () => {
    swal({
      text: 'Please enter a username',
      buttons: {
        confirm : {
          text: 'Submit'
        }
      },
      content: (
        <input type="text" onChange={(e) => {this.handleUpdateUsername(e)}} placeholder={'Enter a username here!'}/>
      )
      }
    )
    .then(() => this.handleCheckUsername())
    
  }

  componentDidMount = () => {
    this.handleUsername()
  }

  handleCheckUsername = () => {
    if (!this.state.username) {
      swal("You didn't enter a username!", "", "error" )
      .then(() => this.handleUsername())
    }
  }

  handleUpdateUsername = (e) => {
    console.log(e.target.value)
    this.setState({username: e.target.value})
  }

  handleUpdateGender = (val) => {
    this.setState({gender: val})
  }

  handleUpdateThickness = (val) => {
    this.setState({thickness: val})
  }

  handleUpdateHairStyle = (val) => {
    this.setState({hairStyle: val})
  }

  handleUpdateHairColor = (val) => {
    this.setState({hairColor: val})
  }

  handleUpdateMessages = (val) => {
    this.setState({messages: val})
  }

  handleUpdatePostGen = () => {
    if (this.state.postGenerated) {
      this.setState({postGenerated: false})
    } else {
      this.setState({postGenerated: true})
    }
  }

  render() {
    return (
      <div>
        {/* here goes the header component */}
        <Header username={this.state.username} />
        
        <div className="bodyDiv">

        
          {this.state.postGenerated?
          <Main 
          username={this.state.username}
          gender={this.state.gender} 
          hairColor={this.state.hairColor}
          thickness={this.state.thickness}
          hairStyle={this.state.hairStyle}
          handleUpdateMessages={this.handleUpdateMessages}
          handleUpdateGender={this.handleUpdateGender}
          handleUpdateThickness={this.handleUpdateThickness}
          handleUpdateHairStyle={this.handleUpdateHairStyle}
          handleUpdateHairColor={this.handleUpdateHairColor}
          handleUpdatePostGen={this.handleUpdatePostGen}
          />
          :
          <div className="newPostGen" onClick={this.handleUpdatePostGen}>
            <Add className="plusIcon"/>
            <button className="plusIconButton">Make a new character post.</button>
          </div>
          }

          <MessagesMain
          messages={this.state.messages}
          handleUpdateMessages={this.handleUpdateMessages}
          handleUpdatePostGen={this.handleUpdatePostGen}
          />
          <footer>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
