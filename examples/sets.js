var client = require('redis').createClient();

var cb = function(){
  var set_a = ['a', 'b', 'c', 'd'];
  var set_b = ['c', 'd', 'e', 'f'];
  //writes
  client.sadd('set_a', set_a, function(e, res){
    client.sadd('set_b', set_b, function(e, res){
      //retrieval
      client.smembers('set_a', function(e, mems){
        console.log('set_a members', mems);
      });
      client.smembers('set_b', function(e, mems){
        console.log('set_b members', mems);
      });
      //the union
      client.sunion('set_a', 'set_b', function(e, union){
        console.log('union', union);
      });
      //the intersection
      client.sinter('set_a', 'set_b', function(e, inter){
        console.log('inter', inter);
      });
    });
  });
};

client.flushall(cb);
