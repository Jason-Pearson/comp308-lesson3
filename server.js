// our express server - for git initial commit
let express = require('express'); // imported third party module (express) into express (object)
 //let app (object) be a express Server object
let app = express();
//assign port# as constant
const port = 3000;

//start listening without specified port
app.listen(() =>{
  console.log(`Server startd...`);
});

//mounted two roots onto server

// hello route - in proper order via mounting - '/(insert)' first before default '/'
//this is an event listener (for hello root - request, reponse, nextRequest) passed into a Callback Function (Event Handler) via Anonymous-Arrow Function
//app.use - for mounting middleware functions such as this
app.use('/hello', (req, res, next) =>{
  //don't need set header with express
    //res.redirect("index.html") //the Response for this Callback is a res.redirect to a new html page
      res.send("Hello...is it me you're looking for?")//res.send gives different html structure via Express
  next();
});

//anonymous Function with Arrow Function - indicate this root folder for the server to access - respond to the html page with "Welcome"
//app.use(Connect) same as app.get(Express, needs Post function as well however)
// '/' main root for this website (webpage, can be hyerlinked?)
app.use('/', (req, res, next) =>{
    res.send("Welcome!")//res.send gives different html structure via Express
  
  next();
});

//takes this Express server file outside of the server
module.exports = app; 