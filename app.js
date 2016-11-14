// var name = "Jear";
// var details = {favouriteLanguage: "JavaScript", age: 27, children: 0}
// var errorMessage = "Something bad has occured";
//
// console.log(name);
// console.error(errorMessage);

//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Reehouse's API to get profile information to print out

//Connect to the API URL (http://teamtreehouse.com/username.json)
//Read the data
//Parse the data
//Print the data
var profile = require('./profile');
var users = process.argv.slice(2);

users.forEach(profile.get);
