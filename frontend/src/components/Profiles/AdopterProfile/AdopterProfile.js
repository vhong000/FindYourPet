import React, { Component } from "react";
import Settings from "../Settings/Settings";
import CommonInfoSection from "../Common/CommonInfoSectiom";
import UpdateDelete from "../Common/UpdateDelete/UpdateDelete";
import AvatarUploder from "../Common/AvatarUploader/AvatarUploader";

export default class AdopterProfile extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h2>Adopter Profile</h2>
        <div className="row">
          <div className="col-md-3 ">
            <Settings />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <AvatarUploder />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <CommonInfoSection />
                    <UpdateDelete />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
