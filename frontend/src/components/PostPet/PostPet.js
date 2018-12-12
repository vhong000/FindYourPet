import React, { Component } from "react";
import Settings from "../Profiles/Settings/Settings";
//import PetImages from "../Profiles/AdopteeProfile/PetImages";
import PostButton from "./PostButton";
import "./postpet.css";
import PetInformation from "./PetInformation";
import EnergyLevel from "./EnergyLevel";
import { Redirect } from "react-router-dom";

export default class PostPet extends Component {
  render() {
    if (this.props.auth === false) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <div className="container">
          <br />
          <h2>Post a Pet</h2>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <PetInformation history={this.props.history} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      );
    }
  }
}
