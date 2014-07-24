/**
 * 定時發送和接收訊息，確認mqtt server是否正常
 */

var mqtt = require('mqtt')
  , client = mqtt.createClient('1883','127.0.0.1',{clientId:'test-client'});
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


client.subscribe('server-live');

client.on('message', function(topic, message) {
	console.log(message);

 	transporter.sendMail({
    	from: 'sender@address',
    	to: 'receiver@address',
    	subject: 'mqtt-server lost connection',
    	text: 'mqtt-server can not publish message。'
	});
});


setInterval(function() {

	var message = new Date().getTime()+'';
	client.publish('server-live', message);

}, 1000);

