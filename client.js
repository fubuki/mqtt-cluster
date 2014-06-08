var mqtt = require('mqtt')
  , client = mqtt.createClient('1883','192.168.65.145',{clientId:'mqtt_client',clean:false});

client.subscribe('presence',{qos:1});
client.on('message', function(topic, message) {
  console.log(message);
});
