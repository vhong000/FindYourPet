import React, { Component } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import DashboardBody from './components/MainDashboard/DashboardBody/DashboardBody';
import AdopterProfile from './components/Profiles/AdopterProfile/AdopterProfile';
import AdopteeProfile from './components/Profiles/AdopteeProfile/AdopteeProfile';

class App extends Component { 
 
  render() {
    return (
      <div>       
        nav bar
        <Navbar />
        login page
        <Login />
        main page
        <DashboardBody />
        Adopter Profile         
        <AdopterProfile />  
        Adoptee Profile 
        <AdopteeProfile />                         
      </div>
    );
  }
} 

export default App;

