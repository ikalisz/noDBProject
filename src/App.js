import React, {Component} from 'react';
import Header from './Components/Header'
import './App.css';
import Main from './Components/Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      gender: '',
      thickness: '',
      hair: '',
      hairColor: '',
    }
  }
  render() {
    return (
      <div className="bodyDiv">
        {/* here goes the header component */}
        <Header />
        <Main />
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
