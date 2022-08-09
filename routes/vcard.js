const vcardRouter = require('express').Router();
const vCardsJS = require('vcards-js');
const config = require('../config');

vcardRouter.get('/:type', function (req, res, next) {
  const { type } = req.params;
  const fileName = `${type}_vcard.vcf`;
  res.set('Content-Type', `text/vcard; name="${fileName}"`);
  res.set('Content-Disposition', `inline; filename="${fileName}"`);
  const myVcard = getVcard(type, fileName);
  if (myVcard != null) {
    res.download(myVcard);
  } else {
    res.status(500).json({ message: "Could not create requested vcard!" });
  }
});

function getVcard(type, fileName) {
  var vCard = vCardsJS();
  if (![config.type_0, config.type_1].includes(type)) return null;

  // Create a new vCard
  const vcard = vCardsJS();
  const outputFile = `${__dirname}/${fileName}`;

  // Set common properties
  vCard.version = '4.0';
  vCard.firstName = 'Rui';
  vCard.lastName = 'Oliveira';
  vCard.gender = 'M';
  vCard.workEmail = 'hire@rui-oliveira.com';
  vCard.url = 'https://www.rui-oliveira.com/';
  vCard.socialUrls['linkedIn'] = 'https://www.linkedin.com/in/rui-oliveira--tech/';
  vCard.socialUrls['github'] = 'https://github.com/rui-oliveira-tech/';
  vCard.socialUrls['instagram'] = 'https://www.instagram.com/rui_oliveira_tech/';
  vCard.logo.attachFromUrl('https://www.rui-oliveira.com/logo_vcard.png', 'PNG');

  switch (type) {
    case config.type_0:
      // Set properties that will only be in "work" card
      vCard.namePrefix = 'Sr. ';
      vCard.title = 'Industrial electrician';
      vCard.role = 'Industrial electrician';
      vCard.note = 'An industrial electrician with 5+ years experience looking for job opportunities.';
      vCard.source = `https://www.rui-oliveira.com/vcard/${config.type_0}`;
      vCard.cellPhone = ['+32474127175'];

      vCard.photo.attachFromUrl('https://www.rui-oliveira.com/workFoto_vcard.jpg', 'JPG');
      break;

    case config.type_1:
      let birthdayArray = config.birthday.split("-");
      // Set properties that will only be in "vip" card
      vCard.namePrefix = config.nameprefix;
      vCard.title = config.title;
      vCard.role = config.role;
      vCard.note = config.note;
      vCard.birthday = new Date(Number(birthdayArray[0]), Number(birthdayArray[1]), Number(birthdayArray[2]));
      vCard.anniversary = new Date(Number(birthdayArray[0]), Number(birthdayArray[1]), Number(birthdayArray[2]));
      vCard.email = config.email;
      vCard.source = `https://www.rui-oliveira.com/vcard/${config.type_1}`;
      vCard.cellPhone = [
        '+32474127175',
        config.cellphone
      ];

      vCard.photo.attachFromUrl(config.photo, 'JPG');
      break;

    default:
      break;
  }
  // Save file
  vCard.saveToFile(outputFile);
  return outputFile;
}
module.exports = vcardRouter;