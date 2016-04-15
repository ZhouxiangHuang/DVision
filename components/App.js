import React, {Component} from 'react';
import {render} from 'react-dom';
import NavBar from './NavBar';
import Info from './Info';
import Search from './Search';
import Table from './Table';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        App
        <NavBar />
        <Info />
        <Search />
        <Table />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
