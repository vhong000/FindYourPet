module.exports = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
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
      }),
    }).then((response) => {
        if (response.status === 200) {
          console.log("Successful login");
          auth();
        } else {
          console.log(response.status);
          console.log(password)
          throw new Error("Sign-in failed");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  //for registration
  sendRegister(firstName, lastName, email, address, phoneNumber, password, history) {
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
