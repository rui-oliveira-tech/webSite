const express = require('express');
//const config = require('../config');
const server = express();
const router = express.Router();



// let serverUpdatedDBDate = Date.now();

function logger(req, res, next) {
    // eslint-disable-next-line no-console
    console.log(`[${req.method}] ${req.url}`);

    /*     if (
          ['POST', 'PUT', 'DELETE'].includes(req.method) && (
            req.url.includes('about')
            || req.url.includes('projects')
            || req.url.includes('questions')
          )
        ) {
          serverUpdatedDBDate = Date.now();
          console.log('Data has been updated at', serverUpdatedDBDate, Date(serverUpdatedDBDate));
        }
        res.setHeader('X-Custom-Update-Date', serverUpdatedDBDate); */

    next();
}


server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});


  
  server.use(`/.netlify/build/api`, router);
  



const vcard = require('../routes/vcard');

server.use('/vcard', vcard);

module.exports = server;