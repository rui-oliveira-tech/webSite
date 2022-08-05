const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('../config');
const server = express();

function logger(req, res, next) {
  // eslint-disable-next-line no-console
  console.log(`[${req.method}] ${req.url}`);
  next();
}

server.use(helmet());
server.use(cors({ origin: config.origin }));
server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});
  
const vcard = require('../routes/vcard');

server.use('/vcard', vcard);

module.exports = server;
