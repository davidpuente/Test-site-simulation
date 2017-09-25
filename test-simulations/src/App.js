import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Container, Header, Button, Image, Responsive } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
            {/*<Button>I'm a button</Button>*/}
        {/*</div>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          <Grid.Column>
              <br/>
              <Button>I'm a button</Button>
              <Button primary>I'm a primary button</Button>
              <Button secondary>I'm a secondary button</Button>
              <br/>
              <Responsive minWidth={992}>
                  Visible only if display has <code>992px</code> width and higher
              </Responsive>
              <Responsive maxWidth={768}>
                  Visible only if display has <code>768px</code> width and lower
              </Responsive>
          </Grid.Column>

      </div>
    );
  }
}

export default App;
