const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 3000)
});

server.register(Inert, (err) => {
	if(err) throw err;
});

server.route({path: '/', method: 'GET', handler: (request, reply) => {

}});
