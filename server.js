//Install express server
var express = require('express')
  , cors = require('cors')
  , app = express();

const path = require('path');
var errorHandler = require('errorhandler');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler())
}

// Start the app by listening on the default Heroku port
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

var allowedOrigins = ['http://localhost:8080',
                      'https://qkspringdemo.herokuapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

//allow OPTIONS on just one resource
// app.options('/the/resource/you/request', cors())

//allow OPTIONS on all resources
app.options('*', cors());

app.get('/api/books', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' });
});

app.get('/api/greeting', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' });
});
