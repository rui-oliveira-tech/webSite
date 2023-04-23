const path = require("path");
const pdfCvRouter = require('express').Router();
const pdf = require('html-pdf-node');
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
// 403 Forbidden https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//background: #f5f5f5;

pdfCvRouter.post('/create/:type', validatePdfCvType, (req, res, next) => {
  const { type } = req.params;
  const template = path.join(__dirname, "../tmp", `RuiOliveira_CV-${type.toUpperCase()}.pdf`);
  const generatedHtml = pdfTemplate(req.body);
  const options = {
    /*   phantomPath: "./node_modules/phantomjs-prebuilt/bin/phantomjs", */
    format: 'Letter',
    zoomFactor: "1",
    orientation: 'portrait',
    header: {
      height: "15mm",
      contents: '<header></header>'
    },
    footer: {
      height: '15mm',
      contents: {
        default: `<footer><p>Rui Oliveira &mdash; <a href="https://www.rui-oliveira.com/${req.body.currentLanguageCode}">www.rui-oliveira.com</a> &mdash; +32474127175</p><div style="text-align: center;">${req.body.expressions.page} <span>{{page}}</span> of <span>{{pages}}</span></div></footer>`
      }
    }
  };

  if (fs.existsSync(template) && process.env.NODE_ENV !== "development") {
    console.log("File is abalable...")
    downloadFile(res, template)
    return
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Writing HTML to file...")
    fs.writeFileSync(path.join(__dirname, "../tmp", `RuiOliveira_CV-${type.toUpperCase()}.html`), generatedHtml)
    //  return
  }

  console.log("Generating PDF...")
  pdf.generatePdf({ content: generatedHtml }, { format: 'A4' }, (err, newPdf) => {
    if (err) {
      console.error("Error:", err)
      return
    }
    console.log("Downloading PDF...")
    downloadFile(res, template, newPdf);
  });
});

function downloadFile(res, filePath, pdf) {
  const fileName = path.basename(filePath);
  //const file = fs.readFileSync(filePath);
 // const size = fs.statSync(filePath).size;
  const size = pdf.byteLength;
  res.setHeader("Content-Length", size);
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}";`);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("X-Suggested-Filename", fileName);
  res.send(pdf);
}

module.exports = pdfCvRouter;