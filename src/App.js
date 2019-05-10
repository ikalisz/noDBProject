import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Main from './Components/Main'
import MessagesMain from './Components/MessagesMain'
import Add from '@material-ui/icons/Add'

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
    }
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
        <Header />
        
        <div className="bodyDiv">

        
          {this.state.postGenerated?
          <Main 
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
