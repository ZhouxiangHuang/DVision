import React, {Component} from 'react';
const sample = require('./../dummyDatabase/sample.json');
import Columns from './Columns.js';
import Rows from './Rows.js';

export default class Table extends Component {
  render() {
    const columnNames = this.props.database.tableData["0"];
    // const columnNames = Object.keys(this.props.database.tableData[0]);
    const rows = this.props.database.tableData;
    return (
      <table id='Table'>
      <Columns columnNames={columnNames} />
      <Rows columnNames={columnNames} rows={rows} displayData={this.props.displayData}/>
      </table>
    )
  }
}
