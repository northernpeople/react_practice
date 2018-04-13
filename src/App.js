import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import NumberListComponent from "./NumberListComponent";

class App extends Component {

  state = {numbers : [1, 2, 3, 4, 5]};

  reverse = () => {
    this.setState((old) =>   {
      return {
        numbers : old.numbers.reverse(),
        a : 5
       };
    });
  }

  render() {
    return (
        <Route path="/" exact render={ ()=>(
            <NumberListComponent
              numbers={this.state.numbers}
              buttonHandler={this.reverse}/>
          )}
        />

    );
  }
}

export default App;
