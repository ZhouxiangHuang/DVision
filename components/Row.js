import React, {Component} from 'react';


export default class Row extends Component {

  render() {
    console.log('a bunch of times')
    'use strict';
    const rowData = this.props.rowData;
    const columns = this.props.columns;
    let rowSpans = [];
    for(let i = 0; i < columns.length; i++) {
      let column = columns[i];
      let key = column + '-' + this.props.index + '-' + i;
      let data = rowData[column];
      if(data.toString().length < 50) {
        rowSpans.push(<td key={key}>{data}</td>)
      } else {
        rowSpans.push(
          <td key={key}>
            <button onClick={(e) => {this.props.displayData(data)}} type="button">Display + {column}</button>
          </td>
        )
      }
    }


    return (
      <tr id='RowsOuterDiv'>
        {rowSpans}
      </tr>
    )
  }
}
