import React from "react";
import { Redirect } from "react-router-dom";
import data from "../../auth";
import UpdateDelete from "./Common/UpdateDelete/UpdateDelete";
import PetImages from "./AdopteeProfile/PetImages";
import Settings from "./Settings/Settings";

export default class UserProfile extends React.Component {
  render() {
    if (this.props.auth === false) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container">
        <div class="container">
        <br/>
        <h2>{data.firstName} {data.lastName}'s Profile</h2>
            <div class="row">
                <div class="col-md-3 ">
                    <Settings/>
                </div>
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-body">              
                            <div class="row">
                                <div class="col-md-12">                                                       
                                    <PetImages/>                               
                                    <div className="row">
                                      <div className="col">                                    
                                        <h3>About me</h3>
                                        <p>First name: {data.firstName}</p>
                                        <p>Last name: {data.lastName}</p>
                                        <p>Address: {data.address}</p>
                                        <p>City: {data.city}</p>
                                        <p>State: {data.state}</p>
                                        <p>Zipcode: {data.zipcode}</p>
                                        <p>PhoneNumber: {data.phoneNumber}</p>
                                        <p>Email: {data.email}</p>
                                        <p>Pets I'm Interested in:{" "}</p>                                             
                                        <p>People interested in my pet:</p>
                                      </div>
                                    </div>
                                    <UpdateDelete/>
                                </div>
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
