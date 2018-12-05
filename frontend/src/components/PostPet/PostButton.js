import React, { Component } from "react";
import "../Profiles/Common/UpdateDelete/UpdateDelete.css";

export default class PostButton extends Component {
  render() {
    return (
      <div>
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button
              name="submit"
              type="submit"
              className="btn btn-primary"
              id="post"
            >
              Post a Pet
            </button>
          </div>
        </div>
      </div>
    );
  }
}
