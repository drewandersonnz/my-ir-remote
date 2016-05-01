var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var config = require.main.require('./config');
var web = require.main.require('./web');
var irDuino = require.main.require('./model/ir-duino');

// Express cconfiguration
var app = express();
app.disable('x-powered-by'); // hide express to reduce security risk
app.use(morgan(':date[iso] :remote-addr :method :url :status :res[content-length] :response-time ms'));
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public'));

// Jade
app.set('views', './web');
app.set('view engine', 'jade');

// Homepage
app.get('/', function(request, response) {
    response.render('index');
});

app.get('/custom', function(request, response) {
    response.render('custom');
});

// Homepage
app.get('/send', function(request, response) {
    if (! request.query.remote) {
        return response.send("FAIL");
    }

    var remote = config.getRemote(request.query.remote);

    switch (request.query.type) {
        case 'command':
            irDuino.send(remote.getCommand(request.query.command));
            break;
        case 'keypress':
            irDuino.send(remote.getKeypress(request.query.key));
            break;
        case 'raw':
            irDuino.send(request.query.raw);
            break;
        default: break;
    }

    response.send("OK");
});

// Start listening
app.listen(3000, '0.0.0.0', function () {
    console.log(`http: listening`);
});
