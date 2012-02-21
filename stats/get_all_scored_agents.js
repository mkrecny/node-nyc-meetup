var client = require('redis').createClient();

client.zrevrangebyscore('unique_scored_agents', '+inf', '-inf', function(e, scored_agents){
  console.log('Agents ranked by score:');
  console.log(scored_agents);
});
