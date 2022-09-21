const path = require("path");
const vcardRouter = require('express').Router();
const vCardsJS = require('vcards-js');
const config = require('../config');
const fs = require("fs");

const validateVcardType = (req, res, next) => {
  const { type } = req.params;
  if (![config.type_0, config.type_1, config.type_2].includes(type)) {
    res.status(404).json({ message: "This type does not exist!" });
  }
  next();
}

vcardRouter.get('/:type', validateVcardType, async function (req, res, next) {
  const { type } = req.params;
  const fileName = `${type}_vcard.vcf`;
  res.set('Content-Type', `text/vcard; name="${fileName}"`);
  res.set('Content-Disposition', `inline; filename="${fileName}"`);
  const myVcard = await getVcard(type, fileName);
  if (myVcard != null) {
    res.send(myVcard);
  } else {
    res.status(500).json({ message: "Could not create requested vcard!" });
  }
});

async function getVcard(type, fileName) {
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
  vCard.source = `https://www.rui-oliveira.com/vcard/${type}`;

  const publicLogoPath = path.join(publicBasePath, "logo_vcard.png");
  vCard.logo.embedFromFile(publicLogoPath);

  switch (type) {
    case config.type_0:
      vCard.namePrefix = '🧑‍🔧 Sr. ';
      vCard.title = '⚡ Industrial electrician ⚡';
      vCard.note = 'An industrial electrician with 5+ years experience looking for job opportunities.';

      const publicPhotoPath = path.join(publicBasePath, "workFoto_vcard.jpg");
      vCard.photo.embedFromFile(publicPhotoPath);
      break;

    case config.type_1:
      vCard.namePrefix = config.nameprefix_1;
      vCard.title = config.title_1;
      vCard.note = config.note_1;
      vCard.birthday = new Date(config.birthday);
      vCard.anniversary = new Date(config.birthday);
      vCard.email = config.email;
      vCard.cellPhone = config.cellphone;

      const privatePhotoPath = path.join(publicBasePath, "workFoto_vcard.jpg");
      vCard.photo.embedFromFile(privatePhotoPath);
      break;

    case config.type_2:
      vCard.namePrefix = config.nameprefix_2;
      vCard.title = config.title_2;
      vCard.note = config.note_2;
      vCard.birthday = new Date(config.birthday);
      vCard.anniversary = new Date(config.birthday);
      vCard.email = config.email;
      vCard.cellPhone = config.cellphone;

      const privateSpecialPhotoPath = path.join(publicBasePath, "workFoto_vcard.jpg");
      vCard.photo.embedFromFile(privateSpecialPhotoPath);
      break;


    default:
      break;
  }
  return vCard.getFormattedString();
}

module.exports = vcardRouter;


