import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import netflixWrapper from './netfilx_wrapper'

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  

  componentWillMount() {
    console.log(netflixWrapper)
    // fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
    // .then(res => res.json()).then(res => console.log(res))
    // JSON Response, resp is a JSON object
netflixWrapper.createRequest({
   title: "The Boondocks",
   year: 2005
}, function (resp) {
   console.log("The Boondocks' Summary = " + resp.summary);
});
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
          

        </div>


      </div>
    );
  }
}

export default App;
