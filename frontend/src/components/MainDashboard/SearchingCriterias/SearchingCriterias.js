import React, { Component } from "react";
import "./SearchingCriterias.css";

export default class SearchingCriterias extends Component {
  render() {
    let breed = [...new Set(this.props.data.map(breed => breed.breed))]; //removes duplicate breed

    return (
      <div>
        <div className="card my-4" id="cardbody">
          <h5 className="card-header" id="option1">
            Searching criterias:
          </h5>
          <div className="card-body">
            <h5>Species:</h5>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxDog"
                  value="Dog"
                  onChange={this.props.handleSort}
                />
                Dog
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxDog"
                  value="Cat"
                  onChange={this.props.handleSort}
                />
                Cat
              </label>
            </div>
          </div>

          <div className="card-body pt-0">
            <h5>Gender:</h5>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxDog"
                  value="Male"
                  onChange={this.props.handleSort}
                />
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckboxDog"
                  value="Female"
                  onChange={this.props.handleSort}
                />
                Female
              </label>
            </div>
          </div>

          <div className="card-body pt-0">
            <h5>Breed:</h5>
            <select
              value={this.props.breed}
              onChange={this.props.handleSelection}
            >
              <option value=""> </option>
              {breed
                ? breed.map(curr => {
                    return <option value={curr}>{curr}</option>;
                  })
                : null}
            </select>
          </div>

          <div className="card-body pt-0">
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

          <div className="card-body pt-0">
            <label htmlFor="formControlRange">
              <h5>
                Pet Energy<span id="defaultValue"> (0 for default value)</span>
              </h5>
            </label>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
              min="0"
              max="10"
              step="1"
              value={this.props.active}
              onChange={this.props.handleControl}
            />
            {this.props.active}
          </div>

          {/* I find the code below quite difficult to work around, so I just comment it in case we want to use it later on */}
          {/* <div className="card-body">
            <div className="input-group">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="checkbox"
                    name="options1"
                    id="option1"
                    value="Dog"
                    onChange={this.props.handleSort}
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
