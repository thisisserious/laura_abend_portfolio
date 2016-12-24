const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

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
