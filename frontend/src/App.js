import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import './App.css';
import './components/Search/Search.css'

class App extends Component {
  render() {
    return (
      <div>          
          <Search />
      </div>
    );
  }
}

export default App;
