# comp308-lesson3
## Oi mate! Welcome to Lesson 3 - Express JS Demo
#**For Getting Node.js Projects onto Heroku**
##In package.js: add engines (node,npm)
##In your main js file, enable flexible port listening that can be given by Heroku or listen to a default port:
##let port = process.env.PORT || localport; 
##app.set('port', port)
##
##//start listening without specified port
##app.listen(port);
##console.log(`Server startd at http://localhost:${port}`);
#With Standard responses (have not done Redirect yet):
##app.use('/hello', (req, res, next) =>{
##      res.send("Hello...is it me you're looking for?")//res.send gives different html structure via Express
##  next();
##});
#Most Importantly: Have a Procfile to specify as a web project run via Node to Heroku:
##Type: web: node server.js