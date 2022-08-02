const fs = require('fs')

exports.handler = async () => {

   /*  const contents = fs.readFileSync('./vcard.vcf', {encoding: 'base64'}); */
    const { greeting } = require(`./vcard.vcf`);

    return {
        statusCode: 200,
        headers: {'Content-type' : 'text/vcard'},
        body: {greeting},
        isBase64Encoded : true,
    }
}