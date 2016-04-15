import React, {Component} from 'react';


export default class Info extends Component {
  render() {
    return (
      <div id='Info'>
        Info
        <button onClick={(e) => {this.props.previous(e)}} id="previous" type="button">Previous</button>
        <button onClick={(e) => {this.props.next(e)}} id="next" type="button">Next</button>
      </div>
    )
  }
}
