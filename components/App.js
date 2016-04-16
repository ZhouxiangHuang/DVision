import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar';
import Info from './Info';
import Search from './Search';
import Table from './Table';
const database = require('../sample2.json');
const tableLength = database.length;
var tableNumber = 0;
export default class App extends Component {

  constructor(props) {
    super(props);
    var tableData = database[tableNumber];
    this.state = { tableData }
    this.setNextTable = this.setNextTable.bind(this);
    this.setPreviousTable = this.setPreviousTable.bind(this);
  }

  setNextTable() {

    if(tableNumber === tableLength - 1) tableNumber = 0;
    else tableNumber++;
    var tableData = database[tableNumber];
    this.setState({tableData})
  }

  setPreviousTable() {

    if(tableNumber === 0) tableNumber = tableLength - 1;
    else tableNumber--;
    var tableData = database[tableNumber];
    this.setState({tableData})
  }

  render() {
    return (
      <div id='App'>
        <NavBar />
        <Info next = {this.setNextTable} previous = {this.setPreviousTable}/>
        <Search />
        <Table database={this.state}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
