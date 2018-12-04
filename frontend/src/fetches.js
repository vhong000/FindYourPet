
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
