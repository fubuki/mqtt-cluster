var mqtt = require('mqtt')
  , client = mqtt.createClient();

  
  
client.publish('presence', 'hello!', {qos:1});
client.end();
