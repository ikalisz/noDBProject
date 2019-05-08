import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Main from './Components/Main'
import MessagesMain from './Components/MessagesMain'

class App extends Component {
  constructor() {
    super()
    this.state = {
      gender: '',
      thickness: '',
      hairStyle: '',
      hairColor: '',
      imageToDisplay: '',
      captionText: '',
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

  handleUpdateImage = (val) => { 
    this.setState({imageToDisplay: val})
  }

  render() {
    return (
      <div>
        {/* here goes the header component */}
        <Header />
        
        <div className="bodyDiv">


          <Main 
          gender={this.state.gender} 
          hairColor={this.state.hairColor}
          thickness={this.state.thickness}
          hairStyle={this.state.hairStyle}
          imageToDisplay={this.state.imageToDisplay}
          captionText={this.state.captionText}
          handleUpdateGender={this.handleUpdateGender}
          handleUpdateThickness={this.handleUpdateThickness}
          handleUpdateHairStyle={this.handleUpdateHairStyle}
          handleUpdateHairColor={this.handleUpdateHairColor}
          handleUpdateImage={this.handleUpdateImage}
          />

          <MessagesMain
          imageToCurrentPost={this.state.imageToDisplay}
          captionText={this.state.captionText}
          />
          <footer>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
