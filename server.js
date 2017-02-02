const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const data = require('./public/data/rho');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// data for carousel
app.get('/data', function(req, res) {
  res.send(data);
});

// set index.html as main file
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// server connection
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port:', port);
  console.log('Press ctrl + c to quit');
});
