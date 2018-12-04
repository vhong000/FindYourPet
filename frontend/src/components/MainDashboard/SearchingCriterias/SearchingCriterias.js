import React, { Component } from "react";
import "./SearchingCriterias.css";

export default class SearchingCriterias extends Component {
  render() {
    return (
      <div>
        <div className="card my-4" id="cardbody">
          <h5 className="card-header" id="option1">
            Searching criterias:
          </h5>
          <div className="card-body">
            <h5>Species:</h5>
            <div className="input-group">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckboxDog"
                    value="Dog"
                    onChange={this.props.handleSort}
                  />
                  Dog
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckboxDog"
                    value="Cat"
                    onChange={this.props.handleSort}
                  />
                  Cat
                </label>
              </div>
            </div>
          </div>

          <div className="card-body pt-2">
            <h5>Breed:</h5>
            <select
              value={this.props.breed}
              onChange={this.props.handleSelection}
            >
              <option value=""> </option>
              {this.props.data
                ? this.props.data.map(one => {
                    return <option value={one.breed}>{one.breed}</option>;
                  })
                : null}
            </select>
          </div>

          <div className="card-body pt-2">
            <div className="input-group">
              <div className="col">
                <h5> Age: </h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="yto"
                    onChange={this.props.handleSort}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Youngest to Oldest
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="oty"
                    onChange={this.props.handleSort}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Oldest to Youngest
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* I find the code below quite difficult to work around, so I just comment it in case we want to use it later on */}
          {/* <div className="card-body">
            <div className="input-group">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options1"
                    id="option1"
                    value="dog"
                    onChange={this.clicked}
                  />
                  Dog
                </label>

                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options2"
                    id="option2"
                    value="cat"
                    onChange={this.clicked}
                  />
                  Cat
                </label>
              </div>

              <div className="dropdown" id="catdog">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Zip
                  </a>
                  <a className="dropdown-item" href="#">
                    Breed
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
