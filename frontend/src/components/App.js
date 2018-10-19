import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import '../App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import FindPetPage from './FindPetPage';
import AdopterProfile from './AdopterProfile';
import AdopteeProfile from './AdopteeProfile';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <NavBar/> 
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/HomePage' component={HomePage} />
            <Route path='/FindPetPage' component={FindPetPage} />
            <Route path='/LoginPage' component={LoginPage} />
            <Route path='/AdopterProfile' component={AdopterProfile} />
            <Route path='/AdopteeProfile' component={AdopteeProfile} />
          </Switch>
        </div>
      </BrowserRouter>     
      </div>
    )
  }
}

export default App;
