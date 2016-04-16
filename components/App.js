import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar';
import Info from './Info';
import Search from './Search';
import Table from './Table';
const database = require('./../dummyDatabase/sample.json');
const tableLength = database.length;
let tableNumber = 0;
let largeData;
export default class App extends Component {

  constructor(props) {
    super(props);
    let tableData = database[tableNumber];
    this.state = { tableData }
    this.setNextTable = this.setNextTable.bind(this);
    this.setPreviousTable = this.setPreviousTable.bind(this);
    this.displayData = this.displayData.bind(this);
  }

  setNextTable() {

    if(tableNumber === tableLength - 1) tableNumber = 0;
    else tableNumber++;
    let tableData = database[tableNumber];
    this.setState({tableData})
  }

  setPreviousTable() {

    if(tableNumber === 0) tableNumber = tableLength - 1;
    else tableNumber--;
    let tableData = database[tableNumber];
    this.setState({tableData})
  }

  displayData(data) {
    largeData = data;
    this.forceUpdate();
  }

  render() {
    return (
      <div id='App'>
        <NavBar />
        <Info next = {this.setNextTable} previous = {this.setPreviousTable}/>
        <Search largeData = {largeData}/>
        <Table database={this.state} displayData={this.displayData}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
