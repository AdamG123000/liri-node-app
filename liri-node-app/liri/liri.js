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

// command: 'concert- this'

var queryURL = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";
console.log(queryURL);

axios.get(queryURL).then(
    function(response) {
        console.log("Venue:" + response.data.venue)
    }
)




