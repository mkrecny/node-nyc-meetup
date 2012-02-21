
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/clients', routes.clients);
app.get('/set_clients', routes.set_clients);
app.get('/zset_clients', routes.zset_clients);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
