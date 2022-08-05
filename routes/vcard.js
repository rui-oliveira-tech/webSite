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

  switch (type) {
    case "work":
      // Set properties that will only be in "work" card
      break;

    case "vip":
      // Set properties that will only be in "vip" card
      break;

    default:
      break;
  }

  // Save file
  vcard.saveToFile(outputFile);
  return outputFile;
}

module.exports = vcardRouter;