var mqtt = require('mqtt')
  , client = mqtt.createClient({clientId:'mqtt_client',clean:false});

client.subscribe('presence',{qos:1});
client.on('message', function(topic, message) {
  console.log(message);
});
