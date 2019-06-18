//grab Bands in Town axios package
var axios = require("axios");

//axios.get function
axios
    .get("http://www.artists.bandsintown.com/bandsintown-api")
    .then(function(response){
        //console.log to make sure the package was successful
        console.log(response.data.venue);
    })