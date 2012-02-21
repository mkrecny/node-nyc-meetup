var client = require('redis').createClient();

client.hgetall('agents', function(e, agents){
  console.log(agents);
  console.log(Object.keys(agents).length, 'unique agents');
});
