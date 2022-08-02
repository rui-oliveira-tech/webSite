const fs = require('fs')

exports.handler = async () => {

    const contents = fs.readFileSync('/path/to/img.jpg', {encoding: 'base64'});

    return {
        statusCode: 200,
        headers: {'Content-type' : 'text/vcard'},
        body: contents,
        isBase64Encoded : true,
    }
}