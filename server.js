var express = require('express');
var request = require('superagent');
var R = require('ramda');
var app = express();
var cors = require('cors');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));
app.use(cors());

app.get('/api/scoreboard', function (req, res) {
  request
    .get('http://www.sportsnet.ca/wp-content/themes/sportsnet/zones/ajax-scoreboard.php')
    .set('Accept', 'application/json')
    .end(function(err, data) {
      if (err) {
        return res.status(400).json({error: 'Unable to connect to scoreboard API'});
      }

      var scoreboard = JSON.parse(data.text);

      if (scoreboard && scoreboard.data) {
        var response = {
          in_progress: scoreboard.data.nhl['In-Progress'],
          pre_game: scoreboard.data.nhl['Pre-Game'],
          final: scoreboard.data.nhl['Final']
        };

        return res.status(200).json(response);
      } else {
        return res.status(400).json({error: 'Invalid JSON from scoreboard API'});
      }
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at https://localhost:' + app.get('port'));
});
