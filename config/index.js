require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    origin: [
        '[rui-oliveira.netlify.app]',
        'http://www.rui-oliveira.com',
        'https://www.rui-oliveira.com',
        'http://localhost',
        'http://localhost:3000',
    ],
};