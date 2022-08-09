const path = require("path");
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
    res.status(400).json({ message: "Could not create requested vcard!" });
  }
});

function getVcard(type, fileName) {
  if (![config.type_0, config.type_1].includes(type)) return null;

  // Create a new vCard
  const vCard = vCardsJS();
  const publicBasePath = path.join(__dirname, "../client/public");
  const tmpPath = path.join(__dirname, "../tmp");
  const outputPath = path.join(tmpPath, fileName);

  // Set common properties
  vCard.version = '3.0';
  vCard.firstName = 'Rui';
  vCard.lastName = 'Oliveira';
  vCard.gender = 'M';
  vCard.workPhone = '+32474127175';
  vCard.workEmail = 'hire@rui-oliveira.com';
  vCard.url = 'https://www.rui-oliveira.com/';
  vCard.socialUrls['linkedIn'] = 'https://www.linkedin.com/in/rui-oliveira--tech/';
  vCard.socialUrls['github'] = 'https://github.com/rui-oliveira-tech/';
  vCard.socialUrls['instagram'] = 'https://www.instagram.com/rui_oliveira_tech/';
  
  const publicLogoPath = path.join(publicBasePath, "logo_vcard.png");
  vCard.logo.embedFromFile(publicLogoPath);

  switch (type) {
    case config.type_0:
      vCard.namePrefix = 'Sr. ';
      vCard.title = 'Industrial electrician';
      vCard.role = 'Industrial electrician';
      vCard.note = 'An industrial electrician with 5+ years experience looking for job opportunities.';
      vCard.source = `https://www.rui-oliveira.com/vcard/${config.type_0}`;

      const publicPhotoPath = path.join(publicBasePath, "workFoto_vcard.jpg");
      vCard.photo.embedFromFile(publicPhotoPath);
      break;

    case config.type_1:
      vCard.namePrefix = config.nameprefix;
      vCard.title = config.title;
      vCard.role = config.role;
      vCard.note = config.note;
      vCard.birthday = new Date(config.birthday);
      vCard.anniversary = new Date(config.birthday);
      vCard.email = config.email;
      vCard.source = `https://www.rui-oliveira.com/vcard/${config.type_1}`;
      vCard.cellPhone = config.cellphone;

      const privatePhotoPath = path.join(publicBasePath, "workFoto_vcard.jpg");
      vCard.photo.embedFromFile(privatePhotoPath);
      break;

    default:
      break;
  }
  // Save file
  vCard.saveToFile(outputPath);
  return outputPath;
}
module.exports = vcardRouter;


