var mqtt = require('mqtt')
  , client = mqtt.createClient();

client.publish('presence', 'hello!');
client.end();