import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import HomePage from './components/HomePage';
import LoginPage from './components/Login/LoginPage';
import NavBar from './components/NavBar';
import FindPetPage from './components/MainDashboard/DashboardBody/DashboardBody';
import AdopterProfile from './components/Profiles/AdopterProfile/AdopterProfile';
import AdopteeProfile from './components/Profiles/AdopteeProfile/AdopteeProfile';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<NavBar/> 
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/FindPetPage' component={FindPetPage} />
				<Route path='/LoginPage' component={LoginPage} />
				<Route path='/AdopterProfile' component={AdopterProfile} />
				<Route path='/AdopteeProfile' component={AdopteeProfile} />
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
