import React, { Component } from 'react';
import Login from './components/Login/LoginPage';
import Navbar from './components/NavBar';
import './App.css';
import DashboardBody from './components/MainDashboard/DashboardBody/DashboardBody';
import AdopterProfile from './components/Profiles/AdopterProfile/AdopterProfile';
import AdopteeProfile from './components/Profiles/AdopteeProfile/AdopteeProfile';
import MainBody from './components/LandingPage/MainBody/MainBody';
class App extends Component { 
 
  render() {
    return (
      <div>      
        <Navbar />
        landing page
        <MainBody />
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

