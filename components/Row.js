import React, {Component} from 'react';


export default class Row extends Component {

  render() {
    'use strict';
    const rowData = this.props.rowData;
    const columns = this.props.columns;
    let rowSpans = [];

    for(var i = 0; i < rowData.length; i++) {
      let key = columns[i] + '-' + this.props.index + '-' + i;
      rowSpans.push(<td key={key}>{rowData[i]}</td>)
    }

    return (
      <tr id='RowsOuterDiv'>
        {rowSpans}
      </tr>
    )
  }
}
