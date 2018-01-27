const express = require('express');
const hbs = require('hbs');   // handlbars is a view for express (helpful)

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // middleware that will make routing easy
                                                // __dirname is the pathname of the project

app.use((req, res, next) => {
   var now = new Date().toString();

   console.log(`${now}: ${req.method} ${req.url}`);
   next();
});

hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase();
});

app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
      res.render('home.hbs', {
         pageTitle: 'Home Page',
         welcomeMessage: 'Welcome to my website!'
      });
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
      pageTitle: 'About Page'
   }); // pass the render page in the default folder "views"
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
   res.send({
      errorMessage: 'Unable to handle request'
   });
})

app.listen(3000, () => {
   console.log('Server is up on port 3000');
});
