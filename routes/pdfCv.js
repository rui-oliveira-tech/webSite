const path = require("path");
const pdfCvRouter = require('express').Router();
const pdf = require('html-pdf');
const config = require('../config');
const fs = require('fs');

const pdfTemplate = require('./documents');

const validatePdfCvType = (req, res, next) => {
  const { type } = req.params;
  if (!config.pdfCv.includes(type)) {
    res.status(404).json({ message: "This type does not exist!" });
  }
  next();
}

pdfCvRouter.post('/create/:type', validatePdfCvType, (req, res, next) => {
  const { type } = req.params;
  const template = path.join(__dirname, "../tmp", `RuiOliveira_CV-${type.toUpperCase()}.pdf`);
  if (fs.existsSync(template)) {
    downloadFile(res, template)
    return
  }
  pdf.create(pdfTemplate(req.body), {}).toFile(template, (err) => {
    if (err) {
      console.error(err)
      return
    }
    downloadFile(res, template)
  });
});

function downloadFile(res, filePath) {
  const fileName = path.basename(filePath);
  const file = fs.readFileSync(filePath);
  const size = fs.statSync(filePath).size;
  res.setHeader("Content-Length", size);
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}";`);
  res.setHeader("Content-Type", "application/pdf");
  res.send(file);
}

module.exports = pdfCvRouter;