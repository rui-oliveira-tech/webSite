const vcard = require('express').Router();

vcard.get("/", (req, res) => {
    /* res.json({ message: "work vcard!" }); */
    var fileName = '/vcard.vcf';
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

vcard.get("/vip", (req, res) => {

    res.json({ message: "vip vcard!" });
});


vcard.get('/work', function (req, res, next) {

    var vCardsJS = require('vcards-js');

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
    res.send(vCard.getFormattedString());
});

module.exports = vcard;