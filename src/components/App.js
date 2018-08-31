import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  } 

  render() {
    console.log('is this loading?');
    return (
      <div className="App">
        <header className="App-header">
          <h1>is this working? Counter: {this.state.counter}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {this.setState({counter: this.state.counter + 1})}}/>
      </div>
    );
  }
}

export default App;
