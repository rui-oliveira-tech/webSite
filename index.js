const server = require('./server');
//const { port } = require('./config');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
});