
export const getUserPets = () => fetch('/api/pet/user', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => {
  if (response.status !== 200) {
    throw Error(response.statusText);
  } return response.json();
}).catch(error => error);

export const getInterestedPets = () => fetch('/api/user/interested', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => {
  if (response.status !== 200) {
    throw Error(response.statusText);
  } return response.json();
}).catch(error => error);

export const getInterestedUsers = (num) => fetch(`/api/user/interested/${num}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    }).then((response) => {
      if (response.status !== 200) {
        console.log(response.status)
        throw Error(response.statusText);
      }
      console.log(response.status)
      //console.log(response.json()) 
      return response.json();
    }).catch(error => {
      console.log(error)});
