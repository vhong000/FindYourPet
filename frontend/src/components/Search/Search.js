import React, { Component } from 'react';
import pf from 'petfinder-client';

//importing petfinder-client because of CORS type problems
const petfinder = pf ({
    key: "51fd23b7ef07759d160ed31867e35e4b",
    secret: "b10f0af1d9a1824e4ecdbcba2c4cc939",
});

function Pets(props){
    return (
        <div className="col-sm pet"> 
            <img src={props.image} alt="picture of pets"/>
            <p>{props.name}</p>
            <p>{props.animal}</p>
            <p>{props.description}</p>
        </div>
    );
}
export default class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
        pets: [],
        listOfPets: [],
      };
      
      this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
      this.createPets = this.createPets.bind(this);
  }

  createPets(){
    let container = [];

    let count = 0; //to only show 5 pets for now

    for(let i = 0; i < this.state.pets.length; i++){
        if(count === 5) break;
        count++;
        let temp = this.state.pets[i];
        // console.log(temp.media.photos.photo[12].value);
        container.push(
            <Pets key={i} name={temp.name} animal={temp.animal} description={temp.description} image={temp.media.photos.photo[2].value}
        />);
    }

    return <div className="row">{container}</div>
  }

  handleZipCodeChange(event){
    let pets; 

    if(event.target.value.length === 5){
        petfinder.pet.find({output:"full", location: `${event.target.value}`})
        .then(data => {
            if(data.petfinder.header.status.code === "100") {
                console.log("working")
                if(data.petfinder.pets && data.petfinder.pets.pet){
                    if(Array.isArray(data.petfinder.pets.pet)){
                        pets = data.petfinder.pets.pet;
                        console.log(pets);
                    } else {
                        pets = [data.petfinder.pets.pet];
                    }
                } else {
                    pets = [];
                }
            } else {
                console.log("not working")
                pets = [];
            }

            this.setState({
                pets: pets
            });
        });
    } else {
        pets = [];
        this.setState({
            pets: pets
        });
    }

  }

  render() {
      let contain = this.createPets();

    return (
      <div className="panel container">
            <h2>enter the zipcode</h2> 
            <form id="loginform">
              <div className="form-group">
                <input type="text" className="form-control" id="inputZipcode" placeholder="Zipcode" onChange={this.handleZipCodeChange} />
              </div>
              <div>  
                  <button type="submit" className="btn btn-primary">Search near me</button>                  
              </div>
            </form>
            {contain}
      </div>       
    )
  }
}
