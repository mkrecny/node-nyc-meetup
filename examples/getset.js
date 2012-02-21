var client = require('redis').createClient();

var cb = function(){

  client.set('foo', 'bar', function(e, res){
    client.get('foo', function(e, res){
      console.log('val of foo is', res);
    });
  });

  client.hmset('user:1231', {name:'Myles', age:24, race:'cyborg'}, function(e, res){
    client.hget('user:1231', 'race', function(e, race){
      console.log('race is', race);
      client.hincrby('user:1231', 'age', 1, function(e, new_age){
        console.log('new age is', new_age);
        client.hgetall('user:1231', function(e, user){
          console.log(user);
        });
      });
    });
  });
};

client.flushall(cb);
