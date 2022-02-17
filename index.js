// Add your code here

const theURL = "http://localhost:3000/users"

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name : "Steve",
    email : "steve@steve.com",
  }),
};

function submitData(userName, userEmail){
  return fetch(theURL, configurationObject)
    .then(response => response.json())
    .then(getID)
    .catch(errorFunc)
}

function getID(object){
  document.body.innerHTML = object.id
}

function errorFunc(error){
  document.body.innerHTML = error.message
}


