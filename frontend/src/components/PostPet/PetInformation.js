import React, { Component } from "react";

const PostPet = {
  petName: "",
  petType: "",
  petBreed: "",
  petAge: "",
  petGender: "",
  petInfo: "",

  send(petName, petType, petBreed, petAge, petGender, petInfo, history) {
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
        description: petInfo
      })
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("successful pet post");
        }
        else{
            throw new Error("Bad post")
        }
      })
      .then(() => {
        console.log("poushing");
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
    petInfo: ""
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

  submit = () => {
    PostPet.send(
      this.state.petName,
      this.state.petType,
      this.state.petBreed,
      this.state.petAge,
      this.state.petGender,
      this.state.petInfo,
      this.props.history
    );
  };
  render() {
    return (
      <div>
        <hr />
        <h4>Pet Information</h4>
        <div class="row">
          <div class="col-md-12">
            <form id="AdopteePetInfo">
              <div class="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Name*
                </label>
                <div class="col-8">
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
              <div class="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet species*
                </label>
                <div class="col-8">
                    <input type="radio" name="gender" value="Dog" onClick={this.handlePetTypeChange}/> Dog <br></br>
                    <input type="radio" name="gender" value="Cat" onClick={this.handlePetTypeChange}/> Cat
                </div>
              </div>
              <div class="form-group row">
                <label for="text" className="col-4 col-form-label">
                  Pet Breed*
                </label>
                <div class="col-8">
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
              <div class="form-group row">
                <label for="text" class="col-4 col-form-label">
                  Pet Age
                </label>
                <div class="col-8">
                  <input
                    id="text"
                    name="text"
                    placeholder="Pet Age"
                    class="form-control here"
                    required="required"
                    type="text"
                    onChange={this.handlePetAgeChange}
                    value={this.state.petAge}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="text" class="col-4 col-form-label">
                  Pet Gender
                </label>
                <div class="col-8">
                    <input type="radio" name="gender" value="male" onClick={this.handlePetGenderChange}/> Male <br></br>
                    <input type="radio" name="gender" value="female" onClick={this.handlePetGenderChange}/> Female
                </div>
              </div>
              <div class="form-group row">
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
