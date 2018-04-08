import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";

class App extends Component {

  state = {numbers : [1, 2, 3, 4, 5]};

  reverse = () => {
    this.setState((old) =>   {
      return { numbers: old.numbers.reverse() };
    });
  }

  render() {
    return (
        <Route path="/" exact render={ ()=>(
          <div>
            <ul> {this.state.numbers.map((n, i) =>
              <li key={i}>{n}</li> )}
            </ul>
            <button onClick={() => this.reverse()}> reverse </button>
          </div>)}
        />

    );
  }
}

export default App;
