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
    nameprefix: process.env.NAMEPREFIX,
    title: process.env.TITLE,
    role: process.env.ROLE,
    note: process.env.NOTE,
    birthday: process.env.BIRTHDAY,
    email: process.env.EMAIL,    
    cellphone: process.env.CELLPHONE,

    source_vip: process.env.SOURCE_VIP,
    SOURCE_work: process.env.SOURCE_WORK,
    photo: process.env.PHOTO,
};

