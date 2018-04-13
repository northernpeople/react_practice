import React, {Component} from 'react';

export default class NumberListComponent extends Component{

  render(){
    return (
      <div>
        <ul> {this.props.numbers.map((n, i) =>
          <li key={i}>{n}</li> )}
        </ul>
        <button onClick = { () => this.props.buttonHandler()}> reverse </button>
      </div>
    )
  };
}
