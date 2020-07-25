//important imports
const express = require('express');
const rp = require('request-promise-native'); //request deprecated - use rp
require('dotenv').config();
const cors = require('cors'); //to handle cross origin requests
const bodyParser = require('body-parser'); //to parse Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const path = require('path');

//NPM RUN DEV TO GET BACKEND AND FRONTEND RUNNING

//enable the app instance to serve up data
const app = express();
const port = process.env.PORT || 5000;

//allow cors accesses: must do
app.use(function (req, res, next) {
  // update to match the domain you will make the request from
  res.setHeader(
    'Access-Control-Allow-Origin',
    req.header('origin') ||
    req.header('x-forwarded-host') ||
    req.header('referer') ||
    req.header('host')
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  next();
});

//middlewares: need to enable cors to allows cross origin resource sharing (using our localshost
//front end to perform a request to another origin: we need a backend for this)
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//another test
app.all('/search', (req, res) => {
  //grab the search input and make a api request object (ebay tutorials)
  const search = req.body.search_;
  let uri_ = encodeURI(search);
  let url = 'https://svcs.ebay.com/services/search/FindingService/v1';
  url += '?OPERATION-NAME=findItemsByKeywords';
  url += '&SERVICE-VERSION=1.0.0';
  url += `&SECURITY-APPNAME=${process.env.REACT_APP_API_KEY}`;
  url += '&GLOBAL-ID=EBAY-US';
  url += '&RESPONSE-DATA-FORMAT=JSON';
  url += '&REST-PAYLOAD';
  url += `&keywords=${uri_}`;
  url += '&paginationInput.entriesPerPage=48';

  //see request-promise docs for this syntax and ebay api docs
  const options = {
    uri: url,
    headers: {
      'X-EBAY-SOA-OPERATION-NAME': 'findItemsByKeywords',
      'X-EBAY-SOA-SECURITY-APPNAME': `${process.env.REACT_APP_API_KEY}`,
    },
    json: true,
    resolveWithFullResponse: true,
  };

  //perform the request
  rp(options).then(data => res.send(data)).catch(err => console.log(err));
});

//Heroku production check
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', () => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path
  })
}

//run the server
app.listen(port, () => console.log(`Listening on Port ${port}!`));