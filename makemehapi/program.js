const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({path: '/home', method: 'GET', handler: (request, reply) => {
  reply('Hello world')
}});

server.start(function() {
  console.log('app running at: ', server.info.uri);
});
