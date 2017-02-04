let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  let currentDate = new Date();
  res.render('index', { 
    title: 'Express',
  date: `${currentDate.getMonth()}, ${currentDate.getDay()}, ${currentDate.getFullYear()} (MM,DD,YYYY) -- ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} (HH:MM:SS)`

   });
});

/* GET about page. Extra route using about.ejs View*/
router.get('/about', (req, res, next) =>{
  res.render('about', { title: 'About' }); //Render about.ejs view, ref. title - pass in 'About', etc
});

module.exports = router;
