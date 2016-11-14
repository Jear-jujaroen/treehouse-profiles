var https = require('https');
var http = require('http');



//Print out error message
function printError(error) {
  console.log(error.message);
}

function getProfile(username) {
  function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
  }

  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    console.log(response.statusCode);
    var body = "";
    //Read the data
    response.on('data', function(chunk) {
      body += chunk;
      // console.log('BODY:' + body);
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch (error) {
          //Parse Error
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });

  //Connection Error
  request.on('error', printError);
}

module.exports.get = getProfile;
