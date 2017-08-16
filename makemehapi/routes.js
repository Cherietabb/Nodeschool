const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 3000)
});

server.route({path: '/{name}', method: 'GET', handler: (request, reply) => {
	reply('Hello ' + request.params.name)
}});

server.start(function() {
	console.log('app running at: ', server.info.uri);
});
