const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var weather_router = require('./routes/weather'); 
app.use('/weather-api', weather_router);

app.listen(port, () => console.log(`Listening on port ${port}`));