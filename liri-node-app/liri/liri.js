//Set evironmental varaibles into process.env from and .env file
require("dontenv").config();

//Getting access to the npms we need each of the functions we will be doing. We will need axois, spotify, file sharing, moment, and the Spotify API Keys in my keys.js file. 

var request = require('request');
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var spotifyKeys = require ("./keys.js");

//spotify keys
var spotify = new spotify(spotifyKeys.spotify);

//moment js
var moment = require('moment');
moment().format();

//access to the command line arguements
var command = process.argv[2];
var input = process.argv[3];


//switch for commands of all functions 

switch(command) {
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        spotifySong(input);
        break;
    case "movie-this":
        movieThis(input);
        break;
    case "do-what-it-says":
        doThis(input);
        break;
    };


// command: 'concert- this'

function concertThis(input) {

    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i < response.data.length ; i++) {
            var datetime = response.data[i].datetime; //saves dateTime into a variable 
            var dateArr = response.data[i].split('T'); //attempt to split the date and time in the response

            var concertResults = "-------------------------------" + 
            "\nVenue Name: " + response.data[i].venue.name +
            "\nVenue Location: " + response.data[i].venue.city +
            "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYYY"); //dateArr[0] should be the date separated from the time
            console.log(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

}

//command: 'spotify-this-song'

    //grab spotify axios pagckage and use .get function

//command: 'movie-this'

axios    
    .get("http://www.omdbapi.com")
    .then(function(response){
        console.log("Title: " + response.data.title);
    })

    //grab OMDB axios package and use get function

//command: 'do-what-it-says'

    //


//assign args to ask for switch case 
ask (commands, input);