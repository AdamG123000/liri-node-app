//Set evironmental varaibles into process.env from and .env file

var dotenv = require("dontenv").config();

//Getting access to the npms we need each of the functions we will be doing. We will need axois, spotify, file sharing, moment, and the Spotify API Keys in my keys.js file. 

let axios = require("axios");
let Spotify = require("node-spotify-api");
let fs = require("fs");
let spotifyKeys = require ("./keys.js");
var spotify = new spotify(spotifyKeys.spotify);

//access to the command line arguements
const [node,file, ...args] = process.argv;

