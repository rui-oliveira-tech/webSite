const vcardRouter = require('express').Router();
const vCardsJS = require('vcards-js');

vcardRouter.get('/:type', function (req, res, next) {
  const { type } = req.params;
  const fileName = `${type}_vcard.vcf`;
  res.set('Content-Type', `text/vcard; name="${fileName}"`);
  res.set('Content-Disposition', `inline; filename="${fileName}"`);
  const myVcard = getVcard(type, fileName);
  if (myVcard != null) {
    res.download(myVcard);
  } else {
    res.status(500).json({ message: "Could not create requested vcard!" })
  }
});

function getVcard(type, filename) {
  if (!["work", "vip"].includes(type)) return null;

  // Create a new vCard
  const vcard = vCardsJS();
  const outputFile = `${__dirname}/${filename}`;

  // Set common properties
  vCard.firstName = 'Rui';
  vCard.lastName = 'Oliveira';
  vCard.gender = 'M';
  vCard.url = 'https://www.rui-oliveira.com/';
  vCard.socialUrls['linkedIn'] = 'https://www.linkedin.com/in/rui-oliveira--tech/';
  vCard.socialUrls['github'] = 'https://github.com/rui-oliveira-tech/';
  vCard.socialUrls['instagram'] = 'https://www.instagram.com/rui_oliveira_tech/';



  vCard.logo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');

  switch (type) {
    case "work":
      // Set properties that will only be in "work" card
      vCard.namePrefix = 'Sr.';
      vCard.title = 'Software Developer';
      vCard.role = 'Software Development';
      vCard.note = 'Notes on Eric';
      vCard.email = 'hire@rui-oliveira.com';
      vCard.source = 'https://www.rui-oliveira.com/vcard/work';
      vCard.cellPhone = ['312-555-1414'];

      vCard.photo.attachFromUrl('/path/to/file.jpeg');
      break;

    case "vip":
      // Set properties that will only be in "vip" card
      vCard.namePrefix = 'Mr.';
      vCard.title = 'Software Developer';
      vCard.role = 'Software Development';
      vCard.note = 'Notes on Eric';
      vCard.birthday = new Date(1995, 12, 19);
      vCard.anniversary = new Date(1995, 12, 19);
      vCard.email = 'rui.f.oliveira.95@gmail.com';
      vCard.source = 'https://www.rui-oliveira.com/vcard/vip';
      vCard.cellPhone = [
        '312-555-1414',
        '+351934272501'
      ];

      vCard.photo.attachFromUrl('/path/to/file.jpeg');
      break;

    default:
      break;
  }

  // Save file
  vcard.saveToFile(outputFile);
  return outputFile;
}

module.exports = vcardRouter;