import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default class EnergyLevel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  render() {
    return (
      <div>
        <p>Energy level</p>
        <br />
        <InputRange
          maxValue={10}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        <br />
      </div>
    );
  }
}
