import React, {Component} from 'react';
import Row from './Row.js';

export default class Rows extends Component {

  render() {
    'use strict';
    const columns = this.props.columnNames;
    const rows = this.props.rows;
    const displayData = this.props.displayData
    let rowDivs = [];

    for(var keys in rows) {
      if(keys !== "0"){
        rowDivs.push(
          <Row index={keys} key={'row-'+ keys} columns={columns} rowData={rows[keys]} displayData={displayData}/>
        )
      }
    }

    /*

    let rowDivs = rows.map((row, i) => <Row i={i} key={'row-'+ keys} columns={columns} rowData={row} displayData={displayData}/>);

    */



    return (
      <tbody>
        {rowDivs}
      </tbody>
    )
  }
}
