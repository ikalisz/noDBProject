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
      hair: '',
      hairColor: '',
      images: [],
      imageOne: ''
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3255/api/images')
        .then(response => {
          this.setState({images: response.data.modules})
          this.setState({imageOne: response.data.modules[0].img})
          console.log(response.data.modules)
        })
  }

  

  render() {
    console.log(this.state.imageOne)
    return (
      <div>
        {/* here goes the header component */}
        <Header />
        
        <div className="bodyDiv">


          <Main stickFigure={this.state.images[0]} />
          <footer>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
