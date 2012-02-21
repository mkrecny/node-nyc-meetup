var client = require('redis').createClient();
client.flushall();
/*
 * GET home page.
 */

exports.clients = function(req, res){
  client.hincrby('agents', req.headers['user-agent'], 1, function(e, data){
    res.end("You're number "+data+" with user-agent "+req.headers['user-agent']);
  });
};

exports.set_clients = function(req, res){
  client.sadd('unique_agents', req.headers['user-agent'], function(e, data){
    var result = data ? '' : 'not';
    res.end("You are "+result+" the first one with this user-agent");
  });
};

exports.zset_clients = function(req, res){
  client.zincrby('unique_scored_agents', 1, req.headers['user-agent'], function(e, data){
    res.end("You made the "+data+"th request with this user-agent");
  });
};
