var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var cors = require('cors')
var properties = require('./config/properties');
var db = require('./config/database');
//hero routes
var Routes = require('./Routes/route');
var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors())
// Error handling

// use express router
app.use('/api',router);
//call heros routing
Routes(router);

// intialise server
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})
