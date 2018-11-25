import React, { Component } from 'react';
import './Login.css';

const sendData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    send(firstName,lastName,email,password){
        fetch('/api/auth/register',{
            method:'POST',
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
        body: JSON.stringify({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }),
        }).then((response) => {
            console.log(response.status)
            if(response.status === 200){
                console.log('success')
            }
        });
    }
}

export default class Register extends Component {

    state = { 
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    submit = () => {
        sendData.send(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
    }

    handleFNChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLNChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePassChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
        <div className="panel">            
            <form id="loginform">
            <h2>Register</h2>
            <br/>          
            <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.email}/>
            </div> 
            <div className="form-group">              
                <input id="name" name="name" placeholder="First Name" className="form-control here" type="text" onChange={this.handleFNChange} value={this.state.firstName}/>                
            </div>
            <div className="form-group">        
                <input id="lastname" name="lastname" placeholder="Last Name" className="form-control here" type="text" onChange={this.handleLNChange} value={this.state.lastName}/>
            </div>   
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.handlePassChange} value={this.state.password}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Confirm Password" />
            </div>                            
            </form>
            <button type="submit" className="btn btn" id="register" onClick={this.submit}>Register</button>  
            <br/>
        </div>       
        )
    }
}

