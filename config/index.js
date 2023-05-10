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

    type_0: process.env.TYPE_0,
    type_1: process.env.TYPE_1,
    type_2: process.env.TYPE_2,
    type_company: process.env.TYPE_COMPANY,

    birthday: process.env.BIRTHDAY,
    email: process.env.EMAIL,
    cellphone: process.env.CELLPHONE,
    photo: process.env.PHOTO,

    nameprefix_1: process.env.NAMEPREFIX_1,
    title_1: process.env.TITLE_1,
    note_1: process.env.NOTE_1,

    nameprefix_2: process.env.NAMEPREFIX_2,
    title_2: process.env.TITLE_2,
    note_2: process.env.NOTE_2,

    nameprefix_company: process.env.NAMEPREFIX_COMPANY,
    title_company: process.env.TITLE_COMPANY,
    note_title_company: process.env.NOTE_COMPANY,
    email_company: process.env.EMAIL_COMPANY,
    cellphone_email_company: process.env.CELLPHONE_COMPANY,


    pdfCv: ['en', 'nl', 'fr', 'pt']
};