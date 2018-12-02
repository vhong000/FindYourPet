module.exports = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  phoneNumber: "",
  password: "",

  //for log-in
  send(email, password, auth) {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => {
        if (response.status === 200) {
          console.log("Successful login");
          auth();
          return response.json();
        } else {
          console.log(response.status);
          throw new Error("Sign-in failed");
        }
      })
      .then(jsonData => {
        this.firstName = jsonData.firstName;
        this.lastName = jsonData.lastName;
        this.address = jsonData.address;
        this.city = jsonData.city;
        this.state = jsonData.state;
        this.zipcode = jsonData.zipcode;
        this.phoneNumber = jsonData.phoneNumber;
        this.address = jsonData.address;
        this.email = jsonData.email;
        console.log(jsonData);
      })
      .catch(err => {
        console.log(err);
      });
  },

  //for registration
  sendRegister(
    firstName,
    lastName,
    address,
    city,
    state,
    zipcode,
    phoneNumber,
    email,
    password,
    history
  ) {
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        password: password
      })
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("Success creating new account");
        } else {
          throw new Error("Failed Registering");
        }
      })
      .then(() => history.push("/"))
      .catch(error => {
        console.log("Bad Input");
      });
  },

  //for log out
  logOut(logout, history) {
    fetch("api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json: charset=utf-8"
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log("Succesful log out");
          logout();
        } else {
          throw new Error("Failed logout");
        }
      })
      .then(() => history.push("/"))
      .catch(error => {
        console.log(error);
      });
  }
};
