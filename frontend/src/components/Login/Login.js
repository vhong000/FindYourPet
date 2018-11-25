import React, { Component } from 'react';
import './Login.css';


const sendData = {
    email: "",
    password: "",

    send(email,password){
        fetch('/api/auth/login',{
            method:'POST',
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
        body: JSON.stringify({
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


export default class Login extends Component {

    state = { 
        email: "",
        password: "",
    };

    submit = () => {
        sendData.send(this.state.email, this.state.password);
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
            <h2>login</h2> 
            <br/>         
            <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" onChange={this.handleEmailChange} value={this.state.email}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.handlePassChange} value={this.state.password}/>
            </div>
            <div className="forgot">
                <a href="reset.html">Forgot password?</a>               																	
            </div>                        
            </form>
            <button type="submit" className="btn btn" onClick={this.submit}>Login</button>    
        </div>       
        )
    }
}

