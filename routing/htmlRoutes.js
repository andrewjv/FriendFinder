// Path package to get the correct file path for html
var path = require('path');


module.exports = function(app) {

  // get request for survey page
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // if no matching route is found it will default to the home page
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};