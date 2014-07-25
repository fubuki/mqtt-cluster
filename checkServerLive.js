/**
 * 定時發送和接收訊息，確認mqtt server是否正常
 * 當超過5秒沒有收到訊息就發信給管理者。
 */

var mqtt = require('mqtt')
  , client = mqtt.createClient('1883','127.0.0.1',{clientId:'test-client'});
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var sendEmail = 0;
client.subscribe('server-live');

client.on('message', function(topic, message) {
	console.log(message);

	clearTimeout(sendEmail);
	sendEmail = setInterval(function() {
		transporter.sendMail({
    		from: 'sender@address',
    		to: 'receiver@address',
    		subject: 'mqtt-server lost connection',
    		text: 'mqtt-server can not publish message。'
		});
	}, 5000);
});


setInterval(function() {

	var message = new Date().getTime()+'';
	client.publish('server-live', message);

}, 1000);

