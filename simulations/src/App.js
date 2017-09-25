import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Container, Header } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                <Header></Header>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
        );
    }
}

export default App;
