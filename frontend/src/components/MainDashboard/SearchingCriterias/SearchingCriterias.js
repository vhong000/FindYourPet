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
            <h3>Species</h3>
            <div className="input-group">
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxDog"
                  value="Dog"
                  onChange={this.props.handleSort}
                />
                <label className="form-check-label" htmlFor="inlineCheckboxDog">
                  Dog
                </label>
              </div>
            </div>
            <div className="input-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxCat"
                  value="Cat"
                  onChange={this.props.handleSort}
                />
                <label class="form-check-label" htmlFor="inlineCheckboxCat">
                  Cat
                </label>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="input-group">
              {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
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
              </div> */}

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
        </div>
      </div>
    );
  }
}
