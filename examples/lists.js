var client = require('redis').createClient();
var cb = function(){
  client.lpush('some_list', 'a', function(e, res){
    client.rpop('some_list', function(e, res){
      console.log('popped', res);
    });
  });

  client.lpush('another_list', ['a','b','c','d'], function(e, res){
    client.lindex('another_list', 2, function(e, res){
      console.log('got', res);
    });
  });
};
client.flushall(cb);
