import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/search/person?api_key=305a31b8b260d70c65fd389cc6b7f2e7&query=Natalie')
    .then(res => res.json()).then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          
          <HomePage />

        </div>


      </div>
    );
  }
}

export default App;
