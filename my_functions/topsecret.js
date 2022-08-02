const fs = require('fs')

exports.handler = async () => {

    const contents = fs.readFileSync('./vcard.vcf', {encoding: 'base64'});

    return {
        statusCode: 200,
        headers: {'text/vcard'},
        body: contents,
        isBase64Encoded : true,
    }
}