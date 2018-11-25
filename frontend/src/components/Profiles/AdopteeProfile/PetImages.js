import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import PetInformation from './PetInformation';
//https://www.npmjs.com/package/react-images-upload -package for image upload

export default class PetImages extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    
  render() {
    return (
      <div>
      <h4>Pet Photos</h4>
      <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />         
      </div>
      
    )
  }
}
