import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar';
import Info from './Info';
import Search from './Search';
import Table from './Table';
const database = require('./../dummyDatabase/sample.json');
export default class App extends Component {

  constructor(props) {
  super(props);
  this.state = { database }
}


  render() {
    return (
      <div id='App'>
        <NavBar />
        <Info />
        <Search />
        <Table database={this.state}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
