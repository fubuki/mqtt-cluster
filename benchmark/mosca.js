var mosca = require('mosca')
var redis = require('redis')
var posix = require('posix')
posix.setrlimit('nofile', { soft: 10000, hard: 10000 });

var ascoltatore = {
	type: 'redis',
	port: 6379,
	host: '127.0.0.1'
};

var retain = {
	factory: mosca.persistence.Redis,
	port: 6379,
	host: '127.0.0.1'
};

var settings = {
	port: 1883,
	stats: true, // publish stats in the $SYS/<id> topicspace
	backend: ascoltatore ,
	persistence: retain
};

var server = new mosca.Server(settings);
server.on('ready', setup);

function setup() {
	  console.log('Mosca server is up and running')
}

