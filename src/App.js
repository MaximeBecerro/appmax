import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Music from './music';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main className="App-main">
          <div className="App-background-layer">
            <img className="App-background" src="/img/kanji.png" alt="kanji background"/>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Hello world!</code>
          </p>
          <Music />
        </main>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
