import React, {Component} from 'react';


export default class Columns extends Component {

  render() {
    'use strict';
    const columnNames = this.props.columnNames;
    let columnDivs = [];

    for(var i = 0; i < columnNames; i++) {
      columnDivs.push(
        <div>{columnNames[i]}</div>
      )
    }

    return (
      <div id='Columns'>
      {columnDivs}
      </div>
    )
  }
}
