// our express server - for git initial commit
let express = require('express'); // imported third party module (express) into express (object)
 //let app (object) be a express Server object
let app = express();
//assign port# as constant
const port = 3000;

//setup event loop - listens on port 3000 w/console log statement upon executing listen command
app.listen(port); //listen for port#/hostname - localhost:3000
console.log(`Server listening at port: ${port}`); //need ` back quotes on tilde key ~ for passing variables into string

//mounted two roots onto server

// hello route - in proper order via mounting - '/(insert)' first before default '/'
app.use('/hello', (req, res, next) =>{
  //don't need set header with express
    res.end("Hello FAM!")
  next();
});

//anonymous Function with Arrow Function - indicate this root folder for the server to access - respond to the html page with "Welcome"
//app.use same as app.get
// '/' main root for this website (webpage, can be hyerlinked?)
app.use('/', (req, res, next) =>{
    res.end("Welcome!")
  next();
});
