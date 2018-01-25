const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public')); // middleware that will make routing easy
                                                // __dirname is the pathname of the project

app.get('/', (req, res) => {
   //res.send('<h1>Hello Express!</h1>');
   res.send({
      name: 'Brent',
      likes: [
         'Lisa',
         'Biking'
      ]
   });
});

app.get('/about', (req, res) => {
   res.send('About Page');
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
