import React, {Component} from 'react';


export default class Row extends Component {

  render() {
    'use strict';
    const rowData = this.props.rowData;
    const columns = this.props.columns;
    let rowSpans = [];

    for(let i = 0; i < rowData.length; i++) {
      let key = columns[i] + '-' + this.props.index + '-' + i;
      let data = rowData[i];
      if(rowData[i].length < 50) {
        rowSpans.push(<td key={key}>{data}</td>)
      } else {
        rowSpans.push(
          <td key={key}>
            <button onClick={(e) => {this.props.displayData(data)}} type="button">Display Data</button>
          </td>
        )
      }
    }

    /*

    for(let i = 0; i < columns.length; i++) {
      let column = columns[i];
      let key = column + '-' + this.props.index + '-' + i;
      let data = rowData[column];
      if(data.length < 50) {
        rowSpans.push(<td key={key}>{data}</td>)
      } else {
        rowSpans.push(
          <td key={key}>
            <button onClick={(e) => {this.props.displayData(data)}} type="button">Display + {column}</button>
          </td>
        )
      }
    }

    */

    return (
      <tr id='RowsOuterDiv'>
        {rowSpans}
      </tr>
    )
  }
}
