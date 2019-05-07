import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Main from './Components/Main'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      gender: '',
      thickness: '',
      hairStyle: '',
      hairColor: '',
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3255/api/images')
        .then(response => {
          this.setState({images: response.data.modules})
          console.log(response.data.modules)
        })
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
          handleUpdateGender={this.handleUpdateGender}
          handleUpdateThickness={this.handleUpdateThickness}
          handleUpdateHairStyle={this.handleUpdateHairStyle}
          handleUpdateHairColor={this.handleUpdateHairColor}
          />
          <footer>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
