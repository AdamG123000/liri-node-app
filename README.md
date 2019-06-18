# liri-node-app

This is an app that uses Spotify to search songs, Bands in Town to search concerts, and OMBD for movies.

https://github.com/AdamG123000/liri-node-app.git

video of app in use:

# How to use

On your command line use "node" and one of the following commands:

    "concert-this"
    "spotify-this-song"
    "movie-this"
    "do-what-it-says"

followed by search text

example: node liri.js movie-this Avatar

#concert-this command

This command will display:

    Name of the Venue
    Venue Location
    Date of the Event

#spotify-this-song command

This command will display:

    Artist(s)
    The song's name
    A preview link of the song from Spotify
    The album that the song is from 
    If no song is provided then your program will defaul to "The Sign" by Ace of Base

#movie-this command

    Title of the movie
    When the movie came out 
    IMBD rating of the movie
    Rotten Tomatoes rating of the movie
    Country where the movie was produced
    Language of the movie
    Plot of the movie 
    Actors in the movie
    If the user doesn't type a movie in, the program will output 'Mr. Nobody'

#do-what-it-says command 

    A random.txt file with search for spotify-this-song "I want it that way." This will give you the spotify results of "I want it that way."

#Technologies Used

    Javascript
    Node.js
    Spotify API
    Bands In Town API
    OMDB API

