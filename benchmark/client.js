var mqtt = require('mqtt')
var clientList = []; 
var clientId = 'test_client:';
var message_count = 0;

for (var i = 0; i < 2000; i++) {
	var client = mqtt.createClient({
		clientId:clientId+i
	});

	clientList[i] = client;
	client.subscribe('presence');
	client.on('message', function(topic, message, packet) {
		
		message_count++;
		if(message_count == 1000) {
			message_count = 0;
			console.log('finsh');

		}
  	});
};

console.log('create clients finish');
