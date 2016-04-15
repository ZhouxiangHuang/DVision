import React, {Component} from 'react';
const sample = require('./../dummyDatabase/sample.json');
import Columns from './Columns.js';
import Rows from './Rows.js';

export default class Table extends Component {
  render() {
    const columnNames = this.props.database.tableData["0"];
    const rows = this.props.database.tableData;
    return (
      <table id='Table'>
      <Columns columnNames={columnNames} />
      <Rows className ='rows' rows={rows}/>
      </table>
    )
  }
}
