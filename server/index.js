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
// server.use(express.static("images"))

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});
  
const vcard = require('../routes/vcard');
const pdfCv = require('../routes/pdfCv');

server.use('/vcard', vcard);
server.use('/cv-pdf', pdfCv);

module.exports = server;
