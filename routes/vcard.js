const vcardRouter = require('express').Router();
const vCardsJS = require('vcards-js');


vcardRouter.get('/:type', function (req, res, next) {
  const { type } = req.params;
  const fileName = `${type}_vcard.vcf`;

  const outputFile = `${__dirname}/${fileName}`;


  //create a new vCard
  const vCard = vCardsJS();

  //set properties
  vCard.firstName = 'Eric';
  vCard.middleName = 'J';
  vCard.lastName = 'Nesser';
  vCard.organization = 'ACME Corporation';
  vCard.photo.attachFromUrl('https://.githubuqwqv=3&s=460', 'JPEG');
  vCard.workPhone = '312-555-1212';
  vCard.birthday = new Date(1985, 0, 1);
  vCard.title = 'Software Developer';
  vCard.url = 'https://github.com/enesser';
  vCard.note = 'Notes on Eric';

  //save to file
  vCard.saveToFile(outputFile);

  //get as formatted string
  console.log(vCard.getFormattedString());
  res.set('Content-Type', `text/vcard; name="${fileName}"`);
  res.set('Content-Disposition', `inline; filename="${fileName}"`);

  res.download(outputFile);

});

module.exports = vcardRouter;