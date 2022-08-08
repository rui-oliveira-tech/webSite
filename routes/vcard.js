const vcardRouter = require('express').Router();
const vCardsJS = require('vcards-js');

vcardRouter.get('/:type', function (req, res, next) {
  const { type } = req.params;
  const fileName = `${type}_vcard.vcf`;
  res.set('Content-Type', `text/vcard; name="${fileName}"`);
  res.set('Content-Disposition', `inline; filename="${fileName}"`);
  //const myVcard = getVcard(type, fileName);
  res.status(200).json({ message: "Could not create requested vcard!" });
  console.log("asda");
 /*  if (myVcard != null) {
    res.download(myVcard);
  } else {
    res.status(500).json({ message: "Could not create requested vcard!" });
  } */
});



function getVcard(type, fileName) {
  var vCard = vCardsJS();
  if (!["work", "vip"].includes(type)) return null;

  // Create a new vCard
  const vcard = vCardsJS();
  const outputFile = `${__dirname}/${fileName}`;

  // Set common properties
  vCard.firstName = 'Rui';
  vCard.lastName = 'Oliveira';
  vCard.gender = 'M';
  vCard.url = 'https://www.rui-oliveira.com/';
  vCard.socialUrls['linkedIn'] = 'https://www.linkedin.com/in/rui-oliveira--tech/';
  vCard.socialUrls['github'] = 'https://github.com/rui-oliveira-tech/';
  vCard.socialUrls['instagram'] = 'https://www.instagram.com/rui_oliveira_tech/';



  vCard.logo.attachFromUrl('https://www.rui-oliveira.com/logo_vcard.png', 'PNG');

  switch (type) {
    case "work":
      // Set properties that will only be in "work" card
      vCard.namePrefix = 'Sr.';
      vCard.title = 'Industrial electrician';
      vCard.role = 'Industrial electrician';
      vCard.note = 'An industrial electrician with 5+ years experience looking for job opportunities.';
      vCard.email = 'hire@rui-oliveira.com';
      vCard.source = 'https://www.rui-oliveira.com/vcard/work';
      vCard.cellPhone = ['+32474127175'];

      vCard.photo.attachFromUrl('https://www.rui-oliveira.com/workFoto_vcard.jpg', 'JPG');
      break;

    case "vip":
      // Set properties that will only be in "vip" card
      vCard.namePrefix = 'Besty.';
      vCard.title = 'industrial electrician';
      vCard.role = 'Industrial electrician';
      vCard.note = 'Your best friend';
      vCard.birthday = new Date(1995, 12, 19);
      vCard.anniversary = new Date(1995, 12, 19);
      vCard.email = 'rui.f.oliveira.95@gmail.com';
      vCard.source = 'https://www.rui-oliveira.com/vcard/vip';
      vCard.cellPhone = [
        '+32474127175',
        '+351934272501'
      ];

      vCard.photo.attachFromUrl('https://www.rui-oliveira.com/workFoto_vcard.jpg', 'JPG');
      break;

    default:
      break;
  }

  // Save file
  vCard.saveToFile(outputFile);
  return outputFile;
}

module.exports = vcardRouter;