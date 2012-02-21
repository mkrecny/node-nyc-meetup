var client = require('redis').createClient()

var publishMsg = function(){
  client.publish('nodenyc', 'Hi, just wanted to say '+Math.random());
};

setInterval(publishMsg, 1000);
