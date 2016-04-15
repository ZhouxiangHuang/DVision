import React, {Component} from 'react';


export default class Row extends Component {

  render() {
    'use strict';
    const rowData = this.props.rowData;
    let rowSpans = [];

    for(var i = 0; i < rowData.length; i++) {

          console.log(rowData[i]);
          <div>
          hellllllo
          <span className = {this.props.columns[i]}>{rowData[i]}</span>
          </div>


    }

    return (
      <div id='RowsOuterDiv'>
        {rowSpans}
      </div>
    )
  }
}
