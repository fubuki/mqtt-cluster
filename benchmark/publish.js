var mqtt = require('mqtt')
  , client = mqtt.createClient();


for (var i = 0; i < 2; i++) {
	client.publish('presence', 'hello!');	
};


client.end();