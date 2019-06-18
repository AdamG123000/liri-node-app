//Set evironmental varaibles into process.env from and .env file

var dotenv = require("dontenv").config();

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
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
    };


// command: 'concert- this'

function concertThis(bandQuery) {

    var queryURL = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp";
    console.log(queryURL);

    axios.get(queryURL).then(
        function(response) {
        console.log("Venue: " + response.data.venue)
        console.log("Location: " + response.data.location)
        console.log("Date: " + response.data.location)
        }
    )

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