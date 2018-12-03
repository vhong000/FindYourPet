import React, { Component } from "react";
import ZipperSetter from "../ZipcodeSetter/ZipcodeSetter";
import UserCard from "../UserCard/UserCard";
import Pagination from "../Pagination/Pagination";
import SearchingCriterias from "../SearchingCriterias/SearchingCriterias";
import LikedPets from "../LikedPets/LikedPets";
import cardphoto from "../../../Images/paw.png";
import "./DashboardBody.css";

function PetCard(props) {
  return (
    <div className="col-md-4 mb-3 mb-md-0" id="usercard">
      <div className="card h-100">
        <h4 className="text-uppercase m-0 card-header">{props.name}</h4>
        <div className="card-body text-center">
          <hr className="my-4" />
          <img
            className="img-fluid mb-5 d-block mx-auto"
            src={cardphoto}
            alt="usercard"
          />
          <div className="small text-black-50 text-left">
            <ul className="card-text">
              <li> Species: {props.species}</li>
              <li> Breed: {props.breed}</li>
              <li> Gender: {props.gender}</li>
              <li> DoB: {props.dob}</li>
              <li> Description: {props.description}</li>
              <li> Zipcode: {props.zipcode}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zipcode: ""
    };
    this.getPet = this.getPet.bind(this);
    this.getPetByZipcode = this.getPetByZipcode.bind(this);
  }

  handleSort = e => {
    console.log(this.state.data);
    let value = e.target.value;
    let temp = this.state.data;
    if (value === "yto") {
      temp.sort((a, b) => {
        return a.dob - b.dob;
      });
    } else if (value === "oty") {
      temp.sort((a, b) => {
        return b.dob - a.dob;
      });
    }
    this.setState({
      data: temp
    });
  };

  componentDidMount() {
    this.getPet();
  }

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
          console.log("Something went wrong");
        }
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ data: jsonData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPetByZipcode(zipcode) {
    console.log("zip", zipcode);
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
          console.log("Something went wrong");
        }
      })
      .then(jsonData => {
        console.log(jsonData);
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
                      ? data.map(pet => {
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
              <SearchingCriterias handleSort={this.handleSort} />
              <LikedPets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
