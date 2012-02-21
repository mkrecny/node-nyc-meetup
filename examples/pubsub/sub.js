var client = require('redis').createClient()

client.on('subscribe', function(channel, count){
  console.log('subscribed to', channel);
});

client.on('message', function(channel, msg){
  console.log(channel,':', msg); 
});

client.subscribe('nodenyc')  
