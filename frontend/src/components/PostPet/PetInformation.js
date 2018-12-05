import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PostPet = {
  petName: "",
  petType: "",
  petBreed: "",
  petAge: "",
  petGender: "",
  petInfo: "",
  petEnergy: "",

  send(
    petName,
    petType,
    petBreed,
    petAge,
    petGender,
    petInfo,
    petEnergy,
    history
  ) {
    fetch("api/pet/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: petName,
        species: petType,
        breed: petBreed,
        dob: petAge,
        gender: petGender,
        description: petInfo,
        energy: petEnergy
      })
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("successful pet post");
        } else {
          throw new Error("Bad post");
        }
      })
      .then(() => {
        console.log("pushing");
        history.push("/FindPetPage");
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default class PetInformation extends Component {
  state = {
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    petGender: "",
    petInfo: "",
    petEnergy: ""
  };

  handlePetNameChange = event => {
    this.setState({ petName: event.target.value });
  };

  handlePetTypeChange = event => {
    this.setState({ petType: event.target.value });
  };

  handlePetBreedChange = event => {
    this.setState({ petBreed: event.target.value });
  };

  handlePetAgeChange = event => {
    this.setState({ petAge: event.target.value });
  };

  handlePetGenderChange = event => {
    this.setState({ petGender: event.target.value });
  };

  handlePetInfoChange = event => {
    this.setState({ petInfo: event.target.value });
  };

  handlePetEnergyChange = event => {
    this.setState({ petEnergy: event.target.value });
  };

  submit = () => {
    PostPet.send(
      this.state.petName,
      this.state.petType,
      this.state.petBreed,
      this.state.petAge,
      this.state.petGender,
      this.state.petInfo,
      this.state.petEnergy,
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <hr />
        <h4>Pet Information</h4>
        <div className="row">
          <div className="col-md-12">
            <form id="AdopteePetInfo">
              <div className="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Name*
                </label>
                <div className="col-8">
                  <input
                    id="text"
                    name="text"
                    placeholder="Pet Name"
                    className="form-control here"
                    required="required"
                    type="text"
                    onChange={this.handlePetNameChange}
                    value={this.state.petName}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet species*
                </label>
                <div className="col-8">
                  <input
                    type="radio"
                    name="gender"
                    value="Dog"
                    onClick={this.handlePetTypeChange}
                  />
                  Dog <br />
                  <input
                    type="radio"
                    name="gender"
                    value="Cat"
                    onClick={this.handlePetTypeChange}
                  />
                  Cat
                </div>
              </div>
              <div className="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Breed*
                </label>
                <div className="col-8">
                  <input
                    id="text"
                    name="text"
                    placeholder="Pet Breed"
                    className="form-control here"
                    required="required"
                    type="text"
                    onChange={this.handlePetBreedChange}
                    value={this.state.petBreed}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Age
                </label>
                <div className="col-8">
                  <input
                    id="text"
                    name="text"
                    placeholder="Pet Age"
                    className="form-control here"
                    required="required"
                    type="text"
                    onChange={this.handlePetAgeChange}
                    value={this.state.petAge}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Gender
                </label>
                <div className="col-8">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onClick={this.handlePetGenderChange}
                  />
                  Male <br />
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onClick={this.handlePetGenderChange}
                  />
                  Female
                </div>
              </div>
              <div className="form-group row">
                <label for="publicinfo" class="col-4 col-form-label">
                  Pet Info
                </label>
                <div class="col-8">
                  <textarea
                    id="publicinfo"
                    name="publicinfo"
                    cols="40"
                    rows="4"
                    class="form-control"
                    onChange={this.handlePetInfoChange}
                    value={this.state.petInfo}
                  />
                </div>
              </div>
              <div className="">
                <label for="formControlRange">Pet Energy</label>
                <input
                  type="range"
                  className="form-control-range"
                  id="formControlRange"
                  min="1"
                  max="10"
                  step="1"
                  value={this.value}
                  onChange={this.handlePetEnergyChange}
                />
                {this.state.petEnergy}
              </div>
            </form>
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button
              name="submit"
              type="submit"
              className="btn btn-primary"
              id="post"
              onClick={this.submit}
            >
              Post a Pet
            </button>
          </div>
        </div>
      </div>
    );
  }
}
