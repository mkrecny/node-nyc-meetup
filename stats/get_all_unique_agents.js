var client = require('redis').createClient();

client.smembers('unique_agents', function(e, agents){
  console.log(agents);
});

client.scard('unique_agents', function(e, card){
  console.log(card, 'unique agents');
});
