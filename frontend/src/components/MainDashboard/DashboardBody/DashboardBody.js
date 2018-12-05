import React, { Component } from "react";
import ZipperSetter from "../ZipcodeSetter/ZipcodeSetter";
import UserCard from "../UserCard/UserCard";
import Pagination from "../Pagination/Pagination";
import SearchingCriterias from "../SearchingCriterias/SearchingCriterias";
import LikedPets from "../LikedPets/LikedPets";
import PetCard from "../../PetProfile/PetCard";
import "./DashboardBody.css";

export default class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zipcode: "",
      dog: false,
      cat: false,
      breed: "",
      active: "0",
      male: false,
      female: false
    };
    this.getPet = this.getPet.bind(this);
    this.getPetByZipcode = this.getPetByZipcode.bind(this);
  }

  componentDidMount() {
    this.getPet();
  }

  //handle sorting pet
  handleSort = e => {
    const value = e.target.value;
    console.log(value);
    let temp = this.state.data;
    if (value === "yto") {
      //getting the young to oldest
      temp.sort((a, b) => {
        return a.dob - b.dob;
      });
    } else if (value === "oty") {
      //getting the oldest to youngest
      temp.sort((a, b) => {
        return b.dob - a.dob;
      });
    } else if (value === "Dog") {
      this.setState({
        dog: !this.state.dog
      });
    } else if (value === "Cat") {
      this.setState({
        cat: !this.state.cat
      });
    } else if (value === "Male") {
      this.setState({
        male: !this.state.male
      });
    } else if (value === "Female") {
      this.setState({
        female: !this.state.female
      });
    }
    this.setState({
      data: temp
    });
  };

  //handle getting the pet breed
  handleSelection = e => {
    const value = e.target.value;
    // console.log(value);
    this.setState({
      breed: value
    });
  };

  //handle the active level of the pet
  handleControl = e => {
    this.setState({
      active: e.target.value
    });
    console.log("a");
  };

  handleGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  //getting all the pet from the DB
  getPet() {
    fetch("/api/pet/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("Something went wrong in GETPET function");
        }
      })
      .then(jsonData => {
        // console.log("Fetching all information");
        console.log(jsonData);
        this.setState({ data: jsonData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //getting all the pet from the DB based on ZIPCODE
  getPetByZipcode(zipcode) {
    // console.log("zip", zipcode);
    fetch("/api/pet/zipcode/" + zipcode, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("Something went wrong in GETPETBYZIPCODE function");
        }
      })
      .then(jsonData => {
        // console.log("Fetching all information based on zipcode");
        // console.log(jsonData);
        this.setState({ data: jsonData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleZipChange(e) {
    const input = e.target.value;
    this.setState({ zipcode: input });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { zipcode } = this.state;
    if (zipcode) {
      this.getPetByZipcode(this.state.zipcode);
    } else {
      this.getPet();
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="container">
          <div className="card my-4">
            <h5 className="card-header">Set your zip code:</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-10">
                  <input
                    className="form-control"
                    placeholder="Set your zip code..."
                    onChange={e => this.handleZipChange(e)}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="btn btn-outline-warning"
                    id="setbutton"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Find!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="card my-4">
                <div className="container">
                  <div className="row">
                    {data
                      ? data
                          .filter(pet => {
                            //filter based on species
                            if (this.state.dog && !this.state.cat) {
                              return pet.species === "Dog";
                            } else if (this.state.cat && !this.state.dog) {
                              return pet.species === "Cat";
                            } else {
                              return pet;
                            }
                          })
                          .filter(pet => {
                            if (this.state.male && !this.state.female) {
                              return pet.gender === "Male";
                            } else if (this.state.female && !this.state.male) {
                              return pet.gender === "Female";
                            } else {
                              return pet;
                            }
                          })
                          .filter(pet => {
                            //filter pet based on breed
                            if (this.state.breed === "") {
                              return pet;
                            } else {
                              return pet.breed === this.state.breed;
                            }
                          })
                          .filter(pet => {
                            if (this.state.active === pet.energy) {
                              return pet;
                            } else if (this.state.active === "0") {
                              return pet;
                            }
                          })
                          .map(pet => {
                            return (
                              <PetCard
                                name={pet.name}
                                species={pet.species}
                                breed={pet.breed}
                                dob={pet.dob}
                                gender={pet.gender}
                                description={pet.description}
                                zipcode={pet.zipcode}
                                key={pet.id}
                                energy={pet.energy}
                              />
                            );
                          })
                      : null}
                  </div>
                </div>
              </div>
              <Pagination />
            </div>

            <div className="col-md-3">
              <SearchingCriterias
                handleSort={this.handleSort}
                handleSelection={this.handleSelection}
                handleControl={this.handleControl}
                handleGender={this.handleGender}
                data={this.state.data}
                breed={this.state.breed}
                active={this.state.active}
                dog={this.state.dog}
                cat={this.state.cat}
                male={this.state.male}
                female={this.state.female}
              />
              <LikedPets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
