import React from "react";
import "./About.css";
import Victor from "../../Images/victor.JPG";
import Joel from "../../Images/Joel.jpg"
import Daniel from "../../Images/Daniel.png"
import irina from "../../Images/irina.jpeg"

function Card(props) {
  // imgSrc={ 
  //             "https://media.licdn.com/dms/image/C4D03AQH75_OyZk3IKw/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=f-yQll6HfCUJnqICakdZkaWGu9QiYWsdlG9by3bPGaA"
  //           } 
  return (
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p>
                  <img
                    class="img-fluid"
                    src={props.imgSrc}
                    alt={props.imgAlt}
                  />
                </p>
                <h4>{props.name}</h4>
                <p class="card-text">{props.desc}</p>
                <a href="#" class="btn btn-primary btn-sm">
                  <i class="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">Developer</h4>
                <p class="card-text">{props.job}</p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href={props.githubLink}
                    >
                      <i class="fa fa-github" />
                    </a>
                  </li>
                  <br></br>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href={props.linkedInLink}
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center p-5">
            <h2  className="text-focus-in">Meet the team</h2>
          </div>
        </div>
        <div className="row">
          <Card
            name={"Joel Franco"}
            desc={"Brooklyn College"}
            job={"Working on the back-end and front-end"}
            imgSrc={Joel}
            githubLink={"https://github.com/FrancoJ101"}
            linkedInLink={"https://www.linkedin.com/in/joelfranco18/"}
            imgAlt={"Joel photo"}
          />
          <Card
            name={"Daniel Constantine"}
            desc={"Queens College"}
            job={"Working on the back-end and front-end"}
            imgSrc={Daniel}
            githubLink={"https://github.com/daniel-constantine"}
            linkedInLink={"https://www.linkedin.com/in/danielconstantine/"}
            imgAlt={"Daniel photo"}
          />
          <Card
            name={"Victor Hong"}
            desc={"City College"}
            job={
              "Working on the back-end using Sequelize, PostgreSQL, and Express"
            }
            imgSrc={Victor}
            githubLink={"https://github.com/vhong000"}
            linkedInLink={"https://www.linkedin.com/in/vhong000/"}
            imgAlt={"Victor photo"}
          />
          <Card
            name={"Irina Fedorova"}
            desc={"Brooklyn College"}
            job={"Working on the front-end using React and Bootstrap"}
            imgSrc={irina}
            githubLink={"https://github.com/irinafedorovacisc"}
            linkedInLink={"https://www.linkedin.com/in/irinafedorovany"}
            imgAlt={"Irina photo"}
          />
        </div>
      </div>
    );
  }
}
