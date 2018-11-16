import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import MainBody from "./components/LandingPage/MainBody/MainBody";
import LoginPage from "./components/Login/LoginPageBody";
import NavBar from "./components/Navbar/NavBar";
import FindPetPage from "./components/MainDashboard/DashboardBody/DashboardBody";
import AdopterProfile from "./components/Profiles/AdopterProfile/AdopterProfile";
import AdopteeProfile from "./components/Profiles/AdopteeProfile/AdopteeProfile";

class App extends React.Component {
  state = {
    redirectToReferrer: false,
    email: "",
    password: ""
  };

  authenticated = () => {
    console.log("authenticated in");
    this.setState({ redirectToReferrer: true });
  };

  render() {
    return (
      <div>
        <NavBar
          redirectToReferrer={this.state.redirectToReferrer}
          email={this.state.email}
          password={this.state.password}
        />
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/FindPetPage" component={FindPetPage} />
          <Route
            path="/LoginPage"
            render={props => (
              <LoginPage
                {...props}
                redirectToReferrer={this.state.redirectToReferrer}
                email={this.state.email}
                password={this.state.password}
                authenticated={this.authenticated}
              />
            )}
          />
          <Route path="/AdopterProfile" component={AdopterProfile} />
          <Route path="/AdopteeProfile" component={AdopteeProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
