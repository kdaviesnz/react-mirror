import React, { Component } from 'react';
import cat from './cat.jpg';
import './App.css';
import Mirror from './Mirror';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Mirror>
              {
                  (direction) => (
                      <div>
                          <img src={cat} height="100px"></img>
                          <img src={cat} height="100px" className={direction}></img>
                      </div>
                  )
              }
          </Mirror>
      </div>
    );
  }
}

export default App;
