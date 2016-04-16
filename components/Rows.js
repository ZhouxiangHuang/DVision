import React, {Component} from 'react';
import Row from './Row.js';

export default class Rows extends Component {

  render() {
    'use strict';
    const columns = this.props.columnNames;
    const rows = this.props.rows;
    const displayData = this.props.displayData

    let rowDivs = rows.map((row, i) => {
      let index = i;
      return <Row index={index} key={'row-'+ i} columns={columns} rowData={row} displayData={displayData}/>;
    })
    return (
      <tbody>
        {rowDivs}
      </tbody>
    )
  }
}
