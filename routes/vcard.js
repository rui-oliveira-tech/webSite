const vcard = require('express').Router();



vcard.get("/vip", (req, res) => {

     res.json({ message: "vip vcard!" }); 
});


vcard.get('/work', function (req, res, next) {

    var vCardsJS = require('vcards-js');
    var fileName = '/vcard.vcf';

    //create a new vCard
    vCard = vCardsJS();

    //set properties
    vCard.firstName = 'Eric';
    vCard.middleName = 'J';
    vCard.lastName = 'Nesser';
    vCard.organization = 'ACME Corporation';

    //set content-type and disposition including desired filename
    res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
    res.set('Content-Disposition', 'inline; filename="enesser.vcf"');

    //send the response
    vCard.saveToFile(__dirname + fileName);
    
    res.download(__dirname + fileName);
    res.send(200);
    res.end();
});

module.exports = vcard;