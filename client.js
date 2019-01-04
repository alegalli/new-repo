const fetch = require("node-fetch");
//const url = "https://api.sunrise-sunset.org/json?lat=46.0793&lng=11.1302";
//const url = "http://localhost:3000/courses"
const url = "https://limitless-sands-28242.herokuapp.com/courses"

const getLocation = async url => {
  try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error){
    console.log(error);
  }
};

getLocation(url);
