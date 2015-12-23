var PORT = process.env.PORT || 3000;

var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var blogRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/brewtorial_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'stefanredfield.com';

// require('./api/routes')(router);
require('./api/controllers/BlogController')(blogRoutes);

app.use([
  express.static(path.join(__dirname, '/build')),
  bodyParser.json()
]);

app.use('/api', router);
app.use('/api', blogRoutes);

// 404 handler.
app.use(function(req, res, next) {
  console.log('404 - ' + req.method + ' ' + req.url);
  res.status(404)
    .json({
      success: false,
      message: '404 - Resource Not Found',
      result: req.method + ' ' + req.url
    });
});

app.listen(PORT, function() {
  console.log('SERVER IS WERKIN HARD ON PORT ' + PORT )
});



