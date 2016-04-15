import React, {Component} from 'react';


export default class Columns extends Component {

  render() {
    'use strict';
    const columnNames = this.props.columnNames;
    let columnDivs = [];
    for(var i = 0; i < columnNames.length; i++) {
      columnDivs.push(
        <th key={columnNames[i]}>{columnNames[i]}</th>
      )
    }

    return (
      <thead>
        <tr>
          {columnDivs}
        </tr>
      </thead>
    )
  }
}
