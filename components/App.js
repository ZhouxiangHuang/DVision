import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar';
import Info from './Info';
import Search from './Search';
import Table from './Table';
const database = require('../sample2.json');
const tableLength = database.length;
let tableNumber = 0;
//let largeData;
export default class App extends Component {

  constructor(props) {
    super(props);
    let tableData = database[tableNumber];
    this.state = { tableData, detail: "" }
    this.setNextTable = this.setNextTable.bind(this);
    this.setPreviousTable = this.setPreviousTable.bind(this);
    this.displayData = this.displayData.bind(this);
  }

  setNextTable() {
    if(tableNumber === tableLength - 1) tableNumber = 0;
    else tableNumber++;
    let tableData = database[tableNumber];
    this.setState({tableData, detail: ""})
  }

  setPreviousTable() {

    if(tableNumber === 0) tableNumber = tableLength - 1;
    else tableNumber--;
    let tableData = database[tableNumber];
    this.setState({tableData, detail: ""})
  }

  displayData(data) {
    this.setState({detail: data});
  }

  render() {
    return (
      <div id='App'>
        <NavBar />
        <Info next = {this.setNextTable} previous = {this.setPreviousTable}/>
        <Search largeData = {this.state.detail}/>
        <Table database={this.state} displayData={this.displayData}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
