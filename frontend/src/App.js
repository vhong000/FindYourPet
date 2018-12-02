import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";

import "./App.css";
import MainBody from "./components/LandingPage/MainBody/MainBody";
import LoginPage from "./components/Login/LoginPageBody";
import Navbar from "./components/Navbar/Navbar";
import FindPetPage from "./components/MainDashboard/DashboardBody/DashboardBody";
import UserProfile from "./components/Profiles/UserProfile";
import Register from "./components/Login/Register";
import PostPet from "./components/PostPet/PostPet";
// import LogOut from "./LogOut";
import About from "./components/About/About";

class App extends React.Component {
  state = {
    auth: false
  };

  authenticated = () => {
    this.setState({ auth: true });
  };

  logout = () => {
    this.setState({ auth: false });
  };

  render() {
    return (
      <div>
        <Navbar auth={this.state.auth} logout={this.logout} />

        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/FindPetPage" component={FindPetPage} />
          <Route path="/About" component={About} />
          <Route
            path="/PostPet"
            render={props => (
              <PostPet
                {...props}
                auth={this.state.auth}
                authenticated={this.authenticated}
              />
            )}
          />
          <Route
            path="/LoginPage"
            render={props => (
              <LoginPage
                {...props}
                auth={this.state.auth}
                authenticated={this.authenticated}
              />
            )}
          />

          <Route
            path="/ViewProfile"
            render={props => <UserProfile {...props} auth={this.state.auth} />}
          />

          <Route
            path="/SignUp"
            render={props => (
              <Register
                {...props}
                auth={this.state.auth}
                authenticated={this.state.authenticated}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
