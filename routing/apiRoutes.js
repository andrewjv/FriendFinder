// linking route to friends data array
var friends = require('../app/data/friends');

module.exports = function (app) {

  // users are shown a JSON of the data in the table
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  });

  // API POST request
  // This code handles when a user submits a form and then submits the data to the server
  app.post('/api/friends', function (req, res) {
    
    // variable for the new friend scores array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    // for loop through the friends array
    for (var i = 0; i < friends.length; i++) {

      var scoresDiff = 0;

      // runs through the new friend scores array and compares them to the friends that are already in the array
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // pushes the result into the scoresArray
      scoresArray.push(scoresDiff);
    }

    // finds the best match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    // returns the best match data
    var theBestMatch = friends[bestMatch];
    res.json(theBestMatch);

    friends.push(req.body);
  })
}