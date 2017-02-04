# comp308-lesson3
## Oi mate! Welcome to Lesson 3 - Express JS Demo ***(Follow this README through each update in commits)***
#**For Getting Node.js Projects onto Heroku**
##In package.js: add engines (node,npm)
####In your main js file, enable flexible port listening that can be given by Heroku or listen to a default port:
####let port = process.env.PORT || localport; 
####app.set('port', port)
##
####//start listening without specified port
####app.listen(port);
####console.log(`Server startd at http://localhost:${port}`);
#With Standard responses (have not done Redirect/Render/Route etc. yet):
####app.use('/hello', (req, res, next) =>{
####      res.send("Hello...is it me you're looking for?")//res.send gives different html structure via Express
####  next();
####});
#Most Importantly: Have a Procfile to specify as a web project run via Node to Heroku: (Type) web: node server.js
#**Install extra Node Modules into Project via command line:**
##C:\Users\-\-\-\-\COMP308\COMP308-Lesson3>npm install morgan body-parser method-override compression cookie-parser session --save
##express -e => comes with warning to download components for EJS View Engine, since that's what will be used
#npm init - again after adding engines (again) to re-add info in package.json (*Again*):
####name: (comp308-lesson3)
####version: (0.0.0) 0.0.1
####description: Express Demo via Express Generator for MVC (vertical site structure)
####entry point: (app.js) server.js
####git repository: (https://github.com/Jason-Pearson/comp308-lesson3.git)
####keywords: NodeJS, ExpressJS, Heroku
####author: Jason Pearson
####license: (ISC)
###***Change Scripts -> Start: "node server.js"***
#npm install (again) - fetch modules from global folder (in Appdata/Roaming) to test this all out locally *(Ay, this looks nice lmao)*
#**Need .bowerrc file as a config file for bower installation** *then* **bower init** on CL for bower.json setup
##***Add*** **bower install jquery@2.2.4 --save** *and* **bower install bootstrap font-awesome --save**  via command line - imports JQuery/BootSrap/Font-Awesome into public/Scripts/lib folder
