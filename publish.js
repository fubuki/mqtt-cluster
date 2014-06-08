var mqtt = require('mqtt')
  , client = mqtt.createClient('1883','192.168.65.145');

  
  
client.publish('presence', 'hello!', {qos:1});
client.end();
