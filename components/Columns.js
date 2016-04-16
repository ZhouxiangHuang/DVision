import React, {Component} from 'react';


export default class Columns extends Component {

  render() {
    'use strict';
    const columnNames = this.props.columnNames;
    let columnDivs = columnNames.map((column, i) => <th key={columnNames[i]}>{columnNames[i]}</th>)
    return (
      <thead>
        <tr>
          {columnDivs}
        </tr>
      </thead>
    )
  }
}
